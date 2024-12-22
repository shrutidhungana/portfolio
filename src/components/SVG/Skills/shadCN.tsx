import React from "react";

const ShadCN: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className={className} // Optionally pass className for styling
  >
    <path fill="none" d="M0 0h256v256H0z"></path>
    <path
      fill="none"
      stroke="currentColor"
      d="M208 128l-80 80M192 40L40 192"
    ></path>
  </svg>
);

export default ShadCN;
