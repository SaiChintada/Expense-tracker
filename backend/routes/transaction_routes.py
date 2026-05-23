from fastapi import (
    APIRouter,
    Depends,
    HTTPException
)

from sqlalchemy.orm import Session

from database import SessionLocal

from models.transaction import Transaction
from models.user_model import User

from utils.auth import get_current_user

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)

# DATABASE
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# GET ALL TRANSACTIONS
@router.get("/")
def get_transactions(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    transactions = db.query(
        Transaction
    ).filter(
        Transaction.user_id == current_user.id
    ).all()

    return transactions


# ADD TRANSACTION
@router.post("/")
def add_transaction(
    transaction: dict,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    new_transaction = Transaction(

        title=transaction.get("title"),

        amount=transaction.get("amount"),

        category=transaction.get("category"),

        type=transaction.get("type"),

        date=transaction.get("date"),

        user_id=current_user.id
    )

    db.add(new_transaction)

    db.commit()

    db.refresh(new_transaction)

    return new_transaction


# UPDATE TRANSACTION
@router.put("/{transaction_id}")
def update_transaction(
    transaction_id: int,
    updated_data: dict,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    transaction = db.query(
        Transaction
    ).filter(
        Transaction.id == transaction_id,
        Transaction.user_id == current_user.id
    ).first()

    if not transaction:

        raise HTTPException(
            status_code=404,
            detail="Transaction not found"
        )

    transaction.title = updated_data.get(
        "title",
        transaction.title
    )

    transaction.amount = updated_data.get(
        "amount",
        transaction.amount
    )

    transaction.category = updated_data.get(
        "category",
        transaction.category
    )

    transaction.type = updated_data.get(
        "type",
        transaction.type
    )

    transaction.date = updated_data.get(
        "date",
        transaction.date
    )

    db.commit()

    db.refresh(transaction)

    return transaction


# DELETE TRANSACTION
@router.delete("/{transaction_id}")
def delete_transaction(
    transaction_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    transaction = db.query(
        Transaction
    ).filter(
        Transaction.id == transaction_id,
        Transaction.user_id == current_user.id
    ).first()

    if not transaction:

        raise HTTPException(
            status_code=404,
            detail="Transaction not found"
        )

    db.delete(transaction)

    db.commit()

    return {
        "message": "Transaction deleted successfully"
    }