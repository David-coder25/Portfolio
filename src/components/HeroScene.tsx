export default function HeroScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden="true">
      {/* Ambient glow */}
      <div
        className="absolute"
        style={{
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(99,102,241,0.25) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* 3D Perspective stack */}
      <div style={{ perspective: '900px', perspectiveOrigin: '50% 42%' }}>
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(14deg) rotateY(-18deg)',
            width: '300px',
            height: '300px',
            position: 'relative',
          }}
        >
          {/* Layer 1 — Database (back) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              transform: 'translateZ(-90px)',
              background: 'linear-gradient(135deg, rgba(10,13,28,0.95), rgba(14,18,40,0.85))',
              border: '1px solid rgba(99,102,241,0.12)',
              borderRadius: '20px',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              animation: 'float 8s ease-in-out infinite 1.5s',
            }}
          >
            {/* DB cylinders */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  style={{
                    width: '10px',
                    height: '14px',
                    borderRadius: '3px',
                    background: `rgba(99,102,241,${0.15 + i * 0.08})`,
                    border: '1px solid rgba(99,102,241,0.25)',
                  }}
                />
              ))}
            </div>
            <span
              className="font-mono-code"
              style={{ fontSize: '10px', color: '#6b7394', letterSpacing: '0.08em' }}
            >
              PostgreSQL · MSSQL
            </span>
          </div>

          {/* Layer 2 — Backend (middle) */}
          <div
            style={{
              position: 'absolute',
              inset: '28px',
              transform: 'translateZ(0px)',
              background: 'linear-gradient(135deg, rgba(12,15,30,0.97), rgba(18,22,52,0.9))',
              border: '1px solid rgba(99,102,241,0.22)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              animation: 'float 7s ease-in-out infinite 0.8s',
            }}
          >
            {/* API arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '20px', height: '1px', background: 'rgba(99,102,241,0.5)' }} />
              <div style={{ width: '5px', height: '5px', borderRight: '1px solid rgba(99,102,241,0.7)', borderTop: '1px solid rgba(99,102,241,0.7)', transform: 'rotate(45deg)' }} />
            </div>
            <span
              className="font-mono-code"
              style={{ fontSize: '10px', color: '#9496f0', letterSpacing: '0.08em' }}
            >
              Node.js · Express.js
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', transform: 'rotate(180deg)' }}>
              <div style={{ width: '20px', height: '1px', background: 'rgba(99,102,241,0.35)' }} />
              <div style={{ width: '5px', height: '5px', borderRight: '1px solid rgba(99,102,241,0.5)', borderTop: '1px solid rgba(99,102,241,0.5)', transform: 'rotate(45deg)' }} />
            </div>
          </div>

          {/* Layer 3 — Frontend (front) */}
          <div
            style={{
              position: 'absolute',
              inset: '56px',
              transform: 'translateZ(90px)',
              background: 'linear-gradient(135deg, rgba(16,19,42,0.99), rgba(25,29,72,0.92))',
              border: '1px solid rgba(99,102,241,0.45)',
              borderRadius: '14px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 40px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              animation: 'float 6s ease-in-out infinite',
            }}
          >
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 8px rgba(99,102,241,0.8)' }} />
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px rgba(56,189,248,0.6)' }} />
            </div>
            <span
              className="font-mono-code"
              style={{ fontSize: '9px', color: '#c4c7fc', letterSpacing: '0.08em' }}
            >
              React · TypeScript
            </span>
          </div>

          {/* Orbital ring */}
          <div
            style={{
              position: 'absolute',
              top: '-24px',
              left: '-24px',
              right: '-24px',
              bottom: '-24px',
              border: '1px dashed rgba(99,102,241,0.12)',
              borderRadius: '9999px',
              transform: 'translateZ(-46px) rotateX(76deg)',
              animation: 'spin-slow 24s linear infinite',
            }}
          />

          {/* Corner markers */}
          {[
            { top: '-3px', left: '-3px' },
            { top: '-3px', right: '-3px' },
            { bottom: '-3px', left: '-3px' },
            { bottom: '-3px', right: '-3px' },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                ...pos,
                position: 'absolute',
                width: '7px',
                height: '7px',
                borderRadius: '2px',
                background: 'rgba(99,102,241,0.5)',
                transform: 'translateZ(-90px)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating accent nodes */}
      {[
        { top: '12%', right: '8%', size: 7, color: '#38bdf8', delay: '0s', dur: '4s' },
        { top: '72%', left: '6%', size: 5, color: '#6366f1', delay: '1.2s', dur: '5s' },
        { top: '55%', right: '4%', size: 4, color: '#6366f1', delay: '2.4s', dur: '6s' },
        { top: '28%', left: '12%', size: 3, color: '#38bdf8', delay: '0.6s', dur: '4.5s' },
      ].map((node, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: node.top,
            left: node.left,
            right: node.right,
            width: `${node.size}px`,
            height: `${node.size}px`,
            borderRadius: '50%',
            background: node.color,
            opacity: 0.65,
            animation: `float ${node.dur} ease-in-out infinite ${node.delay}`,
            boxShadow: `0 0 ${node.size * 2}px ${node.color}80`,
          }}
        />
      ))}

      {/* Layer labels (right side) */}
      <div
        style={{
          position: 'absolute',
          right: '2%',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          alignItems: 'flex-end',
        }}
      >
        {[
          { label: 'Frontend', color: '#a5b4fc' },
          { label: 'REST API', color: '#9496f0' },
          { label: 'Database', color: '#6b7394' },
        ].map(({ label, color }) => (
          <div key={label} className="font-mono-code" style={{ fontSize: '9px', color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
