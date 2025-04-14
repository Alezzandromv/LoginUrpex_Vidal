import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  full?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, full = true, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`bg-gradient-to-r cursor-pointer from-green-400 to-teal-400 text-[#282A37] text-xl  py-3 rounded-full font-bold hover:opacity-90 transition ${
        full ? "w-full" : "px-6"
      } ${className}`}
    >
      {text}
    </button>
  );
};
