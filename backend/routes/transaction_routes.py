from fastapi import (
    APIRouter,
    Depends,
    HTTPException
)

from sqlalchemy.orm import Session

from database import SessionLocal

# Models
from models.transcation import Transaction
from models.user_model import User

# Auth
from utils.auth import get_current_user

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)

# Database Dependency
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