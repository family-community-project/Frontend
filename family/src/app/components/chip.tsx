import React from "react";

interface ChipProps {
  label: string;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ label, className }) => {
  return (
    <span
      className={`bg-transparent text-green-700 border border-gray-500 inline-flex items-center rounded-full px-2 py-1 text-body4 font-normal ${className || ""}`}
    >
      {label}
    </span>
  );
};

export default Chip;
