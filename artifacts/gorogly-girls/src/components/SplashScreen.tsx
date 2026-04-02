import { useEffect, useState, useMemo } from 'react';
import logoImg from '/logo.png';

const PARTICLE_COUNT = 18;

function makeParticles() {
  return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
    const angle = (i / PARTICLE_COUNT) * 2 * Math.PI + Math.random() * 0.4;
    const dist = 80 + Math.random() * 120;
    return {
      tx: Math.cos(angle) * dist,
      ty: Math.sin(angle) * dist,
      delay: i * 0.07 + 0.3,
    };
  });
}

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');
  const particles = useMemo(() => makeParticles(), []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 400);
    const t2 = setTimeout(() => setPhase('out'), 2200);
    const t3 = setTimeout(() => onDone(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div className={`splash${phase === 'out' ? ' splash-out' : ''}`}>
      <div className="splash-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="splash-particle"
            style={{
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="splash-rings">
        <div className="splash-ring splash-ring-1" />
        <div className="splash-ring splash-ring-2" />
        <div className="splash-ring splash-ring-3" />
      </div>

      <div className="splash-center">
        <div className="splash-logo-wrap">
          <div className="splash-logo-glow" />
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
