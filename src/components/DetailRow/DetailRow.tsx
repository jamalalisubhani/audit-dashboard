import type { FC, ReactNode } from 'react';
import styles from './DetailRow.module.scss';

export interface DetailRowProps {
  label: string;
  children: ReactNode;
  /** If true, children are multiple items with spacing */
  multiItem?: boolean;
  className?: string;
}

export const DetailRow: FC<DetailRowProps> = ({ label, children, multiItem, className }) => (
  <div className={`${styles.row} ${className ?? ''}`.trim()}>
    <div className={`${styles.cell} ${styles.label}`}>{label}</div>
    <div className={`${styles.cell} ${styles.value} ${multiItem ? styles.itemSpacing : ''}`}>
      {children}
    </div>
  </div>
);
