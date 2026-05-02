from pydantic import BaseModel

class TransactionBase(BaseModel):
    title: str
    note: str
    amount: float
    category: str
    type: str

class TransactionCreate(TransactionBase):
    pass

class TransactionResponse(TransactionBase):
    id: int

    class Config:
        from_attributes = True