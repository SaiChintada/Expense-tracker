from fastapi import (
    APIRouter,
    Depends,
    Header,
    HTTPException,
)

from sqlalchemy.orm import Session

from database import SessionLocal

from models.transaction import Transaction

from schemas.transaction_schema import (
    TransactionCreate,
)

from utils.auth import verify_token

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)

def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()

def get_current_user(
    authorization: str = Header(None)
):

    print("AUTH HEADER:", authorization)

    if not authorization:

        raise HTTPException(
            status_code=401,
            detail="Token missing"
        )

    token = authorization.split(
        " "
    )[1]

    payload = verify_token(
        token
    )

    print("PAYLOAD:", payload)

    if not payload:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    return payload

@router.post("/")

def add_transaction(

    transaction: TransactionCreate,

    db: Session = Depends(get_db),

    user=Depends(get_current_user)

):

    new_transaction = Transaction(

        title=transaction.title,

        amount=transaction.amount,

        category=transaction.category,

        type=transaction.type,

        date=transaction.date,

        user_id=user["id"]
    )

    db.add(new_transaction)

    db.commit()

    db.refresh(new_transaction)

    return {
        "message":
        "Transaction Added"
    }

@router.get("/")

def get_transactions(

    db: Session = Depends(get_db),

    user=Depends(get_current_user)

):

    transactions = db.query(
        Transaction
    ).filter(
        Transaction.user_id
        == user["id"]
    ).all()

    return transactions

@router.put("/{transaction_id}")

def update_transaction(

    transaction_id: int,

    updated_transaction:
    TransactionCreate,

    db: Session = Depends(get_db),

    user=Depends(get_current_user)

):

    transaction = db.query(
        Transaction
    ).filter(

        Transaction.id
        == transaction_id,

        Transaction.user_id
        == user["id"]

    ).first()

    if not transaction:

        raise HTTPException(

            status_code=404,

            detail="Transaction not found"
        )

    transaction.title = (
        updated_transaction.title
    )

    transaction.amount = (
        updated_transaction.amount
    )

    transaction.category = (
        updated_transaction.category
    )

    transaction.type = (
        updated_transaction.type
    )

    transaction.date = (
        updated_transaction.date
    )

    db.commit()

    return {

        "message":
        "Transaction updated"
    }