import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  isSelected?: boolean;
  isDimmed?: boolean;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
