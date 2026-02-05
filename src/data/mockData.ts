// Mock data for the audit & compliance dashboard

export interface TimelinePhase {
  id: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  startDate: string;
  endDate: string;
  progress: number;
}

export interface SummaryStat {
  id: string;
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: string;
}

export interface PerspectiveItem {
  number: number;
  status: 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed';
}

export interface PerspectiveSubSection {
  name: string;
  items: PerspectiveItem[];
}

export interface PerspectiveProgress {
  id: string;
  name: string;
  progress: number;
  total: number;
  completed: number;
  color: string;
  subSections?: PerspectiveSubSection[];
}

export interface TopPerformer {
  id: string;
  name: string;
  perspective: string;
  score: number;
  avatar?: string;
}

export interface Activity {
  id: string;
  title: string;
  type: 'audit' | 'review' | 'update' | 'approval';
  timestamp: string;
  user?: string;
  status: string;
}

export interface EvidenceSummary {
  total: number;
  inProgress: number;
  underReview: number;
  completed: number;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
}

export interface StrategicDetail {
  id: string;
  title: string;
  category: string;
  progress: number;
  description?: string;
  evidence: EvidenceSummary;
  objective: string;
  requirements: string[];
  evidenceDocuments?: string;
  relatedRegulations?: string;
  scope: string;
  leaders: Leader[];
}

export interface TrackingItem {
  id: string;
  name: string;
  status: 'on-track' | 'at-risk' | 'delayed' | 'completed';
  dueDate: string;
  owner: string;
  progress: number;
  tags: string[];
}

// Dashboard mock data - Horizontal timeline (matches Project Timeline card design)
export const projectTimeline: TimelinePhase[] = [
  { id: '1', title: 'Kickoff Workshop', status: 'completed', startDate: '2026-03-17', endDate: '2026-03-17', progress: 100 },
  { id: '2', title: 'Data Collection', status: 'current', startDate: '2026-03-18', endDate: '2026-05-07', progress: 100 },
  { id: '3', title: 'Initial Phase', status: 'upcoming', startDate: '2026-05-08', endDate: '2026-05-08', progress: 0 },
  { id: '4', title: 'Verification', status: 'upcoming', startDate: '2026-05-09', endDate: '2026-07-12', progress: 0 },
  { id: '5', title: 'Completion Reviews', status: 'upcoming', startDate: '2026-07-13', endDate: '2026-08-20', progress: 0 },
  { id: '6', title: 'Cycle Conclusion', status: 'upcoming', startDate: '2026-08-21', endDate: '2026-08-21', progress: 0 },
];

export const summaryStats: SummaryStat[] = [
  { id: '1', label: 'Overall Progress', value: '78.65%', change: '+3', trend: 'up', icon: 'progress' },
  { id: '2', label: 'Total Criteria', value: 95, change: undefined, trend: 'neutral', icon: 'document' },
  { id: '3', label: 'Completed Criteria', value: 52, change: undefined, trend: 'neutral', icon: 'check' },
  { id: '4', label: 'Evidence Documents', value: 386, change: undefined, trend: 'neutral', icon: 'document' },
  { id: '5', label: 'Evidence (Completed)', value: 302, change: undefined, trend: 'neutral', icon: 'check' },
  { id: '6', label: 'Uploaded To DGA', value: 258, change: undefined, trend: 'neutral', icon: 'upload' },
];

