import cx from "classnames";

import styles from "./Button.module.css";

/**
 * @type {import("react").FC<{
 *  children: import("react").ReactNode
 *  variant: "primary" | "secondary" | "warning" | "danger" | "success"
 * } & JSX.IntrinsicElements["button"]>}
 */
const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={cx(styles.default, {
        [styles.primary]: variant == "primary",
        [styles.secondary]: variant == "secondary",
        [styles.danger]: variant == "danger",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
