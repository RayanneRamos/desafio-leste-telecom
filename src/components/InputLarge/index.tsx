import { InputHTMLAttributes } from "react";
import "./styles.module.scss";

interface InputLargeProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

export function InputLarge({ type, placeholder, ...props }: InputLargeProps) {
  return <input type={type} placeholder={placeholder} {...props} />;
}
