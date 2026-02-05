import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './PageHeader.module.scss';

export interface PageHeaderProps {
  title: string;
  backTo?: string;
  backIcon?: ReactNode;
  className?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  backTo = '/',
  backIcon,
  className,
}) => (
  <header className={`${styles.header} ${className ?? ''}`.trim()}>
    <Link to={backTo} className={styles.backLink} aria-label="Go back">
      {backIcon ?? <FiArrowLeft size={20} />}
    </Link>
    <h1 className={styles.title}>{title}</h1>
  </header>
);
