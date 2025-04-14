import React from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div className="mb-2">
    <label className="block mb-1 text-sm text-gray-400">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-[#2e2f3e] text-white p-3 rounded-xl border border-transparent focus:border-green-400 transition"
    >
      <option value="" disabled>
        Selecciona una opción
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
