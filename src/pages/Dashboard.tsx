import {
  projectTimeline,
  summaryStats,
  perspectiveProgress,
  recentActivities,
  chartDataByMonth,
  topPerformers,
  overallCompliance,
  auditReadinessDetailed,
} from '../data/mockData';
import { SummaryStatCard } from '../components/SummaryStatCard/SummaryStatCard';
import { ProjectTimeline } from '../components/ProjectTimeline/ProjectTimeline';
import { ProgressStatusGrid } from '../components/ProgressStatusGrid/ProgressStatusGrid';
import { ScoreCard } from '../components/ScoreCard/ScoreCard';
import { TopPerformerCard } from '../components/TopPerformerCard/TopPerformerCard';
import { RecentActivitiesCard } from '../components/RecentActivitiesCard/RecentActivitiesCard';
import { PerformanceChartCard } from '../components/PerformanceChartCard/PerformanceChartCard';
import styles from './Dashboard.module.scss';

export function Dashboard() {
  return (
    <div className={styles.page}>
      <ProjectTimeline
        phases={projectTimeline}
        title="Project Timeline"
        selectedYear="2026"
        onYearChange={() => { }}
        years={['2026']}
      />

      <section className={styles.summarySection}>

        <div className={styles.summaryGrid}>
          {summaryStats.map((stat) => (
            <SummaryStatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              icon={stat.icon as 'progress' | 'document' | 'check' | 'upload'}
              change={stat.change}
              trend={stat.trend}
            />
          ))}
        </div>
      </section>

      <ProgressStatusGrid perspectives={perspectiveProgress} title="Progress Status" />

      <div className={styles.threeCol}>
        <ScoreCard
          className={styles.cardColumn}
          title="Overall Compliance Score"
          score={overallCompliance.score}
          label={overallCompliance.label}
          color="#dc2626"
        />
        <TopPerformerCard className={styles.cardColumn} performers={topPerformers} />
        <RecentActivitiesCard
          className={styles.cardColumn}
          activities={recentActivities}
          maxItems={3}
        />
      </div>

      <div className={styles.twoCol}>
        <PerformanceChartCard
          className={styles.cardColumn}
          data={chartDataByMonth}
          title="12-Month Performance"
        />
        <ScoreCard
          className={styles.cardColumn}
          title="Audit Readiness"
          score={auditReadinessDetailed.score}
          label={auditReadinessDetailed.label}
          color="#059669"
          rowsLayout="metrics"
          rows={[
            { label: 'Overdue Stds', value: auditReadinessDetailed.overdue },
            { label: 'Missing Evidence', value: auditReadinessDetailed.missingEvidence },
          ]}
        />
      </div>
    </div>
  );
}
