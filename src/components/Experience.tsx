import { useInView } from '../hooks/useInView';

const TECH = ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'MSSQL', 'JWT', 'Jenkins', 'Docker', 'Git'];

const RESPONSIBILITIES = [
  'Developed and maintained full-stack modules for enterprise ERP and workflow applications, connecting React.js/TypeScript frontends with Node.js/Express.js backend services and relational databases.',
  'Designed and implemented RESTful APIs supporting CRUD operations, approval processes, and state-based business workflows across procurement and inventory management.',
  'Implemented JWT-based authentication and authorization; built reusable frontend components with React Router, including pagination and infinite scrolling for large ERP data screens.',
  'Wrote SQL queries against PostgreSQL and Microsoft SQL Server, applying indexing and transaction handling to maintain data consistency across multi-step workflow operations.',
  'Enhanced frontend performance on data-heavy ERP screens through lazy loading, code splitting, debouncing, and throttling.',
  'Maintained Git/GitHub source-control workflows and configured CI/CD pipelines in Jenkins to support consistent build and deployment processes.',
  'Debugged and resolved issues across frontend, backend, API, and database layers within Agile team workflows.',
];

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="experience" style={{ padding: '96px 0 112px', background: '#0c0f1c' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`section-animate${inView ? ' in-view' : ''}`}>
          <div
            className="font-mono-code uppercase mb-4"
            style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.14em' }}
          >
            Experience
          </div>
          <h2
            className="font-display font-bold mb-16"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#eef0f8' }}
          >
            Where I've worked
          </h2>

          <div className="relative">
            {/* Timeline line — desktop */}
            <div
              className="hidden lg:block absolute"
              style={{
                left: 0,
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, #6366f1, #1c2240 80%)',
              }}
            />

            <div style={{ paddingLeft: '0' }} className="lg:pl-12">
              {/* Timeline dot */}
              <div
                className="hidden lg:block absolute"
                style={{
                  left: '-5px',
                  top: '28px',
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  boxShadow: '0 0 12px rgba(99,102,241,0.7)',
                }}
              />

              {/* Experience card */}
              <div
                style={{
                  borderRadius: '20px',
                  border: '1px solid #1c2240',
                  background: '#111528',
                  padding: '40px 44px',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(99,102,241,0.35)')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = '#1c2240')}
              >
                {/* Header */}
                <div
                  className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6"
                >
                  <div>
                    <h3
                      className="font-display font-bold mb-1"
                      style={{ fontSize: '24px', color: '#eef0f8' }}
                    >
                      Software Developer
                    </h3>
                    <div style={{ color: '#6366f1', fontWeight: 600, fontSize: '15px' }}>
                      ASK Technology
                    </div>
                  </div>
                  <div
                    className="font-mono-code"
                    style={{
                      fontSize: '12px',
                      color: '#6b7394',
                      background: '#0c0f1c',
                      border: '1px solid #1c2240',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      whiteSpace: 'nowrap',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Nov 2023 – Present
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {TECH.map(t => (
                    <span
                      key={t}
                      className="font-mono-code"
                      style={{
                        fontSize: '11px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: '#0c0f1c',
                        border: '1px solid #1c2240',
                        color: '#6b7394',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Responsibilities */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {RESPONSIBILITIES.map((item, i) => (
                    <li
                      key={i}
                      style={{ display: 'flex', gap: '12px', fontSize: '14px', color: '#6b7394', lineHeight: 1.75 }}
                    >
                      <span
                        style={{
                          marginTop: '9px',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#6366f1',
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
