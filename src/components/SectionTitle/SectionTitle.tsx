import type { FC, ReactNode } from 'react';
import styles from './SectionTitle.module.scss';

export interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children, className }) => (
  <h3 className={`${styles.title} ${className ?? ''}`.trim()}>{children}</h3>
);
