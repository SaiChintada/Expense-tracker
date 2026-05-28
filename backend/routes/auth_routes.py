from fastapi import (
    APIRouter,
    Depends,
    HTTPException
)

from sqlalchemy.orm import Session

from database import SessionLocal

from models.user_model import User

from utils.auth import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

# DATABASE
def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# REGISTER
@router.post("/register")
def register(
    user: dict,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.get("email")
    ).first()

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = User(

        username=user.get("username"),

        email=user.get("email"),

        password=hash_password(
            user.get("password")[:72]
        )
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }


# LOGIN
@router.post("/login")
def login(
    user: dict,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.get("email")
    ).first()

    if not existing_user:

        raise HTTPException(
            status_code=401,
            detail="Invalid Email"
        )

    valid_password = verify_password(
        user.get("password")[:72],
        existing_user.password
    )

    if not valid_password:

        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    token = create_access_token({
        "id": existing_user.id,
        "email": existing_user.email
    })

    return {
    "access_token": token,
    "token_type": "bearer"
}