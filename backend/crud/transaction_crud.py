from sqlalchemy.orm import Session

from backend.models.transaction import Transaction
from backend.schemas.transaction_schema import TransactionCreate


def create_transaction(
    db: Session,
    transaction: TransactionCreate
):
    db_transaction = Transaction(
        title=transaction.title,
        amount=transaction.amount,
        category=transaction.category,
        type=transaction.type,
        date=transaction.date
    )

    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)

    return db_transaction


def get_transactions(db: Session):
    return db.query(Transaction).all()


def delete_transaction(
    db: Session,
    transaction_id: int
):
    transaction = (
        db.query(Transaction)
        .filter(Transaction.id == transaction_id)
        .first()
    )

    if transaction:
        db.delete(transaction)
        db.commit()

    return transaction


def update_transaction(
    db: Session,
    transaction_id: int,
    updated_data: TransactionCreate
):
    transaction = (
        db.query(Transaction)
        .filter(Transaction.id == transaction_id)
        .first()
    )

    if transaction:
        transaction.title = updated_data.title
        transaction.amount = updated_data.amount
        transaction.category = updated_data.category
        transaction.type = updated_data.type
        transaction.date = updated_data.date

        db.commit()
        db.refresh(transaction)

    return transaction