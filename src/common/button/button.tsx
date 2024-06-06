import { Props } from "./types";
import styles from "./button.module.css";

export const Button = ({ children, onClick, className, isShadow }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 w-full rounded-[45px] text-lg font-medium leading-[21.6px] tracking-[0.3799999952316284px] text-center text-[#FCFCFC] ${
        styles.button_bg
      } ${isShadow ? styles.shadow : ""} ${className}`}
    >
      {children}
    </button>
  );
};
