import { predictionData } from "../data/mockData";

function Prediction() {
  return (
    <div className="prediction-page">
      <div className="dashboard-heading">
        <div>
          <h2>AI Risk Prediction</h2>
          <p>
            AI-based prediction of mine subsidence risk for the next 24–72
            hours
          </p>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          AI Engine Active
        </div>
      </div>

      <div className="prediction-summary">
        <div className="prediction-summary-card">
          <span>Prediction Horizon</span>
          <strong>24–72h</strong>
          <small>Future risk assessment</small>
        </div>

        <div className="prediction-summary-card">
          <span>Locations Analyzed</span>
          <strong>{predictionData.length}</strong>
          <small>Mine panels</small>
        </div>

        <div className="prediction-summary-card">
          <span>Average Confidence</span>
          <strong>
            {Math.round(
              predictionData.reduce(
                (sum, item) => sum + item.confidence,
                0
              ) / predictionData.length
            )}
            %
          </strong>
          <small>AI prediction confidence</small>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Predicted Risk by Mine Panel</h3>

        <div className="prediction-grid">
          {predictionData.map((prediction) => (
            <div
              className="prediction-card"
              key={prediction.location}
            >
              <div className="prediction-card-header">
                <div>
                  <h3>{prediction.location}</h3>
                  <p>Prediction for next 24–72 hours</p>
                </div>

                <span
                  className={`risk-${prediction.riskLevel.toLowerCase()}`}
                >
                  {prediction.riskLevel}
                </span>
              </div>

              <div className="risk-score-section">
                <span>Risk Score</span>

                <strong>{prediction.riskScore}</strong>

                <div className="risk-bar">
                  <div
                    className={`risk-bar-fill ${prediction.riskLevel.toLowerCase()}`}
                    style={{
                      width: `${prediction.riskScore}%`,
                    }}
                  ></div>
                </div>

                <div className="risk-scale">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>

              <div className="prediction-details">
                <div>
                  <span>Confidence</span>
                  <strong>{prediction.confidence}%</strong>
                </div>

                <div>
                  <span>Prediction Window</span>
                  <strong>
                    {prediction.predictionWindow}
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Risk Level Guide</h3>

        <div className="risk-guide">
          <div className="risk-guide-item">
            <span className="risk-safe">SAFE</span>
            <p>Risk score 0–25</p>
          </div>

          <div className="risk-guide-item">
            <span className="risk-watch">WATCH</span>
            <p>Risk score 26–50</p>
          </div>

          <div className="risk-guide-item">
            <span className="risk-warning">WARNING</span>
            <p>Risk score 51–75</p>
          </div>

          <div className="risk-guide-item">
            <span className="risk-critical">CRITICAL</span>
            <p>Risk score 76–100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;