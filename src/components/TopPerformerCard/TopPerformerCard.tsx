import type { FC } from 'react';
import { FiUser } from 'react-icons/fi';
import { Card } from '../Card/Card';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import styles from './TopPerformerCard.module.scss';

export interface TopPerformerItem {
  id: string;
  name: string;
  perspective: string;
  score: number;
  avatar?: string;
}

export interface TopPerformerCardProps {
  performers: TopPerformerItem[];
  title?: string;
  className?: string;
}

export const TopPerformerCard: FC<TopPerformerCardProps> = ({
  performers,
  title = 'Top Performing Perspective Leaders',
  className,
}) => (
  <section className={className}>
    <Card>
      <SectionTitle>{title}</SectionTitle>
      <div className={styles.content}>
        {performers.map((p) => (
          <div key={p.id} className={styles.item}>
            <div className={styles.avatar}>
              <FiUser size={20} />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.perspective}>{p.perspective}</div>
            </div>
            <div className={styles.score}>{p.score}%</div>
          </div>
        ))}
      </div>
    </Card>
  </section>
);
