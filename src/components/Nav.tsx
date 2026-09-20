import { useState, useEffect } from 'react';

const LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(6, 8, 15, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid #1c2240' : '1px solid transparent',
          padding: scrolled ? '14px 0' : '22px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
            style={{ color: '#eef0f8' }}
          >
            David Raja
          </button>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm font-medium transition-colors"
                style={{ color: '#6b7394' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#eef0f8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7394')}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:davidraja4013@gmail.com"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{ background: '#6366f1', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#4f52c9')}
              onMouseLeave={e => (e.currentTarget.style.background = '#6366f1')}
            >
              Let's Connect
            </a>

            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#eef0f8' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300"
        style={{
          background: 'rgba(6, 8, 15, 0.97)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        {LINKS.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="font-display text-4xl font-bold transition-colors"
            style={{
              color: '#eef0f8',
              transitionDelay: `${i * 40}ms`,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#6366f1')}
            onMouseLeave={e => (e.currentTarget.style.color = '#eef0f8')}
          >
            {link}
          </button>
        ))}
        <a
          href="mailto:davidraja4013@gmail.com"
          className="mt-4 px-8 py-3.5 rounded-xl font-semibold text-lg"
          style={{ background: '#6366f1', color: '#fff' }}
          onClick={() => setMenuOpen(false)}
        >
          Let's Connect
        </a>
      </div>
    </>
  );
}
