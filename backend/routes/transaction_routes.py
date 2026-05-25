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


# GET TRANSACTIONS
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

        title=transaction["title"],

        amount=float(
            transaction["amount"]
        ),

        category=transaction["category"],

        type=transaction["type"],

        date=transaction["date"],

        user_id=current_user.id
    )

    db.add(new_transaction)

    db.commit()

    db.refresh(new_transaction)

    return {
        "message":
        "Transaction Added"
    }


# DELETE TRANSACTION
@router.delete("/{id}")
def delete_transaction(

    id: int,

    current_user: User = Depends(get_current_user),

    db: Session = Depends(get_db)

):

    transaction = db.query(
        Transaction
    ).filter(
        Transaction.id == id,
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
        "message":
        "Deleted Successfully"
    }


# UPDATE TRANSACTION
@router.put("/{id}")
def update_transaction(

    id: int,

    updated_data: dict,

    current_user: User = Depends(get_current_user),

    db: Session = Depends(get_db)

):

    transaction = db.query(
        Transaction
    ).filter(
        Transaction.id == id,
        Transaction.user_id == current_user.id
    ).first()

    if not transaction:

        raise HTTPException(
            status_code=404,
            detail="Transaction not found"
        )

    transaction.title = updated_data["title"]

    transaction.amount = float(
        updated_data["amount"]
    )

    transaction.category = updated_data["category"]

    transaction.type = updated_data["type"]

    transaction.date = updated_data["date"]

    db.commit()

    return {
        "message":
        "Updated Successfully"
    }