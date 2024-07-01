import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "confirm" | "cancel";
  title: string;
}

export function ButtonLarge({ variant, title, ...props }: ButtonProps) {
  function getButtonClass() {
    switch (variant) {
      case "confirm":
        return styles.buttonConfirm;
      case "cancel":
        return styles.buttonCancel;
      default:
        return "";
    }
  }

  return (
    <button className={getButtonClass()} {...props}>
      {title}
    </button>
  );
}
