import HeroScene from './HeroScene';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/davidraja25',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/David-coder25',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/david_72',
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 72% 50%, rgba(99,102,241,0.09) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100vh-9rem)]">

          {/* Left: Content */}
          <div className="flex flex-col gap-7">
            {/* Status label */}
            <div className="flex items-center gap-2.5">
              <span
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  boxShadow: '0 0 8px rgba(99,102,241,0.9)',
                  animation: 'pulse-ring 2.5s ease-in-out infinite',
                }}
              />
              <span
                className="font-mono-code uppercase"
                style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.14em' }}
              >
                Full-Stack Developer
              </span>
            </div>

            {/* Name */}
            <div>
              <h1
                className="font-display leading-none tracking-tight"
                style={{ fontSize: 'clamp(52px, 8vw, 88px)', fontWeight: 900, color: '#eef0f8' }}
              >
                David
              </h1>
              <h1
                className="font-display leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(52px, 8vw, 88px)',
                  fontWeight: 900,
                  background: 'linear-gradient(120deg, #818cf8, #6366f1 40%, #38bdf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Raja
              </h1>
            </div>

            {/* Core stack badges */}
            <div className="flex flex-wrap gap-2">
              {['React.js', 'TypeScript', 'Node.js', 'Express.js'].map(tech => (
                <span
                  key={tech}
                  className="font-mono-code"
                  style={{
                    fontSize: '11px',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.28)',
                    color: '#a5b4fc',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p style={{ color: '#6b7394', fontSize: '17px', lineHeight: 1.75, maxWidth: '480px' }}>
              Building enterprise web applications with React, TypeScript, Node.js and scalable
              API-driven systems. Nearly 3 years of experience delivering full-stack ERP and
              workflow solutions at ASK Technology.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((link, i) => (
                <>
                  {i > 0 && (
                    <span key={`sep-${i}`} style={{ width: '1px', height: '14px', background: '#1c2240' }} />
                  )}
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href !== '#' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: '#6b7394' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7394')}
                    aria-label={link.label}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-semibold transition-all"
                style={{
                  padding: '13px 28px',
                  borderRadius: '10px',
                  background: '#6366f1',
                  color: '#fff',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#4f52c9';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#6366f1';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                View My Work
              </button>
              <a
                href="/resume.pdf"
                download="DavidRaja_Resume.pdf"
                className="font-semibold transition-all"
                style={{
                  padding: '13px 28px',
                  borderRadius: '10px',
                  border: '1px solid #1c2240',
                  color: '#eef0f8',
                  fontSize: '14px',
                  background: 'transparent',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
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

          {/* Right: 3D Scene */}
          <div className="hidden lg:block" style={{ height: '520px', position: 'relative' }}>
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '120px',
          background: 'linear-gradient(to top, #06080f, transparent)',
        }}
      />

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.4 }}
      >
        <span className="font-mono-code" style={{ fontSize: '10px', color: '#6b7394', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, #6b7394, transparent)' }} />
      </div>
    </section>
  );
}
