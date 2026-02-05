import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  strategicPlanningDetail,
  evidenceDocuments as evidenceDocsData,
  evidenceComments,
  evidenceRecentActivities,
} from '../data/mockData';
import type { StrategicDetail } from '../data/mockData';
import { FiFileText } from 'react-icons/fi';
import { CircularProgress } from '../components/CircularProgress/CircularProgress';
import { Card } from '../components/Card/Card';
import { CategoryTag } from '../components/CategoryTag/CategoryTag';
import { EvidenceStatCard } from '../components/EvidenceStatCard/EvidenceStatCard';
import { TabGroup } from '../components/TabGroup/TabGroup';
import { DetailRow } from '../components/DetailRow/DetailRow';
import { LeaderCard } from '../components/LeaderCard/LeaderCard';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { EvidenceDocumentsTable } from '../components/EvidenceDocumentsTable/EvidenceDocumentsTable';
import { CommentCard } from '../components/CommentCard/CommentCard';
import { CommentInput } from '../components/CommentInput/CommentInput';
import { ActivityItem } from '../components/ActivityItem/ActivityItem';
import styles from './Details.module.scss';

const detailsMap: Record<string, StrategicDetail> = {
  'strategic-planning': strategicPlanningDetail,
};

const EVIDENCE_STATS = [
  { key: 'total', label: 'Total Evidence' },
  { key: 'underReview', label: 'Under Review Evidence' },
  { key: 'inProgress', label: 'In Progress Evidence' },
  { key: 'completed', label: 'Completed Evidence' },
] as const;

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'evidence', label: 'Evidence' },
];

export function Details() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const detail = id ? detailsMap[id] ?? strategicPlanningDetail : strategicPlanningDetail;
  const {
    evidence,
    objective,
    requirements,
    scope,
    leaders,
    description,
    evidenceDocuments,
    relatedRegulations,
  } = detail;

  return (
    <div className={styles.page}>
      <PageHeader title={detail.title} backTo="/" />

      <Card className={styles.planOverview}>
        <div className={styles.categoryWrap}>
          <CategoryTag label={detail.category} />
        </div>
        <div className={styles.titleRow}>
          <div className={styles.titleBlock}>
            <h2 className={styles.mainTitle}>{detail.title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
          <div className={styles.progressWrap}>
            <CircularProgress value={detail.progress} size={100} color="#059669" />
          </div>
        </div>
      </Card>

      <div className={styles.evidenceGrid}>
        {EVIDENCE_STATS.map(({ key, label }) => (
          <EvidenceStatCard
            key={key}
            value={evidence[key]}
            label={label}
            icon={<FiFileText size={24} color="#dc2626" />}
          />
        ))}
      </div>

      <div className={styles.tabsWrap}>
        <TabGroup
          tabs={TABS}
          activeId={activeTab}
          onSelect={(tabId) => setActiveTab(tabId)}
        />
      </div>

      {activeTab === 'overview' && (
        <>
          <Card className={styles.overviewContent}>
            <div className={styles.detailRows}>
              <DetailRow label="Objective">{objective}</DetailRow>
              <DetailRow label="Implementation Requirements" multiItem>
                {requirements.map((req, i) => <div key={i}>{req}</div>)}
              </DetailRow>
              {evidenceDocuments != null && (
                <DetailRow label="Evidence Documents">{evidenceDocuments}</DetailRow>
              )}
              {relatedRegulations != null && (
                <DetailRow label="Related Regulations">{relatedRegulations}</DetailRow>
              )}
              <DetailRow label="Scope">{scope}</DetailRow>
            </div>
          </Card>

          <Card className={styles.leadersWrap}>
            <SectionTitle>Leaders</SectionTitle>
            <div className={styles.leadersGrid}>
              {leaders.map((leader) => (
                <LeaderCard
                  key={leader.id}
                  name={leader.name}
                  role={leader.role}
                />
              ))}
            </div>
          </Card>
        </>
      )}

      {activeTab === 'evidence' && (
        <div className={styles.evidenceSection}>
          <Card className={styles.documentsCard}>
            <EvidenceDocumentsTable documents={evidenceDocsData} />
          </Card>

          <div className={styles.commentsActivitiesGrid}>
            <Card className={styles.commentsCard}>
              <SectionTitle>Comments</SectionTitle>
              <div className={styles.commentsList}>
                {evidenceComments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    author={comment.author}
                    authorInitial={comment.authorInitial}
                    text={comment.text}
                    date={comment.date}
                  />
                ))}
              </div>
              <CommentInput onSubmit={(value) => console.log('Comment:', value)} />
            </Card>

            <Card className={styles.activitiesCard}>
              <SectionTitle>Recent Activities</SectionTitle>
              <div className={styles.activitiesList}>
                {evidenceRecentActivities.map((activity) => (
                  <ActivityItem
                    key={activity.id}
                    action={activity.action}
                    timeAgo={activity.timeAgo}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
