import React from "react";

const GraduationCap: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className || "w-8 h-8"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l6.16-3.422M6 10.578L12 14"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
  </svg>
);

export default GraduationCap;
