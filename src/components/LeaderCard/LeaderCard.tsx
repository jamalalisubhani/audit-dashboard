import type { FC, ReactNode } from 'react';
import { FiUser } from 'react-icons/fi';
import styles from './LeaderCard.module.scss';

export interface LeaderCardProps {
  name: string;
  role: string;
  avatar?: ReactNode;
  className?: string;
}

export const LeaderCard: FC<LeaderCardProps> = ({ name, role, avatar, className }) => (
  <div className={`${styles.card} ${className ?? ''}`.trim()}>
    <div className={styles.avatar}>{avatar ?? <FiUser size={24} />}</div>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{role}</div>
    </div>
  </div>
);
