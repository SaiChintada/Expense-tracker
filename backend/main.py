from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine

from routes.transaction_routes import router as transaction_router
from routes.auth_routes import router as auth_router

# CREATE TABLES
Base.metadata.create_all(bind=engine)

# FASTAPI APP
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
app.include_router(transaction_router)

app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Expense Tracker API Running"
    }