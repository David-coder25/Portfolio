import { useInView } from '../hooks/useInView';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'davidraja4013@gmail.com',
    href: 'mailto:davidraja4013@gmail.com',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" transform="scale(0.75) translate(3,3)" />
        <polyline points="22,6 12,13 2,6" transform="scale(0.75) translate(3,3)" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/davidraja25',
    href: 'https://linkedin.com/in/davidraja25',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'GitHub Profile',
    href: 'https://github.com/David-coder25',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LeetCode',
    value: 'LeetCode Profile',
    href: 'https://leetcode.com/u/david_72',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" style={{ padding: '96px 0 112px', background: '#0c0f1c' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`section-animate${inView ? ' in-view' : ''}`}>
          <div
            style={{
              borderRadius: '24px',
              border: '1px solid #1c2240',
              background: '#06080f',
              padding: 'clamp(40px, 6vw, 80px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <div>
                <div
                  className="font-mono-code uppercase mb-4"
                  style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.14em' }}
                >
                  Get in Touch
                </div>
                <h2
                  className="font-display font-bold leading-tight mb-6"
                  style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#eef0f8' }}
                >
                  Let's build something
                  <br />
                  <span style={{ color: '#6b7394' }}>meaningful.</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#6b7394', lineHeight: 1.8, marginBottom: '36px', maxWidth: '420px' }}>
                  I'm open to new opportunities and always happy to connect.
                  Whether you have a role in mind, a project to discuss, or
                  just want to say hello — reach out.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:davidraja4013@gmail.com"
                    style={{
                      padding: '13px 28px',
                      borderRadius: '10px',
                      background: '#6366f1',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'background 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = '#4f52c9';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = '#6366f1';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    }}
                  >
                    Let's Connect
                  </a>
                  <a
                    href="/resume.pdf"
                    download="DavidRaja_Resume.pdf"
                    style={{
                      padding: '13px 28px',
                      borderRadius: '10px',
                      border: '1px solid #1c2240',
                      color: '#eef0f8',
                      fontSize: '14px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#6366f1';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#a5b4fc';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1c2240';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#eef0f8';
                    }}
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Right: Contact links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {CONTACT_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '18px 20px',
                      borderRadius: '14px',
                      border: '1px solid #1c2240',
                      background: '#0c0f1c',
                      textDecoration: 'none',
                      transition: 'border-color 0.25s, background 0.25s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = 'rgba(99,102,241,0.35)';
                      el.style.background = '#111528';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
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
                        flexShrink: 0,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div
                        className="font-mono-code uppercase"
                        style={{ fontSize: '9px', color: '#6b7394', letterSpacing: '0.12em', marginBottom: '3px' }}
                      >
                        {link.label}
                      </div>
                      <div style={{ fontSize: '13px', color: '#eef0f8', fontWeight: 500 }}>
                        {link.value}
                      </div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: '#6b7394' }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M3 7h8M7 3l4 4-4 4" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
