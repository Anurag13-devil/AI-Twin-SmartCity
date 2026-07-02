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


# Get traffic by weather
def get_traffic_by_weather(db: Session, weather: str):
    return db.query(TransportationData).filter(
        func.lower(TransportationData.Weather) == weather.lower()
    ).all()

#Traffic density 
def get_traffic_by_density(db: Session, density: str):
    return db.query(TransportationData).filter(
        TransportationData.Traffic_Density.ilike(density)
    ).all()

#Analytical APi
def get_weather_statistics(db: Session):

    results = (
        db.query(
            TransportationData.Weather,
            func.count(TransportationData.Weather)
        )
        .group_by(TransportationData.Weather)
        .all()
    )

    return {
        weather: count
        for weather, count in results
    }


#Analytical vehicle 

def get_vehicle_statistics(db: Session):

    results = (
        db.query(
            TransportationData.Vehicle_Type,
            func.count(TransportationData.Vehicle_Type)
        )
        .group_by(TransportationData.Vehicle_Type)
        .all()
    )

    return {
        vehicle: count
        for vehicle, count in results
    }

# Road condition 
def get_road_condition_stats(db: Session):
    result = (
        db.query(
            TransportationData.Road_Condition,
            func.count().label("count")
        )
        .group_by(TransportationData.Road_Condition)
        .all()
    )

    return {
        row.Road_Condition: row.count
        for row in result
    }
#Accident analysis
def get_accident_stats(db: Session):
    result = (
        db.query(
            TransportationData.Accident,
            func.count().label("count")
        )
        .group_by(TransportationData.Accident)
        .all()
    )

    return {
        row.Accident: row.count
        for row in result
    }
#average speed
def get_average_speed_by_weather(db: Session):
    result = (
        db.query(
            TransportationData.Weather,
            func.avg(TransportationData.Avg_Speed).label("avg_speed")
        )
        .group_by(TransportationData.Weather)
        .all()
    )

    return {
        row.Weather: round(row.avg_speed, 2)
        for row in result
    }

# vehicle count by road 
def get_vehicle_count_by_road(db: Session):
    result = (
        db.query(
            TransportationData.Road_ID,
            func.sum(TransportationData.Vehicle_Count).label("total")
        )
        .group_by(TransportationData.Road_ID)
        .all()
    )

    return {
        row.Road_ID: row.total
        for row in result
    }

#high risk roads 
def get_high_risk_roads(db: Session):
    result = (
        db.query(
            TransportationData.Road_ID,
            func.count().label("accidents")
        )
        .filter(TransportationData.Accident == "Yes")
        .group_by(TransportationData.Road_ID)
        .order_by(func.count().desc())
        .limit(10)
        .all()
    )

    return [
        {
            "Road_ID": row.Road_ID,
            "Accidents": row.accidents
        }
        for row in result
    ]