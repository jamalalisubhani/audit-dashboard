import type { FC, ReactNode } from 'react';
import styles from './EvidenceStatCard.module.scss';

export interface EvidenceStatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export const EvidenceStatCard: FC<EvidenceStatCardProps> = ({ value, label, icon, className }) => (
  <div className={`${styles.card} ${className ?? ''}`.trim()}>
    {icon}
    <div>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  </div>
);
