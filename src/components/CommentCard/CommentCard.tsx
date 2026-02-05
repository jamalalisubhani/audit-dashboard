import type { FC } from 'react';
import styles from './CommentCard.module.scss';

export interface CommentCardProps {
  author: string;
  authorInitial: string;
  text: string;
  date: string;
  className?: string;
}

export const CommentCard: FC<CommentCardProps> = ({
  author,
  authorInitial,
  text,
  date,
  className,
}) => (
  <div className={`${styles.card} ${className ?? ''}`.trim()}>
    <div className={styles.avatar}>{authorInitial}</div>
    <div className={styles.body}>
      <div className={styles.header}>
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
);
