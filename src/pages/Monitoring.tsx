import { sensorData } from "../data/mockData";

function Monitoring() {
  return (
    <div className="monitoring-page">
      {/* Page Header */}
      <div className="dashboard-heading">
        <div>
          <h2>Real-Time Monitoring</h2>
          <p>
            Live sensor readings from underground mine panels
          </p>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          Live Monitoring
        </div>
      </div>

      {/* Sensor Cards */}
      <div className="monitoring-grid">
        {sensorData.map((sensor) => (
          <div
            className="monitoring-card"
            key={sensor.id}
          >
            {/* Card Header */}
            <div className="monitoring-card-header">
              <div>
                <h3>{sensor.id}</h3>
                <p>{sensor.location}</p>
              </div>

              <span
                className={`risk-${sensor.status.toLowerCase()}`}
              >
                {sensor.status}
              </span>
            </div>

            {/* Sensor Readings */}
            <div className="sensor-readings">
              <div className="reading">
                <span>Tilt</span>
                <strong>{sensor.tilt}°</strong>
              </div>

              <div className="reading">
                <span>Ground Movement</span>
                <strong>
                  {sensor.groundMovement} mm
                </strong>
              </div>

              <div className="reading">
                <span>Vibration</span>
                <strong>
                  {sensor.vibration} mm/s
                </strong>
              </div>

              <div className="reading">
                <span>Crack Width</span>
                <strong>
                  {sensor.crackWidth} mm
                </strong>
              </div>

              <div className="reading">
                <span>Rainfall</span>
                <strong>
                  {sensor.rainfall} mm
                </strong>
              </div>
            </div>

            {/* Footer */}
            <div className="monitoring-footer">
              <span>Last reading</span>
              <strong>Just now</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Monitoring Parameters */}
      <div className="dashboard-section">
        <h3>Monitoring Parameters</h3>

        <div className="parameter-grid">
          <div className="parameter-card">
            <div className="parameter-icon">T</div>

            <div>
              <strong>Tilt</strong>
              <p>
                Measures structural inclination of the
                monitored mine area.
              </p>
            </div>
          </div>

          <div className="parameter-card">
            <div className="parameter-icon">G</div>

            <div>
              <strong>Ground Movement</strong>
              <p>
                Tracks underground ground displacement
                and movement.
              </p>
            </div>
          </div>

          <div className="parameter-card">
            <div className="parameter-icon">V</div>

            <div>
              <strong>Vibration</strong>
              <p>
                Monitors abnormal vibration activity
                inside the mine.
              </p>
            </div>
          </div>

          <div className="parameter-card">
            <div className="parameter-icon">C</div>

            <div>
              <strong>Crack Width</strong>
              <p>
                Detects changes in existing structural
                cracks.
              </p>
            </div>
          </div>

          <div className="parameter-card">
            <div className="parameter-icon">R</div>

            <div>
              <strong>Rainfall</strong>
              <p>
                Records rainfall conditions that may
                affect mine stability.
              </p>
            </div>
          </div>

          <div className="parameter-card">
            <div className="parameter-icon">S</div>

            <div>
              <strong>Sensor Status</strong>
              <p>
                Shows the current operational status of
                each monitoring node.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Information */}
      <div className="dashboard-section">
        <h3>Risk Level Information</h3>

        <div className="risk-information">
          <div className="risk-information-item">
            <span className="risk-safe">SAFE</span>
            <p>Risk score 0–25</p>
          </div>

          <div className="risk-information-item">
            <span className="risk-watch">WATCH</span>
            <p>Risk score 26–50</p>
          </div>

          <div className="risk-information-item">
            <span className="risk-warning">WARNING</span>
            <p>Risk score 51–75</p>
          </div>

          <div className="risk-information-item">
            <span className="risk-critical">CRITICAL</span>
            <p>Risk score 76–100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitoring;