import type { FC, ReactNode } from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'sm';
  className?: string;
}

export const Card: FC<CardProps> = ({ children, variant = 'default', className }) => (
  <div className={`${styles.card} ${variant === 'sm' ? styles.cardSm : ''} ${className ?? ''}`.trim()}>
    {children}
  </div>
);
