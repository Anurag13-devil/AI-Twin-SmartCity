from sqlalchemy import Column, Integer, Float, String
from backend.database import Base


class TransportationData(Base):
    __tablename__ = "transportation_data"

    Record_ID = Column(Integer, primary_key=True, index=True)

    Timestamp = Column(String)

    Latitude = Column(Float)

    Longitude = Column(Float)

    Road_ID = Column(String)

    Vehicle_Count = Column(Integer)

    Avg_Speed = Column("Avg_Speed(km/h)", Integer)

    Vehicle_Type = Column(String)

    Traffic_Density = Column(String)

    Weather = Column(String)

    Visibility = Column("Visibility(m)", Integer)

    Road_Condition = Column(String)

    Accident = Column("Accident_Occurred", String)

    Accident_Type = Column("Accident_Severity", String)

    Alert_Generated = Column(String)

    temperature = Column(Float)

    humidity = Column(Float)