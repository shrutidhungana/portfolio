const DiamondMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="22"
      y="22"
      width="56"
      height="56"
      strokeWidth="2.5"
      strokeDasharray="5 6"
      transform="rotate(45 50 50)"
    />
  </svg>
);

export default DiamondMark;
