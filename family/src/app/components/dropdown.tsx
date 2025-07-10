"use client";
import Image from "next/image";
import { useState } from "react";

interface DropDownProps {
  name: string | null;
  option: string[];
  placeholder?: string | null;
}

export const DropDown = ({ name, option, placeholder }: DropDownProps) => {
  const defaulltPlaceholder = "선택";

  const currentPlaceholder = placeholder || defaulltPlaceholder;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const displayText =
    selectedValue !== null ? selectedValue : currentPlaceholder;

  const handleOptionClick = (optValue: string | null) => {
    setSelectedValue(optValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full relative ">
      <div className="flex relative w-full">
        <button
          onClick={toggleDropdown}
          className={`w-full text-[12px] text-gray-500 border rounded-[100px] h-[32px] px-[16px] cursor-pointer flex justify-center items-center gap-[5px]
          ${selectedValue !== null ? "border-green-400" : "border-gray-500"}
          `}
        >
          {displayText}
          {isOpen ? (
            <Image src={"/arrowup.svg"} width={16} height={16} alt="icon" />
          ) : (
            <Image src={"/arrowdown.svg"} width={16} height={16} alt="icon" />
          )}
        </button>
      </div>
      <ul
        id={name || undefined}
        className={`w-full cursor-pointer transition-all duration-200 ease-in-out absolute top-full left-0 right-0  ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen &&
          option.map((opt, index) => (
            <li
              key={`${name || "dropdown"}-${opt}-${index}`}
              value={opt}
              className="option"
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </li>
          ))}
      </ul>
    </div>
  );
};
