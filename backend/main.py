from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend import crud
from backend.schemas import TransportationDataSchema

app = FastAPI(title="AI Twin Smart City API")


# Database Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "AI Twin Smart City Backend is Running!"
    }


@app.get("/summary")
def summary():
    db = SessionLocal()

    total = crud.get_total_records(db)

    db.close()

    return {
        "total_records": total
    }


@app.get("/traffic", response_model=list[TransportationDataSchema])
def get_all_traffic(db: Session = Depends(get_db)):
    return crud.get_all_traffic(db)

@app.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    return crud.get_dashboard_summary(db)