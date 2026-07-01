from sqlalchemy.orm import Session
from backend.models import TransportationData


# Get all traffic records
def get_all_traffic(db: Session):
    return db.query(TransportationData).all()


# Get one traffic record
def get_traffic_by_id(db: Session, record_id: int):
    return db.query(TransportationData).filter(
        TransportationData.Record_ID == record_id
    ).first()


# Get total records
def get_total_records(db: Session):
    return db.query(TransportationData).count()