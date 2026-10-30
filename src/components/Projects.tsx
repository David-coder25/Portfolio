import { useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  overview: string;
  contribution: string;
  engineering: string;
  color: string;
  accentColor: string;
  images: string[];
  status?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'tiog',
    name: 'TIOG',
    tagline: 'Target Inspection on Go',
    description:
      'Offline-first inspection platform for garment quality control, spanning mobile data capture and web-based tracking.',
    tech: ['React Native', 'React.js', 'Node.js', 'REST APIs', 'Firebase'],
    highlights: [
      'Offline-first field inspections with automatic sync',
      'Garment, fabric, embroidery, washing, printing inspection workflows',
      'Technical audit modules',
      'Report generation and printing',
      'Firebase Cloud Messaging notifications',
      'Web-based trackers and master data management',
    ],
    overview:
      'TIOG is an offline-first inspection platform for garment quality control. Field users can create and edit inspections without connectivity, with automatic data synchronization once connectivity is restored.',
    contribution:
      'Developed and enhanced the mobile application using React Native, built the web dashboard in React.js, and integrated Node.js backend services. Implemented the offline-first sync mechanism and inspection workflow modules.',
    engineering:
      'The offline-first architecture required careful conflict resolution for data sync. Database-driven transaction tracking records inspection user, timestamp, location, and status. Firebase Cloud Messaging handles automated notifications.',
    color: 'rgba(56,189,248,0.08)',
    accentColor: '#38bdf8',
    images: Array.from({ length: 7 }, (_, index) => `/iog/${index + 1}.JPG`),
  },
  {
    id: 'harpa',
    name: 'HARPA',
    tagline: 'Garment ERP',
    description:
      'Enterprise ERP application for garment manufacturing, covering product development, procurement, and inventory management.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'ORM'],
    highlights: [
      'Sample creation → request → acknowledgement → approval → tech pack workflow',
      'Style creation and barcode functionality',
      'Purchase order, receipt, and QC workflows',
      'Stock management and stock issue',
      'Approval-driven multi-step business logic',
      'ORM-based relational data models',
    ],
    overview:
      'HARPA is a full-scale ERP system for garment manufacturing companies. It manages the complete product development lifecycle — from initial sample creation through approval chains, procurement, and inventory operations.',
    contribution:
      'Contributed frontend and backend functionality across product-development, procurement, and inventory workflows. Built multi-step sample management workflows covering creation, request, acknowledgement, approval, and techpack processing. Implemented style creation, barcode functionality, and end-to-end procurement flows.',
    engineering:
      'Complex approval workflows required careful state management and transaction-safe database operations using PostgreSQL with ORM-based data access. The system handles multi-step business logic with strict data consistency requirements across related entities.',
    color: 'rgba(99,102,241,0.08)',
    accentColor: '#6366f1',
    images: Array.from({ length: 3 }, (_, index) => `/harpa/${index + 1}.JPG`),
  },
  {
    id: 'target-erp',
    name: 'TARGET ERP WEB',
    tagline: 'Enterprise ERP Web Application',
    description:
      'Newly started enterprise ERP application for internal business workflows.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Microsoft SQL Server'],
    highlights: [
      'Frontend features in React.js',
      'Backend services in Node.js/Express.js',
      'Business workflow functionality',
      'CRUD operations and REST API integrations',
      'Microsoft SQL Server as relational data layer',
    ],
    overview:
      'TARGET ERP WEB is a newly started enterprise ERP application for internal business workflows, built on the same full-stack foundation as previous projects — React.js frontend, Node.js/Express.js backend, and Microsoft SQL Server as the data layer.',
    contribution:
      'Contributing to frontend feature development in React.js and backend service implementation in Node.js/Express.js. Building business workflow functionality, CRUD operations, and REST API integrations.',
    engineering:
      'Leverages Microsoft SQL Server as the relational data layer, applying the same patterns of structured API design, business logic encapsulation, and maintainable component architecture developed across HARPA and TIOG.',
    color: 'rgba(52,211,153,0.06)',
    accentColor: '#34d399',
    images: Array.from({ length: 3 }, (_, index) => `/erp/${index + 1}.JPG`),
    status: 'In Progress',
  },
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 9}deg) rotateX(${-y * 6}deg) translateZ(6px)`;
    card.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}30`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
    card.style.boxShadow = '0 1px 0 rgba(255,255,255,0.03)';
  };

  return (
    <div
      ref={cardRef}
      className="card-tilt cursor-pointer group"
      style={{
        borderRadius: '20px',
        border: '1px solid #1c2240',
        background: '#0c0f1c',
        overflow: 'hidden',
        boxShadow: '0 1px 0 rgba(255,255,255,0.03)',
        animationDelay: `${index * 120}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      onKeyDown={e => e.target === e.currentTarget && e.key === 'Enter' && onOpen()}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.name} project details`}
    >
      {/* Project visual header */}
      <div
        style={{
          height: '180px',
          background: project.color,
          borderBottom: '1px solid #1c2240',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProjectCarousel project={project} staggerIndex={index} />
      </div>

      {/* Card content */}
      <div style={{ padding: '28px 28px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div>
            <h3
              className="font-display font-bold mb-1"
              style={{ fontSize: '20px', color: '#eef0f8' }}
            >
              {project.name}
            </h3>
            <div className="font-mono-code" style={{ fontSize: '10px', color: project.accentColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {project.tagline}
            </div>
          </div>
          {project.status && (
            <span
              className="font-mono-code"
              style={{
                fontSize: '9px',
                padding: '3px 8px',
                borderRadius: '4px',
                background: 'rgba(52,211,153,0.1)',
                border: '1px solid rgba(52,211,153,0.3)',
                color: '#34d399',
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap',
              }}
            >
              {project.status}
            </span>
          )}
        </div>

        <p style={{ fontSize: '13px', color: '#6b7394', lineHeight: 1.7, marginBottom: '20px', marginTop: '10px' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono-code"
              style={{
                fontSize: '10px',
                padding: '3px 8px',
                borderRadius: '5px',
                background: '#111528',
                border: '1px solid #1c2240',
                color: '#6b7394',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 font-medium transition-all"
          style={{ fontSize: '13px', color: project.accentColor, opacity: 0.7 }}
          onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
          onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.opacity = '0.7')}
        >
          View Case Study
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 7h8M7 3l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectCarousel({ project, staggerIndex }: { project: Project; staggerIndex: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (project.images.length < 2 || isHovered) return;

    const advanceImage = () => {
      setActiveIndex(index => (index + 1) % project.images.length);
    };
    let intervalRef: number | undefined;
    const initialTimeoutId = window.setTimeout(() => {
      advanceImage();
      const intervalId = window.setInterval(advanceImage, 3000);
      intervalRef = intervalId;
    }, 3000 + staggerIndex * 900);

    return () => {
      window.clearTimeout(initialTimeoutId);
      if (intervalRef !== undefined) window.clearInterval(intervalRef);
    };
  }, [isHovered, project.images.length, staggerIndex]);

  return (
    <div
      role="group"
      aria-label={`${project.name} screenshots`}
      style={{ position: 'relative', width: '100%', height: '100%', background: '#080b14' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        key={project.images[activeIndex]}
        src={project.images[activeIndex]}
        alt={`${project.name} screenshot ${activeIndex + 1}`}
        draggable={false}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          animation: 'fadeInUp 0.45s ease-out',
        }}
      />
      {project.images.length > 1 && (
        <div
          className="font-mono-code"
          style={{
            position: 'absolute',
            right: '12px',
            bottom: '10px',
            padding: '4px 7px',
            borderRadius: '5px',
            background: 'rgba(6,8,15,0.75)',
            color: '#eef0f8',
            fontSize: '10px',
          }}
        >
          {String(activeIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
        </div>
      )}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === 'tiog') {
    return (
      <svg width="260" height="140" viewBox="0 0 260 140" fill="none">
        {/* Mobile outline */}
        <rect x="90" y="10" width="50" height="90" rx="8" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" fill="rgba(56,189,248,0.05)" />
        <rect x="100" y="22" width="30" height="20" rx="3" fill="rgba(56,189,248,0.12)" />
        <rect x="100" y="48" width="30" height="4" rx="2" fill="rgba(56,189,248,0.2)" />
        <rect x="100" y="56" width="20" height="4" rx="2" fill="rgba(56,189,248,0.15)" />
        <rect x="100" y="64" width="25" height="4" rx="2" fill="rgba(56,189,248,0.1)" />
        <circle cx="115" cy="92" r="3" fill="rgba(56,189,248,0.3)" />

        {/* Sync arrow */}
        <path d="M148 55 L175 55" stroke="rgba(56,189,248,0.4)" strokeWidth="1" strokeDasharray="3 2" />
        <polygon points="175,52 180,55 175,58" fill="rgba(56,189,248,0.5)" />

        {/* Web panel */}
        <rect x="183" y="30" width="65" height="50" rx="5" stroke="rgba(56,189,248,0.25)" strokeWidth="1" fill="rgba(56,189,248,0.04)" />
        <rect x="189" y="38" width="52" height="8" rx="2" fill="rgba(56,189,248,0.12)" />
        <rect x="189" y="50" width="30" height="3" rx="1" fill="rgba(56,189,248,0.15)" />
        <rect x="189" y="57" width="40" height="3" rx="1" fill="rgba(56,189,248,0.1)" />
        <rect x="189" y="64" width="22" height="3" rx="1" fill="rgba(56,189,248,0.08)" />

        {/* Wifi symbol */}
        <path d="M40 60 Q60 40 80 60" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" fill="none" />
        <path d="M46 66 Q60 52 74 66" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" fill="none" />
        <circle cx="60" cy="72" r="2.5" fill="rgba(56,189,248,0.5)" />
        <text x="32" y="90" fill="rgba(56,189,248,0.3)" fontSize="8" fontFamily="JetBrains Mono, monospace">Offline-first</text>

        {/* Bottom label */}
        <text x="74" y="118" fill="rgba(56,189,248,0.35)" fontSize="8" fontFamily="JetBrains Mono, monospace">Auto-sync · FCM · Reports</text>
      </svg>
    );
  }

  if (project.id === 'harpa') {
    return (
      <svg width="260" height="140" viewBox="0 0 260 140" fill="none">
        {/* Workflow steps */}
        {['Sample', 'Request', 'Approval', 'Style', 'Barcode'].map((step, i) => (
          <g key={step}>
            <rect
              x={15 + i * 48}
              y="20"
              width="40"
              height="28"
              rx="5"
              fill={i === 2 ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.08)'}
              stroke={i === 2 ? 'rgba(99,102,241,0.5)' : 'rgba(99,102,241,0.2)'}
              strokeWidth="1"
            />
            <text
              x={35 + i * 48}
              y="33"
              textAnchor="middle"
              fill={i === 2 ? 'rgba(99,102,241,0.9)' : 'rgba(99,102,241,0.5)'}
              fontSize="6"
              fontFamily="JetBrains Mono, monospace"
            >
              {step}
            </text>
            {i < 4 && (
              <path d={`M ${55 + i * 48} 34 L ${63 + i * 48} 34`} stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
            )}
          </g>
        ))}

        {/* Procurement row */}
        <text x="15" y="72" fill="rgba(99,102,241,0.35)" fontSize="7" fontFamily="JetBrains Mono, monospace">PROCUREMENT</text>
        {['PO', 'Receipt', 'QC', 'Stock'].map((step, i) => (
          <g key={step}>
            <rect
              x={15 + i * 60}
              y="80"
              width="52"
              height="24"
              rx="4"
              fill="rgba(99,102,241,0.06)"
              stroke="rgba(99,102,241,0.18)"
              strokeWidth="1"
            />
            <text
              x={41 + i * 60}
              y="95"
              textAnchor="middle"
              fill="rgba(99,102,241,0.5)"
              fontSize="7"
              fontFamily="JetBrains Mono, monospace"
            >
              {step}
            </text>
            {i < 3 && (
              <path d={`M ${67 + i * 60} 92 L ${75 + i * 60} 92`} stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
            )}
          </g>
        ))}

        <text x="74" y="120" fill="rgba(99,102,241,0.3)" fontSize="7" fontFamily="JetBrains Mono, monospace">PostgreSQL · ORM · TypeScript</text>
      </svg>
    );
  }

  // TARGET ERP WEB
  return (
    <svg width="260" height="140" viewBox="0 0 260 140" fill="none">
      {/* Browser chrome */}
      <rect x="20" y="15" width="220" height="110" rx="8" stroke="rgba(52,211,153,0.2)" strokeWidth="1" fill="rgba(52,211,153,0.03)" />
      <rect x="20" y="15" width="220" height="24" rx="8" fill="rgba(52,211,153,0.06)" />
      <circle cx="34" cy="27" r="4" fill="rgba(52,211,153,0.2)" />
      <circle cx="48" cy="27" r="4" fill="rgba(52,211,153,0.15)" />
      <circle cx="62" cy="27" r="4" fill="rgba(52,211,153,0.1)" />
      <rect x="74" y="22" width="120" height="10" rx="3" fill="rgba(52,211,153,0.06)" />

      {/* Sidebar */}
      <rect x="20" y="39" width="48" height="86" fill="rgba(52,211,153,0.04)" />
      {[0, 1, 2, 3, 4].map(i => (
        <rect key={i} x="28" y={50 + i * 14} width="30" height="8" rx="3" fill={i === 1 ? 'rgba(52,211,153,0.15)' : 'rgba(52,211,153,0.06)'} />
      ))}

      {/* Content area */}
      <rect x="76" y="45" width="150" height="22" rx="4" fill="rgba(52,211,153,0.08)" />
      <rect x="76" y="73" width="70" height="44" rx="4" fill="rgba(52,211,153,0.05)" stroke="rgba(52,211,153,0.12)" strokeWidth="1" />
      <rect x="154" y="73" width="70" height="44" rx="4" fill="rgba(52,211,153,0.05)" stroke="rgba(52,211,153,0.12)" strokeWidth="1" />

      <text x="74" y="130" fill="rgba(52,211,153,0.3)" fontSize="7" fontFamily="JetBrains Mono, monospace">React.js · Node.js · MSSQL · In Progress</text>
    </svg>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      style={{ background: 'rgba(6,8,15,0.92)', backdropFilter: 'blur(20px)', padding: '48px 24px' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '760px',
          borderRadius: '24px',
          border: '1px solid #1c2240',
          background: '#0c0f1c',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            height: '200px',
            background: project.color,
            borderBottom: '1px solid #1c2240',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ProjectCarousel project={project} staggerIndex={PROJECTS.findIndex(item => item.id === project.id)} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              border: '1px solid #1c2240',
              background: 'rgba(6,8,15,0.7)',
              color: '#6b7394',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close modal"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '40px 44px 48px' }}>
          <div
            className="font-mono-code uppercase mb-2"
            style={{ fontSize: '10px', color: project.accentColor, letterSpacing: '0.12em' }}
          >
            {project.tagline}
          </div>
          <h2
            className="font-display font-bold mb-6"
            style={{ fontSize: '32px', color: '#eef0f8' }}
          >
            {project.name}
          </h2>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(t => (
              <span
                key={t}
                className="font-mono-code"
                style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: '#a5b4fc',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <Section title="Overview" content={project.overview} />
            <Section title="My Contribution" content={project.contribution} />

            {/* Key functionality */}
            <div>
              <h4
                className="font-display font-semibold mb-3"
                style={{ fontSize: '15px', color: '#eef0f8' }}
              >
                Key Functionality
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#6b7394', lineHeight: 1.65 }}
                  >
                    <span
                      style={{
                        marginTop: '8px',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: project.accentColor,
                        flexShrink: 0,
                      }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <Section title="Engineering Considerations" content={project.engineering} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4
        className="font-display font-semibold mb-2"
        style={{ fontSize: '15px', color: '#eef0f8' }}
      >
        {title}
      </h4>
      <p style={{ fontSize: '14px', color: '#6b7394', lineHeight: 1.8 }}>{content}</p>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" style={{ padding: '96px 0 112px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div ref={ref} className={`section-animate${inView ? ' in-view' : ''}`}>
            <div
              className="font-mono-code uppercase mb-4"
              style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.14em' }}
            >
              Projects
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
              <h2
                className="font-display font-bold"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#eef0f8' }}
              >
                Featured work
              </h2>
              <p style={{ fontSize: '14px', color: '#6b7394', maxWidth: '340px', lineHeight: 1.7 }}>
                Real enterprise applications built across the full stack. Click any card to see the full case study.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {PROJECTS.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onOpen={() => setActiveProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
