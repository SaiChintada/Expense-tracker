from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import Routes
from routes.auth_routes import router as auth_router

# Create FastAPI App
app = FastAPI()


# CORS Configuration

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes

app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Auth"]
)


# Test Route

@app.get("/")
def home():
    return {
        "message": "Expense Tracker API Running Successfully"
    }