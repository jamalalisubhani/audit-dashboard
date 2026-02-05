import type { FC } from 'react';
import { Card } from '../Card/Card';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ItemStatusCircle } from '../ItemStatusCircle/ItemStatusCircle';
import type { ItemStatus } from '../ItemStatusCircle/ItemStatusCircle';
import styles from './ProgressStatusGrid.module.scss';

export interface PerspectiveItem {
  number: number;
  status: ItemStatus;
}

export interface PerspectiveSubSection {
  name: string;
  items: PerspectiveItem[];
}

export interface PerspectiveProgressItem {
  id: string;
  name: string;
  progress: number;
  total: number;
  completed: number;
  color: string;
  subSections?: PerspectiveSubSection[];
}

const LEGEND_ITEMS: { label: string; color: string }[] = [
  { label: 'Not Started', color: '#94a3b8' },
  { label: 'In Progress', color: '#f59e0b' },
  { label: 'Completed', color: '#059669' },
  { label: 'Partially Uploaded', color: '#2563eb' },
  { label: 'Fully Uploaded', color: '#60a5fa' },
  { label: 'Delayed', color: '#dc2626' },
];

export interface ProgressStatusGridProps {
  perspectives: PerspectiveProgressItem[];
  title?: string;
  className?: string;
}

export const ProgressStatusGrid: FC<ProgressStatusGridProps> = ({
  perspectives,
  title = 'Progress Status',
  className,
}) => (
  <section className={`${styles.section} ${className ?? ''}`.trim()}>
    <Card className={styles.card}>
      <div className={styles.headerRow}>
        <SectionTitle>{title}</SectionTitle>
        <div className={styles.legend}>
          {LEGEND_ITEMS.map((item) => (
          <div key={item.label} className={styles.legendItem}>
            <span
              className={styles.legendDot}
              style={{ backgroundColor: item.color }}
            />
            {item.label}
          </div>
        ))}
        </div>
      </div>
      <div className={styles.grid}>
        {perspectives.map((p) => (
          <div key={p.id} className={styles.column}>
            <div className={styles.header}>
              <div className={styles.headerName}>{p.name}</div>
              <div className={styles.headerProgress}>{p.progress.toFixed(2)}%</div>
            </div>
            {p.subSections != null && p.subSections.length > 0 && (
              <div className={styles.subSections}>
                {p.subSections.map((sub, idx) => (
                  <div key={idx} className={styles.subCard}>
                    <div className={styles.subName}>{sub.name}</div>
                    <div className={styles.items}>
                      {sub.items.map((item) => (
                        <ItemStatusCircle
                          key={item.number}
                          number={item.number}
                          status={item.status}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  </section>
);