export const perspectiveProgress: PerspectiveProgress[] = [
  { 
    id: '1', 
    name: 'Strategy And Planning', 
    progress: 97.78, 
    total: 10, 
    completed: 10, 
    color: '#059669',
    subSections: [
      { name: 'Digital Transformation', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
      ]},
      { name: 'Digital Governance', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'in-progress' },
      ]},
      { name: 'Enterprise Architecture', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
      ]},
    ]
  },
  { 
    id: '2', 
    name: 'Organization And Culture', 
    progress: 70.83, 
    total: 12, 
    completed: 10, 
    color: '#059669',
    subSections: [
      { name: 'Digital Culture And Environment', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'completed' },
      ]},
      { name: 'Leadership Development', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
      ]},
      { name: 'Skills & Capacity Building', items: [
        { number: 1, status: 'in-progress' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'in-progress' },
      ]},
    ]
  },
  { 
    id: '3', 
    name: 'Operations And Execution', 
    progress: 80.00, 
    total: 5, 
    completed: 4, 
    color: '#059669',
    subSections: [
      { name: 'Business Processes', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'in-progress' },
        { number: 4, status: 'in-progress' },
      ]},
    ]
  },
  { 
    id: '4', 
    name: 'Business Continuity', 
    progress: 90.59, 
    total: 12, 
    completed: 12, 
    color: '#059669',
    subSections: [
      { name: 'Risk Management', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
        { number: 5, status: 'completed' },
      ]},
      { name: 'Business Continuity', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
        { number: 5, status: 'completed' },
        { number: 6, status: 'completed' },
        { number: 7, status: 'completed' },
      ]},
    ]
  },
  { 
    id: '5', 
    name: 'Information Technology', 
    progress: 75.00, 
    total: 18, 
    completed: 18, 
    color: '#059669',
    subSections: [
      { name: 'Support Systems', items: [
        { number: 1, status: 'partially-uploaded' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
        { number: 5, status: 'completed' },
      ]},
      { name: 'IT Infrastructure', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
        { number: 5, status: 'partially-uploaded' },
        { number: 6, status: 'fully-uploaded' },
        { number: 7, status: 'completed' },
      ]},
      { name: 'Cloud Infrastructure', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'partially-uploaded' },
      ]},
    ]
  },
  { 
    id: '6', 
    name: 'Comprehensive Governance', 
    progress: 64.44, 
    total: 9, 
    completed: 9, 
    color: '#059669',
    subSections: [
      { name: 'Governance Platforms', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'not-started' },
        { number: 5, status: 'completed' },
        { number: 6, status: 'completed' },
        { number: 7, status: 'completed' },
        { number: 8, status: 'completed' },
        { number: 9, status: 'completed' },
      ]},
    ]
  },
  { 
    id: '7', 
    name: 'Channels And Services', 
    progress: 100, 
    total: 7, 
    completed: 7, 
    color: '#059669',
    subSections: [
      { name: 'Service Quality', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
      ]},
      { name: 'Digital Channels', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'completed' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
      ]},
    ]
  },
  { 
    id: '8', 
    name: 'Beneficiary Centralization', 
    progress: 60.00, 
    total: 12, 
    completed: 12, 
    color: '#f59e0b',
    subSections: [
      { name: 'User Engagement', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'in-progress' },
        { number: 4, status: 'in-progress' },
      ]},
      { name: 'User Relationship', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'in-progress' },
      ]},
      { name: 'User Experience', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'completed' },
        { number: 4, status: 'completed' },
        { number: 5, status: 'completed' },
      ]},
    ]
  },
  { 
    id: '9', 
    name: 'Government Data', 
    progress: 87.50, 
    total: 9, 
    completed: 9, 
    color: '#059669',
    subSections: [
      { name: 'Data Governance', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'in-progress' },
      ]},
      { name: 'Data Usage & Availability', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'in-progress' },
      ]},
      { name: 'Open Data', items: [
        { number: 1, status: 'completed' },
        { number: 2, status: 'in-progress' },
        { number: 3, status: 'in-progress' },
      ]},
    ]
  },
  { 
    id: '10', 
    name: 'Research And Innovation', 
    progress: 17.65, 
    total: 6, 
    completed: 0, 
    color: '#dc2626',
    subSections: [
      { name: 'Innovation', items: [
        { number: 1, status: 'delayed' },
        { number: 2, status: 'delayed' },
        { number: 3, status: 'delayed' },
        { number: 4, status: 'delayed' },
      ]},
      { name: 'Creative Solutions', items: [
        { number: 1, status: 'in-progress' },
        { number: 2, status: 'delayed' },
      ]},
    ]
  },
];

