import { sensorData } from "../data/mockData";

function Monitoring() {
  return (
    <div className="monitoring-page">
      <div className="dashboard-heading">
        <div>
          <h2>Real-Time Monitoring</h2>
          <p>Live sensor readings from underground mine panels</p>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          Live Monitoring
        </div>
      </div>

      <div className="monitoring-grid">
        {sensorData.map((sensor) => (
          <div className="monitoring-card" key={sensor.id}>
            <div className="monitoring-card-header">
              <div>
                <h3>{sensor.id}</h3>
                <p>{sensor.location}</p>
              </div>

              <span className={`risk-${sensor.status.toLowerCase()}`}>
                {sensor.status}
              </span>
            </div>

            <div className="sensor-readings">
              <div className="reading">
                <span>Tilt</span>
                <strong>{sensor.tilt}°</strong>
              </div>

              <div className="reading">
                <span>Ground Movement</span>
                <strong>{sensor.groundMovement} mm</strong>
              </div>

              <div className="reading">
                <span>Vibration</span>
                <strong>{sensor.vibration} mm/s</strong>
              </div>

              <div className="reading">
                <span>Crack Width</span>
                <strong>{sensor.crackWidth} mm</strong>
              </div>

              <div className="reading">
                <span>Rainfall</span>
                <strong>{sensor.rainfall} mm</strong>
              </div>
            </div>

            <div className="monitoring-footer">
              Last reading: Just now
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-section">
        <h3>Monitoring Parameters</h3>

        <div className="parameter-grid">
          <div>
            <strong>Tilt</strong>
            <p>
              Measures structural inclination of the mine area.
            </p>
          </div>

          <div>
            <strong>Ground Movement</strong>
            <p>
              Tracks changes in underground ground displacement.
            </p>
          </div>

          <div>
            <strong>Vibration</strong>
            <p>
              Monitors abnormal vibration activity.
            </p>
          </div>

          <div>
            <strong>Crack Width</strong>
            <p>
              Detects changes in existing structural cracks.
            </p>
          </div>

          <div>
            <strong>Rainfall</strong>
            <p>
              Records rainfall conditions affecting mine stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitoring;