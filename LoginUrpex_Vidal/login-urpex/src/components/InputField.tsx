import React, { forwardRef } from "react";
import { IconType } from "react-icons";

interface InputFieldProps {
  label: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: IconType;
  showToggle?: boolean;
  onToggle?: () => void;
  isPasswordShown?: boolean;
  name?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>((
  {
    label,
    type,
    value = "",
    onChange,
    placeholder,
    icon: Icon,
    showToggle,
    onToggle,
    isPasswordShown,
    name,
  },
  ref
) => {
  const inputType = type === "password" && isPasswordShown ? "text" : type;

  return (
    <div className="mb-2">
      <label className="block mb-1 text-sm text-gray-400">{label}</label>
      <div className={`flex items-center bg-[#2e2f3e] p-3 rounded-xl border border-transparent focus-within:ring-2 focus-within:ring-green-400 transition-all`}>
        <input
          ref={ref}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
          name={name}
        />
        {Icon && showToggle && onToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="text-gray-400"
          >
            <Icon />
          </button>
        )}
        {Icon && !showToggle && <Icon />}
      </div>
    </div>
  );
});

InputField.displayName = "InputField";
