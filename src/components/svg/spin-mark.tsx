const SpinMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <polygon
      points="50,4 90,27 90,73 50,96 10,73 10,27"
      strokeWidth="2.5"
      strokeDasharray="6 7"
    />
    <circle cx="50" cy="50" r="6" strokeWidth="2.5" />
  </svg>
);

export default SpinMark;
