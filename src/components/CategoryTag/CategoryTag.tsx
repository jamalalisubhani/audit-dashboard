import type { FC } from 'react';
import styles from './CategoryTag.module.scss';

export interface CategoryTagProps {
  label: string;
  className?: string;
}

export const CategoryTag: FC<CategoryTagProps> = ({ label, className }) => (
  <span className={`${styles.tag} ${className ?? ''}`.trim()}>{label}</span>
);
