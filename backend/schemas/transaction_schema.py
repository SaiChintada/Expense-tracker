from pydantic import BaseModel

class TransactionBase(BaseModel):
    title: str
    amount: float
    category: str
    type: str
    date: str

class TransactionCreate(TransactionBase):
    pass

class TransactionResponse(TransactionBase):
    id: int

    class Config:
        orm_mode = True