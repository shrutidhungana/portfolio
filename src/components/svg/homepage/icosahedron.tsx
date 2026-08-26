const Icosahedron = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <radialGradient id="icosahedronGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ccc" />
        <stop offset="100%" stopColor="#999" />
      </radialGradient>
    </defs>
    <polygon
      points="100,10 150,70 120,130 80,130 50,70"
      fill="url(#icosahedronGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
    <polygon
      points="50,70 100,10 80,130"
      fill="url(#icosahedronGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
    <polygon
      points="150,70 100,10 120,130"
      fill="url(#icosahedronGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
    <polygon
      points="50,70 80,130 120,130 150,70"
      fill="url(#icosahedronGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
  </svg>
);

export default Icosahedron;
