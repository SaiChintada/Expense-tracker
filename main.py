from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CREATE
@app.post("/transactions/", response_model=schemas.TransactionResponse)
def create_transaction(transaction: schemas.TransactionCreate, db: Session = Depends(get_db)):
    db_item = models.Transaction(**transaction.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

# READ
@app.get("/transactions/", response_model=list[schemas.TransactionResponse])
def get_transactions(db: Session = Depends(get_db)):
    return db.query(models.Transaction).all()

# DELETE
@app.delete("/transactions/{id}")
def delete_transaction(id: int, db: Session = Depends(get_db)):
    item = db.query(models.Transaction).filter(models.Transaction.id == id).first()
    if item:
        db.delete(item)
        db.commit()
    return {"message": "Deleted"}