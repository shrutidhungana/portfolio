const Sphere = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <radialGradient id="sphereGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ccc" />
        <stop offset="100%" stopColor="#999" />
      </radialGradient>
    </defs>
    <circle
      cx="100"
      cy="100"
      r="90"
      fill="url(#sphereGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
  </svg>
);

export default Sphere;
