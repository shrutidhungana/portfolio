const Ring = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <radialGradient id="ringGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ccc" />
        <stop offset="100%" stopColor="#999" />
      </radialGradient>
    </defs>
    <circle
      cx="100"
      cy="100"
      r="80"
      stroke="url(#ringGradient)"
      strokeWidth="20"
      fill="none"
    />
  </svg>
);

export default Ring;
