from . import create_route
from authentication import get_current_user
from database import get_pd_db
from fastapi import Depends
from schemas import CreateUser
from schemas import CreateML
import pandas as PD
from models import Models
from sqlalchemy.orm import Session
from database import get_db

router = create_route(
    prefix="mlmodels",
    tags="MLModels",
)


@router.post("")
async def train_and_predict(
    request: CreateML,
    pd: PD = Depends(get_pd_db),
    user: CreateUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    model = Models(
        title=request.title,
        description=request.description,
        user_id=request.user_id,
        created_at=request.created_at,
    )
    db.add(model)
    db.commit()
    db.refresh(model)
    return model
    pass


@router.post("/")
async def get_trained_data(
    user: CreateUser = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    pass
