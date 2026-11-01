const TICKS = Array.from({ length: 12 }, (_, i) => i * 30);

const TickRingMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <g
      className="animate-rotateSlow"
      style={{ transformOrigin: "50px 50px" }}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {TICKS.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="8"
          x2="50"
          y2="16"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </g>
  </svg>
);

export default TickRingMark;
