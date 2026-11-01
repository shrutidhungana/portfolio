const PulseMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <circle
      cx="50"
      cy="50"
      r="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.35"
    />
    <circle
      cx="50"
      cy="50"
      r="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="animate-breathe"
      style={{ transformOrigin: "50px 50px" }}
    />
  </svg>
);

export default PulseMark;
