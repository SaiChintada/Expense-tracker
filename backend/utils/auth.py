from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta

# Password Hashing
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

# JWT Config
SECRET_KEY = "expense_tracker_secret"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60

# Hash Password
def hash_password(password: str):

    return pwd_context.hash(password)

# Verify Password
def verify_password(
    plain_password,
    hashed_password
):

    return pwd_context.verify(
        plain_password,
        hashed_password
    )

# Create JWT Token
def create_access_token(data: dict):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({
        "exp": expire
    })

    encoded_jwt = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return encoded_jwt

from jose import jwt, JWTError
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from database import SessionLocal
from models.user_model import User

SECRET_KEY = "SECRET123"
ALGORITHM = "HS256"

security = HTTPBearer()

# Get DB
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()

# Get Current User
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db = Depends(get_db)
):

    token = credentials.credentials

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        user_id = payload.get("id")

        if not user_id:
            raise HTTPException(
                status_code=401,
                detail="Invalid Token"
            )

        user = db.query(User).filter(
            User.id == user_id
        ).first()

        if not user:
            raise HTTPException(
                status_code=401,
                detail="User not found"
            )

        return user

    except JWTError:

        raise HTTPException(
            status_code=401,
            detail="Invalid Token"
        )