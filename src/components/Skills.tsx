import { useInView } from '../hooks/useInView';

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    core: ['React.js', 'TypeScript', 'JavaScript'],
    secondary: [
      'React Router', 'TanStack Query', 'React Native', 'HTML5', 'CSS3',
      'Lazy Loading', 'Code Splitting', 'Pagination', 'Infinite Scrolling',
      'Debouncing', 'Throttling',
    ],
  },
  {
    label: 'Backend',
    core: ['Node.js', 'Express.js'],
    secondary: [
      'REST APIs', 'JWT Authentication', 'Authorization', 'Middleware',
      'Asynchronous Programming',
    ],
  },
  {
    label: 'Databases',
    core: ['PostgreSQL', 'Microsoft SQL Server'],
    secondary: [
      'SQL', 'ORM-based Data Access', 'Relational Database Design',
      'Indexing', 'Transactions',
    ],
  },
  {
    label: 'DevOps & Tools',
    core: ['Git', 'Docker'],
    secondary: ['GitHub', 'Docker Compose', 'Jenkins (CI/CD)'],
  },
  {
    label: 'Additional',
    core: [],
    secondary: ['Java', 'Spring Boot', 'Microservices', 'Python'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" style={{ padding: '96px 0 112px', background: '#0c0f1c' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`section-animate${inView ? ' in-view' : ''}`}>
          <div
            className="font-mono-code uppercase mb-4"
            style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.14em' }}
          >
            Technical Expertise
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
            <h2
              className="font-display font-bold"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#eef0f8' }}
            >
              What I work with
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7394', maxWidth: '300px', lineHeight: 1.7 }}>
              Highlighted technologies are my primary focus. Others are part of my working knowledge.
            </p>
          </div>

          {/* Core stack callout */}
          <div
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(99,102,241,0.25)',
              background: 'rgba(99,102,241,0.06)',
              padding: '24px 28px',
              marginBottom: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <span
              className="font-mono-code uppercase"
              style={{ fontSize: '10px', color: '#6366f1', letterSpacing: '0.14em', marginRight: '8px' }}
            >
              Core Stack
            </span>
            {['React.js', 'TypeScript', 'Node.js', 'Express.js'].map(tech => (
              <span
                key={tech}
                className="font-display font-semibold"
                style={{
                  fontSize: '14px',
                  padding: '6px 16px',
                  borderRadius: '8px',
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.4)',
                  color: '#a5b4fc',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Skill groups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SKILL_GROUPS.map(group => (
              <div
                key={group.label}
                style={{
                  borderRadius: '16px',
                  border: '1px solid #1c2240',
                  background: '#111528',
                  padding: '28px',
                }}
              >
                <div
                  className="font-mono-code uppercase mb-5"
                  style={{ fontSize: '10px', color: '#6b7394', letterSpacing: '0.14em' }}
                >
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.core.map(tech => (
                    <span
                      key={tech}
                      className="font-mono-code"
                      style={{
                        fontSize: '12px',
                        padding: '5px 12px',
                        borderRadius: '7px',
                        background: 'rgba(99,102,241,0.1)',
                        border: '1px solid rgba(99,102,241,0.35)',
                        color: '#a5b4fc',
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {group.secondary.map(tech => (
                    <span
                      key={tech}
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
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
