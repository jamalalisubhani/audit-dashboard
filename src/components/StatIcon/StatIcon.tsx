import type { FC } from 'react';
import {
  FiTrendingUp,
  FiFileText,
  FiCheckCircle,
  FiUpload,
} from 'react-icons/fi';
import styles from './StatIcon.module.scss';

export type StatIconType = 'progress' | 'document' | 'check' | 'upload';

const DEFAULT_COLOR = '#dc2626';

export interface StatIconProps {
  icon?: StatIconType;
  color?: string;
  className?: string;
}

export const StatIcon: FC<StatIconProps> = ({
  icon,
  color = DEFAULT_COLOR,
  className,
}) => {
  const size = 24;
  switch (icon) {
    case 'progress':
      return <FiTrendingUp size={size} color={color} className={`${styles.icon} ${className ?? ''}`.trim()} />;
    case 'document':
      return <FiFileText size={size} color={color} className={`${styles.icon} ${className ?? ''}`.trim()} />;
    case 'check':
      return <FiCheckCircle size={size} color={color} className={`${styles.icon} ${className ?? ''}`.trim()} />;
    case 'upload':
      return <FiUpload size={size} color={color} className={`${styles.icon} ${className ?? ''}`.trim()} />;
    default:
      return null;
  }
};

export interface TrendIconProps {
  trend: 'up' | 'down' | 'neutral';
  color?: string;
  size?: number;
  className?: string;
}

export const TrendIcon: FC<TrendIconProps> = ({
  trend,
  color = DEFAULT_COLOR,
  size = 14,
  className,
}) => {
  if (trend !== 'up' && trend !== 'down') return null;
  return (
    <FiTrendingUp
      size={size}
      color={color}
      className={`${styles.trendUp} ${className ?? ''}`.trim()}
      style={trend === 'down' ? { transform: 'rotate(180deg)' } : undefined}
    />
  );
};
