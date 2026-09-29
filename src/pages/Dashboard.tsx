import {
  sensorData,
  predictionData,
  alertData,
} from "../data/mockData";

function Dashboard() {
  const totalSensors = sensorData.length;

  const averageRisk = Math.round(
    predictionData.reduce(
      (sum, item) => sum + item.riskScore,
      0
    ) / predictionData.length
  );

  const activeAlerts = alertData.filter(
    (alert) => !alert.acknowledged
  ).length;

  const criticalSensors = sensorData.filter(
    (sensor) => sensor.status === "CRITICAL"
  ).length;

  const safeCount = predictionData.filter(
    (item) => item.riskLevel === "SAFE"
  ).length;

  const watchCount = predictionData.filter(
    (item) => item.riskLevel === "WATCH"
  ).length;

  const warningCount = predictionData.filter(
    (item) => item.riskLevel === "WARNING"
  ).length;

  const criticalCount = predictionData.filter(
    (item) => item.riskLevel === "CRITICAL"
  ).length;

  return (
    <div className="mine-dashboard">

      {/* =========================
          PAGE INTRO
      ========================= */}

      <section className="dashboard-intro">
        <div>
          <span className="dashboard-eyebrow">
            UNDERGROUND MINE MONITORING
          </span>

          <h2>Real-Time Safety Intelligence</h2>

          <p>
            AI-powered monitoring for early detection
            of ground instability and mine subsidence.
          </p>
        </div>

        <div className="dashboard-live-status">
          <span className="status-dot"></span>
          System Online
        </div>
      </section>


      {/* =========================
          MINE HERO
      ========================= */}

      <section className="mine-hero">

        <img
          src="/images/mine-hero.jpg"
          alt="Underground Mine Monitoring"
          className="mine-hero-image"
        />

        <div className="mine-hero-overlay"></div>

        <div className="mine-hero-content">

          <span className="hero-small-title">
            MINEGUARD AI
          </span>

          <h1>
            Intelligent Mining
            <br />
            Safety Monitoring
          </h1>

          <p>
            Real-time sensor intelligence,
            predictive risk analysis and
            early warning for underground mines.
          </p>

          <button
            className="hero-button"
            type="button"
          >
            View Live Monitoring
            <span>→</span>
          </button>

        </div>


        {/* Sensor Markers */}

        <div className="mine-marker marker-a">
          <span className="marker-pulse safe"></span>
          <div>
            <strong>A-01</strong>
            <small>SAFE</small>
          </div>
        </div>

        <div className="mine-marker marker-b">
          <span className="marker-pulse warning"></span>
          <div>
            <strong>B-01</strong>
            <small>WARNING</small>
          </div>
        </div>

        <div className="mine-marker marker-c">
          <span className="marker-pulse critical"></span>
          <div>
            <strong>C-02</strong>
            <small>CRITICAL</small>
          </div>
        </div>


        {/* Hero System Panel */}

        <div className="hero-system-panel">

          <div className="hero-system-title">
            <span className="status-dot"></span>

            <div>
              <strong>System Status</strong>
              <small>All Systems Operational</small>
            </div>
          </div>

          <div className="hero-system-row">
            <span>Total Sensors</span>
            <strong>{totalSensors}</strong>
          </div>

          <div className="hero-system-row">
            <span>Online Sensors</span>
            <strong>{totalSensors}</strong>
          </div>

          <div className="hero-system-row">
            <span>Active Alerts</span>
            <strong className="danger-number">
              {activeAlerts}
            </strong>
          </div>

          <div className="hero-system-row">
            <span>Critical Sensors</span>
            <strong className="danger-number">
              {criticalSensors}
            </strong>
          </div>

        </div>

      </section>


      {/* =========================
          KPI CARDS
      ========================= */}

      <section className="dashboard-kpis">

        <div className="kpi-card">

          <div className="kpi-icon sensor-icon">
            ◉
          </div>

          <div className="kpi-content">
            <span>Total Sensors</span>
            <strong>{totalSensors}</strong>
            <small>Monitoring nodes</small>
          </div>

          <div className="kpi-trend positive">
            ↑ 0% <span>vs. last hour</span>
          </div>

        </div>


        <div className="kpi-card">

          <div className="kpi-icon risk-icon">
            ◇
          </div>

          <div className="kpi-content">
            <span>Average Risk Score</span>
            <strong>{averageRisk}</strong>
            <small>Across all panels</small>
          </div>

          <div className="kpi-trend positive">
            ↓ 12% <span>vs. last hour</span>
          </div>

        </div>


        <div className="kpi-card">

          <div className="kpi-icon alert-icon">
            ⚠
          </div>

          <div className="kpi-content">
            <span>Active Alerts</span>
            <strong>{activeAlerts}</strong>
            <small>Require attention</small>
          </div>

          <div className="kpi-trend negative">
            ↑ 1 <span>vs. last hour</span>
          </div>

        </div>


        <div className="kpi-card">

          <div className="kpi-icon critical-icon">
            !
          </div>

          <div className="kpi-content">
            <span>Critical Sensors</span>
            <strong>{criticalSensors}</strong>
            <small>Highest risk level</small>
          </div>

          <div className="kpi-trend positive">
            ↓ 0% <span>vs. last hour</span>
          </div>

        </div>

      </section>


      {/* =========================
          LOWER DASHBOARD
      ========================= */}

      <section className="dashboard-lower-grid">


        {/* =====================
            MINE MAP
        ===================== */}

        <div className="dashboard-panel mine-map-panel">

          <div className="panel-heading">

            <div>
              <span className="panel-icon">◈</span>

              <div>
                <h3>Mine Map</h3>
                <p>Live sensor locations</p>
              </div>
            </div>

            <span className="live-badge">
              Live View
            </span>

          </div>


          <div className="mine-map">

            <div className="map-grid"></div>

            <div className="mine-route route-one"></div>
            <div className="mine-route route-two"></div>
            <div className="mine-route route-three"></div>


            <div className="map-sensor map-sensor-1 safe-map">
              <span></span>
              <strong>S-001</strong>
              <small>SAFE</small>
            </div>

            <div className="map-sensor map-sensor-2 watch-map">
              <span></span>
              <strong>S-002</strong>
              <small>WATCH</small>
            </div>

            <div className="map-sensor map-sensor-3 warning-map">
              <span></span>
              <strong>S-003</strong>
              <small>WARNING</small>
            </div>

            <div className="map-sensor map-sensor-4 safe-map">
              <span></span>
              <strong>S-004</strong>
              <small>SAFE</small>
            </div>

            <div className="map-sensor map-sensor-5 watch-map">
              <span></span>
              <strong>S-005</strong>
              <small>WATCH</small>
            </div>

            <div className="map-sensor map-sensor-6 critical-map">
              <span></span>
              <strong>S-006</strong>
              <small>CRITICAL</small>
            </div>

            <div className="map-compass">
              N
            </div>

          </div>


          <div className="map-legend">

            <span>
              <i className="legend-safe"></i>
              Safe
            </span>

            <span>
              <i className="legend-watch"></i>
              Watch
            </span>

            <span>
              <i className="legend-warning"></i>
              Warning
            </span>

            <span>
              <i className="legend-critical"></i>
              Critical
            </span>

          </div>

        </div>


        {/* =====================
            RECENT ALERTS
        ===================== */}

        <div className="dashboard-panel alerts-panel">

          <div className="panel-heading">

            <div>
              <span className="panel-icon">⚠</span>

              <div>
                <h3>Recent Alerts</h3>
                <p>Latest safety events</p>
              </div>
            </div>

            <button
              className="view-all-button"
              type="button"
            >
              View All
            </button>

          </div>


          <div className="dashboard-alert-list">

            {alertData.map((alert) => (

              <div
                className="dashboard-alert"
                key={alert.id}
              >

                <span
                  className={`alert-indicator ${alert.level.toLowerCase()}`}
                ></span>

                <div className="alert-main">

                  <strong>
                    {alert.message}
                  </strong>

                  <span>
                    {alert.location}
                  </span>

                  <small>
                    {alert.timestamp}
                  </small>

                </div>

                <span
                  className={`dashboard-risk-badge ${alert.level.toLowerCase()}`}
                >
                  {alert.level}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* =====================
            RISK DISTRIBUTION
        ===================== */}

        <div className="dashboard-panel risk-panel">

          <div className="panel-heading">

            <div>
              <span className="panel-icon">◔</span>

              <div>
                <h3>Risk Distribution</h3>
                <p>Current mine risk levels</p>
              </div>
            </div>

          </div>


          <div className="risk-distribution">

            <div className="risk-donut">

              <div className="risk-donut-inner">
                <span>Avg. Risk</span>
                <strong>{averageRisk}</strong>
              </div>

            </div>


            <div className="risk-legend">

              <div>
                <span>
                  <i className="legend-safe"></i>
                  Safe
                </span>
                <strong>
                  {safeCount}
                </strong>
              </div>

              <div>
                <span>
                  <i className="legend-watch"></i>
                  Watch
                </span>
                <strong>
                  {watchCount}
                </strong>
              </div>

              <div>
                <span>
                  <i className="legend-warning"></i>
                  Warning
                </span>
                <strong>
                  {warningCount}
                </strong>
              </div>

              <div>
                <span>
                  <i className="legend-critical"></i>
                  Critical
                </span>
                <strong>
                  {criticalCount}
                </strong>
              </div>

            </div>

          </div>

        </div>


        {/* =====================
            QUICK ACTIONS
        ===================== */}

        <div className="dashboard-panel quick-panel">

          <div className="panel-heading">

            <div>
              <span className="panel-icon">✦</span>

              <div>
                <h3>Quick Actions</h3>
                <p>Common monitoring actions</p>
              </div>
            </div>

          </div>


          <div className="quick-actions">

            <button type="button">
              <span>▤</span>
              View Reports
            </button>

            <button type="button">
              <span>◉</span>
              Sensor Details
            </button>

            <button type="button">
              <span>⌁</span>
              Run Prediction
            </button>

            <button type="button">
              <span>⚠</span>
              Manage Alerts
            </button>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER MESSAGE
      ========================= */}

      <div className="dashboard-footer-message">

        <div className="footer-logo">
          ◈
        </div>

        <span>
          Monitoring Today
        </span>

        <b>|</b>

        <span>
          Safer Tomorrow
        </span>

      </div>

    </div>
  );
}

export default Dashboard;