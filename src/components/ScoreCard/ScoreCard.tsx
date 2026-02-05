import type { FC } from 'react';
import { Card } from '../Card/Card';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { SemiCircleProgress } from '../SemiCircleProgress/SemiCircleProgress';
import styles from './ScoreCard.module.scss';

export interface ScoreCardRow {
  label: string;
  value: string | number;
  variant?: 'default' | 'success';
}

export interface ScoreCardProps {
  title: string;
  score: number;
  label: string;
  color?: string;
  size?: number;
  rows?: ScoreCardRow[];
  /** When true, rows are shown as metric blocks (value on top, label below) side by side, centered */
  rowsLayout?: 'list' | 'metrics';
  className?: string;
}

export const ScoreCard: FC<ScoreCardProps> = ({
  title,
  score,
  label,
  color = '#dc2626',
  size = 140,
  rows,
  rowsLayout = 'list',
  className,
}) => (
  <section className={className}>
    <Card className={styles.card}>
      <SectionTitle>{title}</SectionTitle>
      <div className={styles.content}>
        <SemiCircleProgress value={score} size={size} color={color} />
        {rows != null && rows.length > 0 ? (
          <>
            <div className={styles.labelBold}>{label}</div>
            {rowsLayout === 'metrics' ? (
              <div className={styles.metricsGrid}>
                {rows.map((row, i) => (
                  <div key={i} className={styles.metricBlock}>
                    <div
                      className={
                        row.variant === 'success'
                          ? styles.metricValueSuccess
                          : styles.metricValue
                      }
                    >
                      {row.value}
                    </div>
                    <div className={styles.metricLabel}>{row.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.rows}>
                {rows.map((row, i) => (
                  <div key={i} className={styles.row}>
                    <span className={styles.rowLabel}>{row.label}</span>
                    <span
                      className={
                        row.variant === 'success'
                          ? styles.rowValueSuccess
                          : styles.rowValue
                      }
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className={styles.label}>{label}</div>
        )}
      </div>
    </Card>
  </section>
);
