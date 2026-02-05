import type { FC } from 'react';
import { StatIcon, TrendIcon } from '../StatIcon/StatIcon';
import type { StatIconType } from '../StatIcon/StatIcon';
import styles from './SummaryStatCard.module.scss';

export interface SummaryStatCardProps {
  value: string | number;
  label: string;
  icon?: StatIconType;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const SummaryStatCard: FC<SummaryStatCardProps> = ({
  value,
  label,
  icon,
  change,
  trend = 'neutral',
  className,
}) => (
  <div className={`${styles.card} ${className ?? ''}`.trim()}>
    <div className={styles.content}>
      <div className={styles.value}>
        {value}
        {change != null && trend === 'up' && <TrendIcon trend="up" />}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
    {icon != null && (
      <div className={styles.iconWrap}>
        <StatIcon icon={icon} />
      </div>
    )}
  </div>
);
