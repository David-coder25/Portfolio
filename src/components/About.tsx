import { useInView } from '../hooks/useInView';

const STACK_MAP = [
  { label: 'Frontend', tech: 'React.js + TypeScript' },
  { label: 'Backend', tech: 'Node.js + Express.js' },
  { label: 'Database', tech: 'PostgreSQL · MSSQL' },
  { label: 'Mobile', tech: 'React Native' },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" style={{ padding: '96px 0 112px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center section-animate${inView ? ' in-view' : ''}`}
        >
          {/* Left: Content */}
          <div>
            <div
              className="font-mono-code uppercase mb-4"
              style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.14em' }}
            >
              About
            </div>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#eef0f8' }}
            >
              I build things that
              <br />
              <span style={{ color: '#6b7394' }}>actually work.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ color: '#6b7394', lineHeight: 1.8, fontSize: '15px' }}>
                I'm a Full-Stack Developer with nearly 3 years of experience building enterprise web
                applications that solve real business problems. My work spans the entire stack —
                from crafting responsive React/TypeScript interfaces to designing RESTful APIs and
                working with relational databases.
              </p>
              <p style={{ color: '#6b7394', lineHeight: 1.8, fontSize: '15px' }}>
                I specialize in ERP and workflow-driven applications: systems that handle approval
                flows, procurement, inventory, and complex multi-step business logic. I understand
                that these applications need to be reliable, maintainable, and precise.
              </p>
              <p style={{ color: '#6b7394', lineHeight: 1.8, fontSize: '15px' }}>
                At ASK Technology, I work across frontend, backend, and database layers — writing
                SQL with indexing and transactions, implementing JWT authentication, and maintaining
                CI/CD pipelines with Jenkins. I care about building software that holds up under
                real-world use.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">
              {STACK_MAP.map(item => (
                <div key={item.label}>
                  <span
                    className="font-mono-code uppercase block mb-1"
                    style={{ fontSize: '9px', color: '#6366f1', letterSpacing: '0.14em' }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: '13px', color: '#eef0f8', fontWeight: 500 }}>
                    {item.tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract visual */}
          <div className="relative flex items-center justify-center" style={{ height: '380px' }}>
            {/* Recognition card */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '0',
                padding: '16px 18px',
                borderRadius: '14px',
                border: '1px solid #1c2240',
                background: '#0c0f1c',
                maxWidth: '200px',
                zIndex: 2,
              }}
            >
              <div style={{ color: '#f59e0b', marginBottom: '8px' }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#eef0f8', marginBottom: '4px', lineHeight: 1.4 }}>
                Learning & Growth Recognition
              </div>
              <div className="font-mono-code" style={{ fontSize: '10px', color: '#6b7394' }}>
                ASK Technology
              </div>
            </div>

            {/* Abstract geometry */}
            <div style={{ position: 'relative', width: '260px', height: '260px' }}>
              {/* Outer ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '1px solid rgba(99,102,241,0.15)',
                  animation: 'spin-slow 22s linear infinite',
                }}
              />
              {/* Mid ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(99,102,241,0.22)',
                  animation: 'spin-slow-rev 15s linear infinite',
                }}
              />
              {/* Inner */}
              <div
                style={{
                  position: 'absolute',
                  inset: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(56,189,248,0.08))',
                  border: '1px solid rgba(99,102,241,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <div
                  className="font-display font-black"
                  style={{ fontSize: '28px', color: '#eef0f8', lineHeight: 1 }}
                >
                  ~3
                </div>
                <div
                  className="font-mono-code uppercase"
                  style={{ fontSize: '8px', color: '#6b7394', letterSpacing: '0.14em' }}
                >
                  Years
                </div>
              </div>

              {/* Orbit dots — outer ring */}
              {[0, 90, 180, 270].map(deg => (
                <div
                  key={deg}
                  style={{
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#6366f1',
                    boxShadow: '0 0 8px rgba(99,102,241,0.7)',
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 128}px - 4px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 128}px - 4px)`,
                  }}
                />
              ))}

              {/* Orbit dots — mid ring */}
              {[45, 135, 225, 315].map(deg => (
                <div
                  key={deg}
                  style={{
                    position: 'absolute',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#38bdf8',
                    opacity: 0.6,
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 96}px - 2.5px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 96}px - 2.5px)`,
                  }}
                />
              ))}
            </div>

            {/* Company tag */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '0',
                padding: '10px 16px',
                borderRadius: '10px',
                border: '1px solid #1c2240',
                background: '#0c0f1c',
              }}
            >
              <div className="font-mono-code" style={{ fontSize: '10px', color: '#6b7394', marginBottom: '2px', letterSpacing: '0.08em' }}>
                Current Employer
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#eef0f8' }}>
                ASK Technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
