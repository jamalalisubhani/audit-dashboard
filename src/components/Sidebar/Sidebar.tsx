import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiLayers,
  FiCheckSquare,
  FiFileText,
  FiBarChart2,
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import styles from './Sidebar.module.scss';

export interface NavItem {
  to: string;
  end?: boolean;
  icon: FC<{ size?: number }>;
  label: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { to: '/', end: true, icon: FiHome, label: 'Dashboard' },
  { to: '/details/strategic-planning', icon: FiLayers, label: 'Details' },
  { to: '/tasks', icon: FiCheckSquare, label: 'Tasks' },
  { to: '/documents', icon: FiFileText, label: 'Documents' },
  { to: '/reports', icon: FiBarChart2, label: 'Reports' },
  { to: '/users', icon: FiUsers, label: 'Users & Roles' },
];

export interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onClose?: () => void;
  open?: boolean;
  brandName?: string;
  brandTagline?: string;
  navItems?: NavItem[];
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({
  collapsed,
  onToggle,
  onClose,
  open = false,
  brandName = 'TAHWUL',
  brandTagline = 'Driving Digital Transformation',
  navItems = DEFAULT_NAV_ITEMS,
  className,
}) => (
  <aside
    className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''} ${open ? styles.open : ''} ${className ?? ''}`.trim()}
    data-collapsed={collapsed}
    aria-label="Main navigation"
  >
    <div className={styles.brand}>
      <div className={styles.brandName}>{collapsed ? brandName.slice(0, 1) : brandName}</div>
      {!collapsed && <div className={styles.brandTagline}>{brandTagline}</div>}
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''} ${collapsed ? styles.navLinkCollapsed : ''}`.trim()
                }
                title={collapsed ? item.label : undefined}
                onClick={onClose}
              >
                <Icon size={collapsed ? 28 : 20} />
                <span className={styles.navText}>{item.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
    <div className={styles.toggleWrap}>
      <button
        type="button"
        onClick={onToggle}
        className={`${styles.toggleButton} ${collapsed ? styles.toggleButtonCollapsed : ''}`.trim()}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? (
          <FiChevronRight size={28} />
        ) : (
          <FiChevronLeft size={20} />
        )}
      </button>
    </div>
  </aside>
);
