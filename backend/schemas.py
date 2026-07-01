from pydantic import BaseModel


class TransportationDataSchema(BaseModel):
    Record_ID: int
    Timestamp: str
    Latitude: float
    Longitude: float
    Road_ID: str
    Vehicle_Count: int
    Avg_Speed: int
    Vehicle_Type: str
    Traffic_Density: str
    Weather: str
    Visibility: int
    Road_Condition: str
    Accident: str
    Accident_Type: str
    Alert_Generated: str
    temperature: float
    humidity: float

    class Config:
        from_attributes = True