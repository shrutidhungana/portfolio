// ReusableButton.tsx
import React from "react";
import { motion } from "framer-motion";

type ReusableButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ReusableButtonProps> = ({
  text,
  onClick,
  className = "",
    icon,
  type,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      type={type}
      className={`mt-4 px-6 py-2 rounded-full bg-[#7a3bdb] text-[#FDEBD0] hover:bg-[#333333] hover:text-white transition ${className}`}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;
