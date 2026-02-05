import type { FC } from 'react';
import { Card } from '../Card/Card';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './RecentActivitiesCard.module.scss';

export interface ActivityItem {
  id: string;
  title: string;
  type?: string;
  timestamp?: string;
  user?: string;
  status: string;
}

export interface RecentActivitiesCardProps {
  activities: ActivityItem[];
  title?: string;
  maxItems?: number;
  className?: string;
}

export const RecentActivitiesCard: FC<RecentActivitiesCardProps> = ({
  activities,
  title = 'Recent Activities',
  maxItems = 3,
  className,
}) => {
  const list = activities.slice(0, maxItems);
  return (
    <section className={className}>
      <Card>
        <SectionTitle>{title}</SectionTitle>
        <div className={styles.content}>
          {list.map((activity) => (
            <div key={activity.id} className={styles.item}>
              <div className={styles.title}>{activity.title}</div>
              <div className={styles.status}>{activity.status}</div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
