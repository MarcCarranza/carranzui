// Dependencies
import React from "react";

// Styles
import "./Button.css";

// Types
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  text = "Placeholder",
  isSelected = false,
  isDimmed = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`button ${isSelected ? "selected" : ""} ${isDimmed ? "dimmed" : ""}`}
    >
      {children ? children : <span>{text}</span>}
    </button>
  );
};

export default Button;
