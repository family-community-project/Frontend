"use client";

import { useState } from "react";
import { useTimer } from "../hooks/useTimer";

type InputType = "default" | "disabled" | "withtime";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  label?: string | null;
  errorMsg?: string | null;
}

export const Input = ({
  type = "default",
  placeholder,
  label,
  errorMsg,
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  const { formattedTime } = useTimer({
    initTime: 180,
  });

  const inputType: Record<InputType, string> = {
    default: "input-daflult",
    disabled: "input-disabled",
    withtime: "input-withtime",
  };

  const currenTypeClass = inputType[type] || inputType.default;

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="label">{label}</label>}
      <div className="relative">
        <input
          className={`
        ${currenTypeClass}
            `}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={type === "disabled"}
        />
        {type === "withtime" && <span className="timer">{formattedTime}</span>}
      </div>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </div>
  );
};
