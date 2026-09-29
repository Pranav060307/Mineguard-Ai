import { useState } from "react";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Monitoring from "./pages/Monitoring";
import Prediction from "./pages/Prediction";
import Alerts from "./pages/Alerts";
import Sensors from "./pages/Sensors";
import Reports from "./pages/Reports";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "monitoring":
        return <Monitoring />;

      case "prediction":
        return <Prediction />;

      case "alerts":
        return <Alerts />;

      case "sensors":
        return <Sensors />;

      case "reports":
        return <Reports />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout
      activePage={activePage}
      onNavigate={setActivePage}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;