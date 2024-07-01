import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputSmallProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

export function InputSmall({ type, placeholder, ...props }: InputSmallProps) {
  return (
    <input
      className={styles.inputSmall}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}
