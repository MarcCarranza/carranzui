import React, { useState } from "react";
import "./Button.css";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  text = "Placeholder",
  isSelected = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`button ${isSelected ? "selected" : ""}`}
    >
      {children ? children : text ? <span>{text}</span> : <span>Button</span>}
    </button>
  );
};

export default Button;
