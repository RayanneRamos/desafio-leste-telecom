import { SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface SelectMediumProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function SelectMedium({ ...props }: SelectMediumProps) {
  return <select className={styles.selectMedium} {...props}></select>;
}
