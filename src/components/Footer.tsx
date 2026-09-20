const FOOTER_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/davidraja25' },
  { label: 'GitHub', href: 'https://github.com/David-coder25' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/david_72' },
  { label: 'Email', href: 'mailto:davidraja4013@gmail.com' },
];

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid #1c2240',
        background: '#06080f',
        padding: '48px 0 32px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="font-display font-bold mb-2"
              style={{ fontSize: '20px', color: '#eef0f8' }}
            >
              David Raja
            </div>
            <div
              className="font-mono-code uppercase mb-4"
              style={{ fontSize: '10px', color: '#6b7394', letterSpacing: '0.12em' }}
            >
              Full-Stack Developer
            </div>
            <p style={{ fontSize: '13px', color: '#6b7394', lineHeight: 1.7, maxWidth: '260px' }}>
              Building enterprise web applications with React, TypeScript, Node.js and API-driven systems.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div
              className="font-mono-code uppercase mb-5"
              style={{ fontSize: '9px', color: '#6b7394', letterSpacing: '0.14em' }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map(link => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    fontSize: '13px',
                    color: '#6b7394',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#eef0f8')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#6b7394')}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div
              className="font-mono-code uppercase mb-5"
              style={{ fontSize: '9px', color: '#6b7394', letterSpacing: '0.14em' }}
            >
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {FOOTER_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    fontSize: '13px',
                    color: '#6b7394',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#a5b4fc')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#6b7394')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1c2240',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
          className="flex-col sm:flex-row sm:items-center sm:justify-between"
        >
          <p
            className="font-mono-code"
            style={{ fontSize: '11px', color: '#6b7394' }}
          >
            © {new Date().getFullYear()} David Raja. All rights reserved.
          </p>
          <p
            className="font-mono-code"
            style={{ fontSize: '11px', color: '#6b7394' }}
          >
            React.js · TypeScript · Node.js · Express.js
          </p>
        </div>
      </div>
    </footer>
  );
}
