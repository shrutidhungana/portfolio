const Cuboid = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <linearGradient id="cuboidGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ccc" />
        <stop offset="100%" stopColor="#999" />
      </linearGradient>
    </defs>
    <rect
      x="50"
      y="50"
      width="100"
      height="100"
      fill="url(#cuboidGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
    <polygon
      points="50,50 100,30 150,50 100,70"
      fill="url(#cuboidGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
    <polygon
      points="150,50 150,150 100,170 100,70"
      fill="url(#cuboidGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
  </svg>
);

export default Cuboid;
