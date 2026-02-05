import { Link } from 'react-router-dom';
import { trackingItems, trackingSummary } from '../data/mockData';
import type { TrackingItem } from '../data/mockData';

function StatusBadge({ status }: { status: TrackingItem['status'] }) {
  const label =
    status === 'on-track'
      ? 'On track'
      : status === 'at-risk'
        ? 'At risk'
        : status === 'delayed'
          ? 'Delayed'
          : 'Completed';
  return <span className={`badge badge-${status === 'on-track' ? 'on-track' : status === 'at-risk' ? 'at-risk' : status === 'delayed' ? 'delayed' : 'completed'}`}>{label}</span>;
}

export function Tracking() {
  return (
    <>
      <header className="page-header" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" style={{ fontSize: '0.875rem', marginBottom: 4, display: 'block' }}>← Back to Dashboard</Link>
          <h1>Tracking</h1>
          <p>Initiative status and deadlines</p>
        </div>
      </header>

      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 'var(--space-lg)' }}>
        {/* Main: data table */}
        <section className="section">
          <div className="card">
            <h2 className="card-title">Initiatives</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Due date</th>
                    <th>Owner</th>
                    <th>Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <strong>{item.name}</strong>
                      </td>
                      <td>
                        <StatusBadge status={item.status} />
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div className="progress-bar" style={{ flex: 1, maxWidth: 80 }}>
                            <div
                              className="progress-bar-fill"
                              style={{
                                width: `${item.progress}%`,
                                background:
                                  item.status === 'completed'
                                    ? 'var(--color-success)'
                                    : item.status === 'delayed'
                                      ? 'var(--color-danger)'
                                      : 'var(--color-primary)',
                              }}
                            />
                          </div>
                          <span style={{ fontSize: '0.8125rem' }}>{item.progress}%</span>
                        </div>
                      </td>
                      <td>{new Date(item.dueDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}</td>
                      <td>{item.owner}</td>
                      <td>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="badge badge-primary"
                              style={{ fontSize: '0.6875rem' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Side panel: summary */}
        <aside className="card" style={{ height: 'fit-content', position: 'sticky', top: 24 }}>
          <h2 className="card-title">Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem' }}>On track</span>
              <strong style={{ color: 'var(--status-on-track)' }}>{trackingSummary.onTrack}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem' }}>At risk</span>
              <strong style={{ color: 'var(--status-at-risk)' }}>{trackingSummary.atRisk}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem' }}>Delayed</span>
              <strong style={{ color: 'var(--status-delayed)' }}>{trackingSummary.delayed}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem' }}>Completed</span>
              <strong style={{ color: 'var(--status-completed)' }}>{trackingSummary.completed}</strong>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '16px 0' }} />
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>
            Use filters and search in the main table to focus on specific statuses or owners.
          </p>
        </aside>
      </div>
    </>
  );
}
