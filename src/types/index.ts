export type RiskLevel = "SAFE" | "WATCH" | "WARNING" | "CRITICAL";

export interface SensorData {
  id: string;
  location: string;
  tilt: number;
  groundMovement: number;
  vibration: number;
  crackWidth: number;
  rainfall: number;
  status: RiskLevel;
}

export interface PredictionData {
  location: string;
  riskScore: number;
  riskLevel: RiskLevel;
  confidence: number;
  predictionWindow: string;
}

export interface AlertData {
  id: string;
  location: string;
  level: RiskLevel;
  message: string;
  timestamp: string;
  acknowledged: boolean;
}
