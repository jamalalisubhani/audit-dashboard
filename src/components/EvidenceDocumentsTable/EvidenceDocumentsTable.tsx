import type { FC } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import type { DocumentStatus } from '../StatusBadge/StatusBadge';
import styles from './EvidenceDocumentsTable.module.scss';

export interface EvidenceDocumentRow {
  id: string;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: DocumentStatus;
}

const COLUMNS: { key: keyof EvidenceDocumentRow; label: string }[] = [
  { key: 'documentNumber', label: 'Document Number' },
  { key: 'documentName', label: 'Document Name' },
  { key: 'documentLead', label: 'Document Lead' },
  { key: 'documentPreparer', label: 'Document Preparer' },
  { key: 'date', label: 'Date' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'status', label: 'Status' },
];

export interface EvidenceDocumentsTableProps {
  documents: EvidenceDocumentRow[];
  className?: string;
}

export const EvidenceDocumentsTable: FC<EvidenceDocumentsTableProps> = ({
  documents,
  className,
}) => (
  <div className={`${styles.wrapper} ${className ?? ''}`.trim()}>
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {COLUMNS.map(({ key, label }) => (
            <th key={key}>
              {label}
              <span className={styles.sortIcon} aria-hidden>
                <FiChevronUp size={10} style={{ display: 'block', marginBottom: '-2px' }} />
                <FiChevronDown size={10} style={{ display: 'block' }} />
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {documents.map((doc) => (
          <tr key={doc.id}>
            <td>{doc.documentNumber}</td>
            <td>{doc.documentName}</td>
            <td>{doc.documentLead}</td>
            <td>{doc.documentPreparer}</td>
            <td>{doc.date}</td>
            <td>{doc.dueDate}</td>
            <td>
              <StatusBadge status={doc.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
