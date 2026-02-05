import type { FC } from 'react';
import styles from './CircularProgress.module.scss';

export interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export const CircularProgress: FC<CircularProgressProps> = ({
  value,
  size = 100,
  strokeWidth = 8,
  color = '#059669',
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const center = size / 2;

  return (
    <div
      className={`${styles.wrapper} ${className ?? ''}`.trim()}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className={styles.svg}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={styles.progressCircle}
        />
      </svg>
      <div className={styles.label}>
        <span className={styles.value}>{value}%</span>
      </div>
    </div>
  );
};
