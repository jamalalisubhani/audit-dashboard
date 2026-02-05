import type { FC } from 'react';
import styles from './SemiCircleProgress.module.scss';

export interface SemiCircleProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export const SemiCircleProgress: FC<SemiCircleProgressProps> = ({
  value,
  size = 140,
  strokeWidth = 12,
  color = '#dc2626',
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const centerY = size / 2;
  const startX = strokeWidth / 2;
  const startY = centerY;
  const endX = size - strokeWidth / 2;
  const endY = centerY;
  const viewHeight = size / 2 + strokeWidth / 2;
  const viewY = centerY - radius - strokeWidth / 2;

  return (
    <div
      className={`${styles.wrapper} ${className ?? ''}`.trim()}
      style={
        {
          '--size': `${size}px`,
          '--stroke-width': `${strokeWidth}px`,
        } as React.CSSProperties
      }
    >
      <svg
        width={size}
        height={viewHeight}
        viewBox={`0 ${viewY} ${size} ${viewHeight}`}
        className={styles.svg}
      >
        <path
          d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={styles.progressPath}
        />
      </svg>
      <div className={styles.label}>
        <span className={styles.value} style={{ color }}>{value}%</span>
      </div>
    </div>
  );
};
