import { useInView } from '../hooks/useInView';

const PRINCIPLES = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="7" height="7" rx="1" />
        <rect x="11" y="3" width="7" height="7" rx="1" />
        <rect x="2" y="12" width="7" height="7" rx="1" />
        <rect x="11" y="12" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Component-Driven Frontend',
    desc: 'Building reusable, composable UI components in React and TypeScript that scale cleanly across complex ERP interfaces.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M10 3v4M3 10h4M17 10h-4M10 17v-4" />
        <circle cx="10" cy="10" r="3" />
        <path d="M5.5 5.5l2.5 2.5M14.5 5.5l-2.5 2.5M5.5 14.5l2.5-2.5M14.5 14.5l-2.5-2.5" />
      </svg>
    ),
    title: 'API-Driven Architecture',
    desc: 'Designing clean RESTful APIs in Node.js/Express.js that connect frontend interfaces to relational databases with clear contracts.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
    title: 'Business Workflow Logic',
    desc: 'Translating complex approval workflows, multi-step processes, and state-driven operations into maintainable backend logic.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M3 8h14M8 3v14" />
      </svg>
    ),
    title: 'Database-Backed Systems',
    desc: 'Writing SQL with indexing, transactions, and relational design for PostgreSQL and MSSQL to ensure data consistency across multi-step operations.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M13 2H6a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V7z" />
        <path d="M13 2v5h5M9 13l2 2 4-4" />
      </svg>
    ),
    title: 'Authentication & Security',
    desc: 'Implementing JWT-based authentication and authorization with proper middleware patterns for protecting API routes and user sessions.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Frontend Performance',
    desc: 'Optimizing data-heavy screens through lazy loading, code splitting, pagination, infinite scrolling, debouncing, and throttling.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 4v6h6" />
        <path d="M4 10a7 7 0 107 7" />
      </svg>
    ),
    title: 'Offline-First Design',
    desc: 'Engineering applications that work reliably without connectivity and synchronize data automatically when the network is restored.',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 17v3M4.22 4.22l2.12 2.12M13.66 13.66l2.12 2.12M2 12h3M17 12h3M4.22 19.78l2.12-2.12M13.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: 'CI/CD & Tooling',
    desc: 'Maintaining Git/GitHub workflows and Jenkins pipelines to support consistent, automated build and deployment processes.',
  },
];

export default function Approach() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section style={{ padding: '96px 0 112px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`section-animate${inView ? ' in-view' : ''}`}>
          <div
            className="font-mono-code uppercase mb-4"
            style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.14em' }}
          >
            Engineering Approach
          </div>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#eef0f8' }}
          >
            How I build software
          </h2>
          <p style={{ fontSize: '15px', color: '#6b7394', maxWidth: '520px', lineHeight: 1.75, marginBottom: '56px' }}>
            The principles that guide my day-to-day engineering work, drawn from building real enterprise applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '16px',
                  border: '1px solid #1c2240',
                  background: '#0c0f1c',
                  padding: '24px',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(99,102,241,0.3)';
                  el.style.background = '#111528';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = '#1c2240';
                  el.style.background = '#0c0f1c';
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6366f1',
                    marginBottom: '16px',
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: '14px', color: '#eef0f8', lineHeight: 1.4 }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#6b7394', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
