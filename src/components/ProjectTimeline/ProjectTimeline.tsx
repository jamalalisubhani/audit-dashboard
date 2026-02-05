import type { FC } from 'react';
import { Card } from '../Card/Card';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './ProjectTimeline.module.scss';

export interface TimelinePhase {
  id: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  startDate: string;
  endDate: string;
  progress: number;
}

export interface ProjectTimelineProps {
  phases: TimelinePhase[];
  title?: string;
  selectedYear?: string;
  onYearChange?: (year: string) => void;
  years?: string[];
  className?: string;
}

function getPhaseLabel(phase: TimelinePhase): string {
  if (phase.startDate === phase.endDate) {
    const d = new Date(phase.startDate);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
  const start = new Date(phase.startDate);
  const end = new Date(phase.endDate);
  return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}-${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
}

export const ProjectTimeline: FC<ProjectTimelineProps> = ({
  phases,
  title = 'Project Timeline',
  selectedYear,
  onYearChange,
  years = ['2026'],
  className,
}) => {
  const count = phases.length;
  if (count === 0) return null;

  const lastCompletedOrCurrentIndex = phases.reduce(
    (last, p, i) => (p.status === 'completed' || p.status === 'current' ? i : last),
    -1
  );
  const progressPercent =
    count > 1 && lastCompletedOrCurrentIndex >= 0
      ? (lastCompletedOrCurrentIndex / (count - 1)) * 100
      : 0;

  return (
    <section className={`${styles.section} ${className ?? ''}`.trim()}>
      <Card className={styles.timelineCard}>
        <div className={styles.header}>
          <SectionTitle>{title}</SectionTitle>
          {selectedYear != null && onYearChange && (
            <select
              className={styles.select}
              value={selectedYear}
              onChange={(e) => onYearChange(e.target.value)}
              aria-label="Select year"
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          )}
        </div>
        <div
          className={styles.timelineBar}
          style={{ '--count': count } as React.CSSProperties}
        >
          <div className={styles.trackBg} />
          <div
            className={styles.trackProgress}
            style={{
              width: progressPercent > 0 ? `${progressPercent}%` : '0',
            }}
          />
          {phases.map((phase, i) => (
            <div
              key={phase.id}
              className={`${styles.marker} ${i === count - 1 ? styles.end : ''}`.trim()}
              style={{
                left: i === count - 1 ? undefined : `${(i / (count - 1)) * 100}%`,
              }}
            >
              <div
                className={`${styles.markerDot} ${phase.status === 'completed' ? styles.completed : phase.status === 'current' ? styles.current : styles.upcoming}`.trim()}
              />
            </div>
          ))}
        </div>
        <div className={styles.milestones}>
          {phases.map((phase, i) => (
            <div
              key={phase.id}
              className={[
                styles.milestone,
                i === 0 ? styles.milestoneStart : '',
                i === count - 1 ? styles.milestoneEnd : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{
                left: i === count - 1 ? undefined : `${(i / (count - 1)) * 100}%`,
              }}
            >
              <div className={styles.date}>{getPhaseLabel(phase)}</div>
              <div className={styles.title}>{phase.title}</div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
