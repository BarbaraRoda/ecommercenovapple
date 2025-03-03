import React, { ButtonHTMLAttributes } from "react";
import cs from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      className={cs(
        "px-4 py-2 rounded transition",
        {
          "bg-colorPrimario text-texto2 hover:bg-colorTerciario hover:text-texto": variant === "primary",
          "bg-colorTerciario text-texto2 hover:bg-colorPrimario hover:text-texto2": variant === "secondary",
          "opacity-50 cursor-not-allowed": props.disabled
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
