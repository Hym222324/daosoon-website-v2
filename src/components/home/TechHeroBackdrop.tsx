/**
 * Homepage hero: animated tech-style backdrop (grid, scan, mesh, nodes).
 * Styles live in globals.css — respects prefers-reduced-motion.
 */
export default function TechHeroBackdrop() {
  return (
    <div className="tech-hero-backdrop" aria-hidden>
      <div className="tech-hero-base" />
      <div className="tech-hero-gradient-mesh" />
      <div className="tech-hero-grid-wrap">
        <div className="tech-hero-grid-lines" />
      </div>
      <div className="tech-hero-scan-line" />
      <div className="tech-hero-nodes">
        <span className="tech-hero-node tech-hero-node--a" />
        <span className="tech-hero-node tech-hero-node--b" />
        <span className="tech-hero-node tech-hero-node--c" />
        <span className="tech-hero-node tech-hero-node--d" />
        <span className="tech-hero-node tech-hero-node--e" />
        <span className="tech-hero-node tech-hero-node--f" />
      </div>
      <svg
        className="tech-hero-circuit"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="tech-circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E88E5" stopOpacity="0" />
            <stop offset="40%" stopColor="#1E88E5" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#9C27B0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#9C27B0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="tech-hero-circuit-path"
          fill="none"
          stroke="url(#tech-circuit-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          d="M0 420 Q200 380 400 420 T800 400 T1200 360 M0 520 Q300 480 600 520 T1200 480 M200 800 L200 600 Q400 560 600 600 L900 620 Q1000 400 1200 380 M0 200 Q400 240 800 180 T1200 220"
        />
        <path
          className="tech-hero-circuit-path tech-hero-circuit-path--delayed"
          fill="none"
          stroke="url(#tech-circuit-grad)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.6"
          d="M0 300 L350 280 L500 400 L750 360 L1200 340 M0 650 Q250 600 500 640 L800 600 Q950 500 1200 520"
        />
      </svg>
      <div className="tech-hero-vignette" />
    </div>
  );
}
