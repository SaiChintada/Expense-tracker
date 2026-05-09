from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import SessionLocal

from schemas.transaction_schema import (
    TransactionCreate
)

from crud.transaction_crud import (
    create_transaction,
    get_transactions,
    delete_transaction,
    update_transaction
)

router = APIRouter()


def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/transactions")
def add_transaction(
    transaction: TransactionCreate,
    db: Session = Depends(get_db)
):
    return create_transaction(db, transaction)


@router.get("/transactions")
def read_transactions(
    db: Session = Depends(get_db)
):
    return get_transactions(db)


@router.delete("/transactions/{id}")
def remove_transaction(
    id: int,
    db: Session = Depends(get_db)
):
    return delete_transaction(db, id)


@router.put("/transactions/{id}")
def edit_transaction(
    id: int,
    updated_data: TransactionCreate,
    db: Session = Depends(get_db)
):
    return update_transaction(
        db,
        id,
        updated_data
    )