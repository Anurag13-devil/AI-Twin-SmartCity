from sqlalchemy.orm import Session
from sqlalchemy import func
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


# Dashboard Summary
def get_dashboard_summary(db: Session):
    total_records = db.query(TransportationData).count()

    total_vehicles = db.query(
        func.sum(TransportationData.Vehicle_Count)
    ).scalar()

    average_speed = db.query(
        func.avg(TransportationData.Avg_Speed)
    ).scalar()

    total_accidents = db.query(
        TransportationData
    ).filter(
        TransportationData.Accident == "Yes"
    ).count()

    return {
        "total_records": total_records,
        "total_vehicles": total_vehicles,
        "average_speed": round(average_speed, 2),
        "total_accidents": total_accidents
    }