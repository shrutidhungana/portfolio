const Cylinder = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <linearGradient id="cylinderGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ccc" />
        <stop offset="100%" stopColor="#999" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="30" rx="90" ry="30" fill="url(#cylinderGradient)" />
    <rect
      x="10"
      y="30"
      width="180"
      height="140"
      fill="url(#cylinderGradient)"
    />
    <ellipse cx="100" cy="170" rx="90" ry="30" fill="url(#cylinderGradient)" />
  </svg>
);

export default Cylinder;
