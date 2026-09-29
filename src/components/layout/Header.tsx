interface HeaderProps {
  title?: string;
}

function Header({
  title = "MineGuard AI",
}: HeaderProps) {
  return (
    <header className="app-header">
      <div>
        <h1>{title}</h1>

        <p>
          AI-Powered Mine Subsidence Monitoring & Early Warning
        </p>
      </div>

      <div className="header-status">
        <span className="status-dot"></span>

        <span>System Online</span>
      </div>
    </header>
  );
}

export default Header;