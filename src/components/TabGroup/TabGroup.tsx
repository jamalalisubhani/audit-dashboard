import type { FC, ReactNode } from 'react';
import styles from './TabGroup.module.scss';

export interface TabItem {
  id: string;
  label: ReactNode;
}

export interface TabGroupProps {
  tabs: TabItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export const TabGroup: FC<TabGroupProps> = ({ tabs, activeId, onSelect, className }) => (
  <div className={`${styles.tabs} ${className ?? ''}`.trim()} role="tablist">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        role="tab"
        aria-selected={activeId === tab.id}
        className={`${styles.tab} ${activeId === tab.id ? styles.active : ''}`.trim()}
        onClick={() => onSelect(tab.id)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
