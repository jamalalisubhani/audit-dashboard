import type { FC } from 'react';
import styles from './ItemStatusCircle.module.scss';

export type ItemStatus =
  | 'not-started'
  | 'in-progress'
  | 'completed'
  | 'partially-uploaded'
  | 'fully-uploaded'
  | 'delayed';

const STATUS_COLORS: Record<ItemStatus, string> = {
  'not-started': '#94a3b8',
  'in-progress': '#f59e0b',
  completed: '#059669',
  'partially-uploaded': '#2563eb',
  'fully-uploaded': '#60a5fa',
  delayed: '#dc2626',
};

export interface ItemStatusCircleProps {
  number: number;
  status: ItemStatus | string;
  className?: string;
}

export const ItemStatusCircle: FC<ItemStatusCircleProps> = ({
  number,
  status,
  className,
}) => {
  const bg =
    STATUS_COLORS[status as ItemStatus] ?? '#94a3b8';
  return (
    <span
      className={`${styles.circle} ${className ?? ''}`.trim()}
      style={{ backgroundColor: bg }}
    >
      {number}
    </span>
  );
};
