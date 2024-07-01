import { SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface SelectLargeProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function SelectLarge({ ...props }: SelectLargeProps) {
  return <select className={styles.selectLarge} {...props}></select>;
}
