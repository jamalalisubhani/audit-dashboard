import type { FC } from 'react';
import styles from './StatusBadge.module.scss';

export type DocumentStatus = 'approved' | 'pending-review' | 'rejected' | 'draft';

const LABELS: Record<DocumentStatus, string> = {
  approved: 'Approved',
  'pending-review': 'Pending Review',
  rejected: 'Rejected',
  draft: 'Draft',
};

export interface StatusBadgeProps {
  status: DocumentStatus;
  className?: string;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status, className }) => {
  const variant = status === 'approved' ? 'approved' : status === 'rejected' ? 'rejected' : status === 'draft' ? 'draft' : 'pending';
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className ?? ''}`.trim()}>
      {LABELS[status]}
    </span>
  );
};
