import { sensorData } from "../data/mockData";

function Sensors() {
  return (
    <div className="sensors-page">
      <div className="dashboard-heading">
        <div>
          <h2>Sensor Network</h2>
          <p>
            Overview of deployed monitoring sensors across mine panels
          </p>
        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          Sensors Online
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total Sensors</span>
          <strong>{sensorData.length}</strong>
          <small>Registered monitoring nodes</small>
        </div>

        <div className="dashboard-card">
          <span>Online Sensors</span>
          <strong>{sensorData.length}</strong>
          <small>Currently transmitting</small>
        </div>

        <div className="dashboard-card">
          <span>Warning Sensors</span>
          <strong>
            {
              sensorData.filter(
                (sensor) =>
                  sensor.status === "WARNING"
              ).length
            }
          </strong>
          <small>Require monitoring</small>
        </div>

        <div className="dashboard-card">
          <span>Critical Sensors</span>
          <strong>
            {
              sensorData.filter(
                (sensor) =>
                  sensor.status === "CRITICAL"
              ).length
            }
          </strong>
          <small>Highest risk level</small>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Sensor Network Status</h3>

        <div className="sensor-list">
          {sensorData.map((sensor) => (
            <div
              className="sensor-detail-card"
              key={sensor.id}
            >
              <div className="sensor-detail-header">
                <div>
                  <h3>{sensor.id}</h3>
                  <p>{sensor.location}</p>
                </div>

                <div className="sensor-online">
                  <span className="status-dot"></span>
                  Online
                </div>
              </div>

              <div className="sensor-detail-grid">
                <div>
                  <span>Current Status</span>

                  <strong
                    className={`risk-${sensor.status.toLowerCase()}`}
                  >
                    {sensor.status}
                  </strong>
                </div>

                <div>
                  <span>Tilt</span>
                  <strong>{sensor.tilt}°</strong>
                </div>

                <div>
                  <span>Ground Movement</span>
                  <strong>
                    {sensor.groundMovement} mm
                  </strong>
                </div>

                <div>
                  <span>Vibration</span>
                  <strong>
                    {sensor.vibration} mm/s
                  </strong>
                </div>

                <div>
                  <span>Crack Width</span>
                  <strong>
                    {sensor.crackWidth} mm
                  </strong>
                </div>

                <div>
                  <span>Rainfall</span>
                  <strong>
                    {sensor.rainfall} mm
                  </strong>
                </div>
              </div>

              <div className="sensor-detail-footer">
                <span>Last communication</span>
                <strong>Just now</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Sensor Parameters</h3>

        <div className="parameter-grid">
          <div>
            <strong>MPU6050 / Tilt</strong>
            <p>
              Measures structural inclination and changes in sensor
              orientation.
            </p>
          </div>

          <div>
            <strong>Ground Movement</strong>
            <p>
              Measures displacement occurring in the monitored mine
              area.
            </p>
          </div>

          <div>
            <strong>Vibration</strong>
            <p>
              Detects abnormal vibration patterns in the mine
              environment.
            </p>
          </div>

          <div>
            <strong>Crack Width</strong>
            <p>
              Monitors changes in existing cracks and structural
              deformation.
            </p>
          </div>

          <div>
            <strong>Rainfall</strong>
            <p>
              Records rainfall conditions that may influence mine
              stability.
            </p>
          </div>

          <div>
            <strong>Communication</strong>
            <p>
              Sensor nodes can be connected through the planned LoRa
              monitoring network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sensors;