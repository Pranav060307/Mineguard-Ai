import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  activePage?: string;
  onNavigate?: (page: string) => void;
}

function Layout({
  children,
  activePage = "dashboard",
  onNavigate,
}: LayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={onNavigate}
      />

      <div className="app-main">
        <Header />

        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;