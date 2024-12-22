const Cone = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <radialGradient id="coneGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ccc" />
        <stop offset="100%" stopColor="#999" />
      </radialGradient>
    </defs>
    <path
      d="M100 0 L200 200 H0 Z"
      fill="url(#coneGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
  </svg>
);

export default Cone;
