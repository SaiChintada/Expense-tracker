from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.auth_routes import router as auth_router
from routes.transaction_routes import router as transaction_router

from database import Base, engine

# CREATE TABLES
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROUTES
app.include_router(auth_router)

app.include_router(transaction_router)


@app.get("/")
def home():

    return {
        "message": "Expense Tracker API Running"
    }