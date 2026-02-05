import type { FC } from 'react';
import styles from './ActivityItem.module.scss';

export interface ActivityItemProps {
  action: string;
  timeAgo: string;
  dotColor?: string;
  className?: string;
}

export const ActivityItem: FC<ActivityItemProps> = ({
  action,
  timeAgo,
  dotColor,
  className,
}) => (
  <div className={`${styles.item} ${className ?? ''}`.trim()}>
    <div
      className={styles.dot}
      style={dotColor ? { backgroundColor: dotColor } : undefined}
      aria-hidden
    />
    <div className={styles.content}>
      <div className={styles.action}>{action}</div>
      <div className={styles.time}>{timeAgo}</div>
    </div>
  </div>
);
