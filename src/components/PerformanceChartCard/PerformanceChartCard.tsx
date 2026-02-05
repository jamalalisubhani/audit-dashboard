import type { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Card } from '../Card/Card';
import styles from './PerformanceChartCard.module.scss';

export interface ChartDataPoint {
  month: string;
  value: number;
}

export interface PerformanceChartCardProps {
  data: ChartDataPoint[];
  title?: string;
  dataKey?: string;
  className?: string;
}

export const PerformanceChartCard: FC<PerformanceChartCardProps> = ({
  data,
  title = '12-Month Performance',
  dataKey = 'value',
  className,
}) => (
  <section className={className}>
    <Card>
      <SectionTitle>{title}</SectionTitle>
      <div className={styles.chartWrap}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={1} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={{ stroke: '#e2e8f0' }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip
              contentStyle={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#0f172a' }}
            />
            <Bar
              dataKey={dataKey}
              name="Performance"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  </section>
);
