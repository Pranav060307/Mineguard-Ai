import type {
  SensorData,
  PredictionData,
  AlertData,
} from "../types";

/* =========================
   SENSOR DATA
========================= */

export const sensorData: SensorData[] = [
  {
    id: "S-001",
    location: "Panel A-01",
    tilt: 1.8,
    groundMovement: 2.4,
    vibration: 1.2,
    crackWidth: 0.8,
    rainfall: 12,
    status: "SAFE",
  },
  {
    id: "S-002",
    location: "Panel A-02",
    tilt: 4.7,
    groundMovement: 6.3,
    vibration: 3.8,
    crackWidth: 2.1,
    rainfall: 28,
    status: "WATCH",
  },
  {
    id: "S-003",
    location: "Panel B-01",
    tilt: 7.2,
    groundMovement: 9.4,
    vibration: 5.6,
    crackWidth: 3.7,
    rainfall: 41,
    status: "WARNING",
  },
  {
    id: "S-004",
    location: "Panel B-02",
    tilt: 2.1,
    groundMovement: 3.1,
    vibration: 1.7,
    crackWidth: 1.0,
    rainfall: 16,
    status: "SAFE",
  },
  {
    id: "S-005",
    location: "Panel C-01",
    tilt: 5.4,
    groundMovement: 7.1,
    vibration: 4.2,
    crackWidth: 2.6,
    rainfall: 32,
    status: "WATCH",
  },
  {
    id: "S-006",
    location: "Panel C-02",
    tilt: 8.1,
    groundMovement: 11.2,
    vibration: 6.4,
    crackWidth: 4.1,
    rainfall: 48,
    status: "CRITICAL",
  },
];

/* =========================
   PREDICTION DATA
========================= */

export const predictionData: PredictionData[] = [
  {
    location: "Panel A-01",
    riskScore: 18,
    riskLevel: "SAFE",
    confidence: 94,
    predictionWindow: "24–72 hours",
  },
  {
    location: "Panel A-02",
    riskScore: 43,
    riskLevel: "WATCH",
    confidence: 89,
    predictionWindow: "24–72 hours",
  },
  {
    location: "Panel B-01",
    riskScore: 68,
    riskLevel: "WARNING",
    confidence: 91,
    predictionWindow: "24–72 hours",
  },
  {
    location: "Panel B-02",
    riskScore: 21,
    riskLevel: "SAFE",
    confidence: 96,
    predictionWindow: "24–72 hours",
  },
  {
    location: "Panel C-01",
    riskScore: 47,
    riskLevel: "WATCH",
    confidence: 87,
    predictionWindow: "24–72 hours",
  },
  {
    location: "Panel C-02",
    riskScore: 84,
    riskLevel: "CRITICAL",
    confidence: 93,
    predictionWindow: "24–72 hours",
  },
];

/* =========================
   ALERT DATA
========================= */

export const alertData: AlertData[] = [
  {
    id: "ALT-001",
    location: "Panel C-02",
    level: "CRITICAL",
    message:
      "High ground movement and increased crack width detected",
    timestamp: "5 minutes ago",
    acknowledged: false,
  },
  {
    id: "ALT-002",
    location: "Panel B-01",
    level: "WARNING",
    message:
      "Ground movement and crack width are increasing",
    timestamp: "10 minutes ago",
    acknowledged: false,
  },
  {
    id: "ALT-003",
    location: "Panel A-02",
    level: "WATCH",
    message: "Abnormal tilt detected",
    timestamp: "25 minutes ago",
    acknowledged: false,
  },
  {
    id: "ALT-004",
    location: "Panel C-01",
    level: "WATCH",
    message:
      "Vibration level is above the normal monitoring range",
    timestamp: "40 minutes ago",
    acknowledged: true,
  },
];