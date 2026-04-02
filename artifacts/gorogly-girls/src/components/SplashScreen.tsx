import { useEffect, useState, useMemo } from 'react';
import logoImg from '/logo.png';

const PARTICLE_COUNT = 22;

function makeParticles() {
  return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
    const angle = (i / PARTICLE_COUNT) * 2 * Math.PI + (Math.random() - 0.5) * 0.5;
    const dist = 90 + Math.random() * 130;
    return {
      tx: Math.cos(angle) * dist,
      ty: Math.sin(angle) * dist,
      delay: i * 0.06 + 0.35,
      size: 3 + Math.random() * 4,
    };
  });
}

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');
  const particles = useMemo(() => makeParticles(), []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 400);
    const t2 = setTimeout(() => setPhase('out'), 2300);
    const t3 = setTimeout(() => onDone(), 3050);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div className={`splash${phase === 'out' ? ' splash-out' : ''}`}>
      {/* Particles scattered across full screen */}
      <div className="splash-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="splash-particle"
            style={{
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
              '--sz': `${p.size}px`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="splash-center">
        {/* Logo with rings centered around it */}
        <div className="splash-logo-wrap">
          <div className="splash-logo-glow" />
          <div className="splash-ring splash-ring-1" />
          <div className="splash-ring splash-ring-2" />
          <div className="splash-ring splash-ring-3" />
          <img src={logoImg} alt="Görogly Girls" className="splash-logo" />
        </div>

        <div className="splash-title-wrap">
          <div className="splash-brand">GÖROGLY</div>
          <div className="splash-brand splash-brand-2">GIRLS</div>
          <div className="splash-sub">FITNESS CLUB · AŞGABAT</div>
        </div>
      </div>

      <div className="splash-bar-wrap">
        <div className="splash-bar" />
      </div>
    </div>
  );
}
