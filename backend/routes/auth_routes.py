from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

# Database
from database import SessionLocal

# Models
from models.user_model import User

# Schemas
from schemas.user_schema import (
    UserCreate,
    UserLogin
)

# Auth Utils
from utils.auth import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter()

# =========================
# Database Dependency
# =========================
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

# =========================
# REGISTER API
# =========================
@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    # Check Existing Email
    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    # Hash Password
    hashed_password = hash_password(
        user.password
    )

    # Create User
    new_user = User(
        username=user.username,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }

# =========================
# LOGIN API
# =========================
@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    # Find User
    db_user = db.query(User).filter(
        User.email == user.email
    ).first()

    # Email Check
    if not db_user:

        raise HTTPException(
            status_code=400,
            detail="Invalid Email"
        )

    # Password Check
    if not verify_password(
        user.password,
        db_user.password
    ):

        raise HTTPException(
            status_code=400,
            detail="Invalid Password"
        )

    # Generate JWT Token
    access_token = create_access_token(
        data={
            "sub": db_user.email
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "username": db_user.username,
            "email": db_user.email
        }
    }