export const recentActivities: Activity[] = [
  { id: '1', title: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', type: 'audit', timestamp: '2024-04-02T14:30:00Z', user: 'Ahmed Khaled', status: '5 Mins Ago' },
  { id: '2', title: 'Document "Compliance_Report.xlsx" Was Uploaded By Sarah Ali', type: 'review', timestamp: '2024-04-02T11:00:00Z', user: 'Sarah Ali', status: '15 Mins Ago' },
  { id: '3', title: 'Document "Risk_Assessment.pdf" Was Uploaded By Mohamed Hassan', type: 'update', timestamp: '2024-04-01T16:45:00Z', user: 'Mohamed Hassan', status: '1 Hour Ago' },
];

// Chart data - 12 months (matching the image)
export const chartDataByMonth = [
  { month: 'Jan', value: 87 },
  { month: 'Feb', value: 76 },
  { month: 'Mar', value: 80 },
  { month: 'Apr', value: 42 },
  { month: 'May', value: 88 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 88 },
  { month: 'Sept', value: 78 },
  { month: 'Oct', value: 55 },
  { month: 'Nov', value: 88 },
  { month: 'Dec', value: 78 },
];

export const topPerformers: TopPerformer[] = [
  { id: '1', name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective', score: 96 },
  { id: '2', name: 'Sarah Mohammed', perspective: 'Operations Perspective', score: 89 },
  { id: '3', name: 'Khalid Hassan', perspective: 'Technology Perspective', score: 85 },
];

export const overallCompliance = {
  score: 65,
  label: 'Basic Standards 2025',
};

export const auditReadinessDetailed = {
  score: 80,
  label: 'Readiness Level',
  overdue: 12,
  missingEvidence: 5,
};

// Strategic Planning detail (Details page)
export const strategicPlanningDetail: StrategicDetail = {
  id: 'sp-1',
  title: 'Digital Transformation Strategic Planning',
  category: 'Strategy & Planning',
  progress: 100,
  description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  evidence: {
    total: 4,
    inProgress: 2,
    underReview: 3,
    completed: 1,
  },
  objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
  requirements: [
    'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
    'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
    'B. Strategic Initiatives, Programs, And Performance Indicators.',
    'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
    'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
  ],
  evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
  relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
  scope: 'All Government Entities.',
  leaders: [
    { id: '1', name: 'Ahmed Al-Ali', role: 'Strategy Perspective', email: 'ahmed.ali@company.com' },
    { id: '2', name: 'Ahmed Al-Ali', role: 'Strategy Perspective', email: 'ahmed.ali@company.com' },
  ],
};

// Tracking screen data
export const trackingItems: TrackingItem[] = [
  { id: '1', name: 'Strategic Plan 2024 Documentation', status: 'on-track', dueDate: '2024-04-15', owner: 'S. Chen', progress: 85, tags: ['Governance', 'High Priority'] },
  { id: '2', name: 'Risk Assessment Update', status: 'at-risk', dueDate: '2024-04-10', owner: 'A. Lee', progress: 60, tags: ['Risk', 'Q2'] },
  { id: '3', name: 'Control Testing - IT General Controls', status: 'delayed', dueDate: '2024-04-05', owner: 'K. Brown', progress: 40, tags: ['Technology', 'Audit'] },
  { id: '4', name: 'Policy Acknowledgment Campaign', status: 'completed', dueDate: '2024-03-28', owner: 'M. Johnson', progress: 100, tags: ['HR', 'Compliance'] },
  { id: '5', name: 'Evidence Repository Migration', status: 'on-track', dueDate: '2024-04-25', owner: 'D. Park', progress: 70, tags: ['Technology'] },
  { id: '6', name: 'Vendor Compliance Review', status: 'on-track', dueDate: '2024-04-20', owner: 'J. Smith', progress: 55, tags: ['Third Party'] },
];

export const trackingSummary = {
  onTrack: 3,
  atRisk: 1,
  delayed: 1,
  completed: 1,
};

// Evidence tab data
export interface EvidenceDocument {
  id: string;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: 'approved' | 'pending-review' | 'rejected' | 'draft';
}

export interface Comment {
  id: string;
  author: string;
  authorInitial: string;
  text: string;
  date: string;
}

export interface RecentActivity {
  id: string;
  action: string;
  timeAgo: string;
}

export const evidenceDocuments: EvidenceDocument[] = [
  {
    id: '1',
    documentNumber: '5.4.1.1',
    documentName: 'Digital_Transformation_Plan.Pdf',
    documentLead: 'Ahmed Khaled',
    documentPreparer: 'Ahmed Khaled',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'approved'
  },
  {
    id: '2',
    documentNumber: '5.4.1.2',
    documentName: 'KPI_Framework.Xlsx',
    documentLead: 'Mona Hamed',
    documentPreparer: 'Mona Hamed',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'pending-review'
  },
  {
    id: '3',
    documentNumber: '5.4.1.3',
    documentName: 'Roadmap_Version1.Docx',
    documentLead: 'Rami AlSharif',
    documentPreparer: 'Rami AlSharif',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'pending-review'
  }
];

export const evidenceComments: Comment[] = [
  {
    id: '1',
    author: 'Sara Ibrahim',
    authorInitial: 'S',
    text: 'Ensure The Plan Includes A Clear Governance Model.',
    date: '2025-08-05'
  },
  {
    id: '2',
    author: 'Mona Hamed',
    authorInitial: 'M',
    text: 'Ensure The Plan Includes A Clear Governance Model.',
    date: '2025-08-05'
  }
];

export const evidenceRecentActivities: RecentActivity[] = [
  {
    id: '1',
    action: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
    timeAgo: '5 Mins Ago'
  },
  {
    id: '2',
    action: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
    timeAgo: '20 Mins Ago'
  },
  {
    id: '3',
    action: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
    timeAgo: '1 Hour Ago'
  }
];
