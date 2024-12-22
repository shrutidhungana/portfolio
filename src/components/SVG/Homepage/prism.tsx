const Prism = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <radialGradient id="prismGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ccc" />
        <stop offset="100%" stopColor="#999" />
      </radialGradient>
    </defs>
    <polygon
      points="100,0 150,200 50,200"
      fill="url(#prismGradient)"
      stroke="#bbb"
      strokeWidth="1"
    />
  </svg>
);

export default Prism;
