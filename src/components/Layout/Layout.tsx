import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FiSearch, FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.scss';

const SIDEBAR_COLLAPSED_KEY = 'audit-dashboard-sidebar-collapsed';

export function Layout() {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SIDEBAR_COLLAPSED_KEY) ?? 'false');
    } catch {
      return false;
    }
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarCollapsed((c: boolean) => !c);

  return (
    <div
      className={`${styles.appLayout} ${sidebarCollapsed ? styles.sidebarCollapsed : ''} ${sidebarOpen ? styles.sidebarOpen : ''}`.trim()}
    >
      <div
        className={styles.overlay}
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
        onClick={() => setSidebarOpen(false)}
        onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
      />
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        onClose={() => setSidebarOpen(false)}
        open={sidebarOpen}
      />

      <div className={styles.mainWrapper}>
        <header className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <button
              type="button"
              className={styles.menuButton}
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
            >
              <FiMenu size={24} />
            </button>
            <div className={styles.searchBox}>
              <FiSearch size={18} />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className={styles.topBarRight}>
            <button type="button" className={styles.iconButton} aria-label="Notifications">
              <FiBell size={20} />
            </button>
            <div className={styles.userMenu}>
              <div className={styles.userAvatar}>M</div>
              <span className={styles.userName}>Mohamed</span>
              <FiChevronDown size={16} />
            </div>
          </div>
        </header>

        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
