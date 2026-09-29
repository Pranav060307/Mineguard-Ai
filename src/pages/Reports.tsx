import {
  sensorData,
  predictionData,
  alertData,
} from "../data/mockData";

function Reports() {
  const totalSensors = sensorData.length;

  const averageRisk =
    predictionData.length > 0
      ? Math.round(
          predictionData.reduce(
            (sum, item) => sum + item.riskScore,
            0
          ) / predictionData.length
        )
      : 0;

  const activeAlerts = alertData.filter(
    (alert) => !alert.acknowledged
  ).length;

  return (
    <div className="reports-page">
      <div className="dashboard-heading">
        <div>
          <h2>Safety Reports</h2>
          <p>
            Mine monitoring, risk prediction and alert summary
          </p>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          Report Data Updated
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total Sensors</span>
          <strong>{totalSensors}</strong>
          <small>Monitoring nodes</small>
        </div>

        <div className="dashboard-card">
          <span>Average Risk</span>
          <strong>{averageRisk}</strong>
          <small>Current average score</small>
        </div>

        <div className="dashboard-card">
          <span>Active Alerts</span>
          <strong>{activeAlerts}</strong>
          <small>Require attention</small>
        </div>

        <div className="dashboard-card">
          <span>Prediction Window</span>
          <strong>24–72h</strong>
          <small>AI prediction horizon</small>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <div>
            <h3>Mine Safety Summary</h3>
            <p>
              Current status of monitored mine panels
            </p>
          </div>

          <button
            type="button"
            className="report-button"
            onClick={() =>
              window.print()
            }
          >
            Print Report
          </button>
        </div>

        <div className="report-summary-grid">
          <div className="report-summary-item">
            <span>Safe Panels</span>

            <strong>
              {
                predictionData.filter(
                  (item) => item.riskLevel === "SAFE"
                ).length
              }
            </strong>
          </div>

          <div className="report-summary-item">
            <span>Watch Panels</span>

            <strong>
              {
                predictionData.filter(
                  (item) => item.riskLevel === "WATCH"
                ).length
              }
            </strong>
          </div>

          <div className="report-summary-item">
            <span>Warning Panels</span>

            <strong>
              {
                predictionData.filter(
                  (item) => item.riskLevel === "WARNING"
                ).length
              }
            </strong>
          </div>

          <div className="report-summary-item">
            <span>Critical Panels</span>

            <strong>
              {
                predictionData.filter(
                  (item) => item.riskLevel === "CRITICAL"
                ).length
              }
            </strong>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Panel Risk Report</h3>

        <div className="report-table">
          <div className="report-row report-header">
            <span>Location</span>
            <span>Risk Score</span>
            <span>Risk Level</span>
            <span>Confidence</span>
          </div>

          {predictionData.map((prediction) => (
            <div
              className="report-row"
              key={prediction.location}
            >
              <span>{prediction.location}</span>

              <span>
                {prediction.riskScore}
              </span>

              <span
                className={`risk-${prediction.riskLevel.toLowerCase()}`}
              >
                {prediction.riskLevel}
              </span>

              <span>
                {prediction.confidence}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Recent Alert Report</h3>

        <div className="report-alert-list">
          {alertData.map((alert) => (
            <div
              className="report-alert-item"
              key={alert.id}
            >
              <div>
                <strong>{alert.location}</strong>

                <p>{alert.message}</p>

                <small>
                  {alert.timestamp}
                </small>
              </div>

              <span
                className={`risk-${alert.level.toLowerCase()}`}
              >
                {alert.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;