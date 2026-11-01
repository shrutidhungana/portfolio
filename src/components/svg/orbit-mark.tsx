const OrbitMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <circle
      cx="50"
      cy="50"
      r="38"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="3 8"
      opacity="0.5"
    />
    <g className="animate-orbit" style={{ transformOrigin: "50px 50px" }}>
      <circle cx="50" cy="12" r="6" fill="currentColor" />
    </g>
  </svg>
);

export default OrbitMark;
