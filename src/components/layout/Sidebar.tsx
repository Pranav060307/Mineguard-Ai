interface SidebarProps {
  activePage?: string;
  onNavigate?: (page: string) => void;
}

const menuItems = [
  {
    label: "Dashboard",
    page: "dashboard",
    icon: "⌂",
  },
  {
    label: "Monitoring",
    page: "monitoring",
    icon: "◉",
  },
  {
    label: "Prediction",
    page: "prediction",
    icon: "⌁",
  },
  {
    label: "Alerts",
    page: "alerts",
    icon: "⚠",
  },
  {
    label: "Sensors",
    page: "sensors",
    icon: "◈",
  },
  {
    label: "Reports",
    page: "reports",
    icon: "▤",
  },
];

function Sidebar({
  activePage = "dashboard",
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <h2>MineGuard AI</h2>

        <span>
          Intelligent Mining Safety
        </span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.page}
            type="button"
            className={`sidebar-item ${
              activePage === item.page
                ? "active"
                : ""
            }`}
            onClick={() =>
              onNavigate?.(item.page)
            }
          >
            <span
              style={{
                display: "inline-block",
                width: "25px",
                opacity: 0.85,
              }}
            >
              {item.icon}
            </span>

            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot"></span>

        <span>
          Monitoring System Online
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;