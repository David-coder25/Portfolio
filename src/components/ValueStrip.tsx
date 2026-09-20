const VALUES = [
  { label: '~3 Years', sub: 'Professional Experience' },
  { label: 'React · TS · Node', sub: 'Core Technology Stack' },
  { label: 'ERP & Workflow', sub: 'Domain Expertise' },
  { label: 'Full-Stack', sub: 'End-to-End Development' },
];

export default function ValueStrip() {
  return (
    <section style={{ borderTop: '1px solid #1c2240', borderBottom: '1px solid #1c2240', background: '#0c0f1c' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1px', background: '#1c2240' }}
        >
          {VALUES.map((v, i) => (
            <div
              key={i}
              style={{
                background: '#0c0f1c',
                padding: '28px 32px',
              }}
            >
              <div
                className="font-display font-bold mb-1.5"
                style={{ fontSize: '18px', color: '#eef0f8' }}
              >
                {v.label}
              </div>
              <div
                className="font-mono-code uppercase"
                style={{ fontSize: '10px', color: '#6b7394', letterSpacing: '0.1em' }}
              >
                {v.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
