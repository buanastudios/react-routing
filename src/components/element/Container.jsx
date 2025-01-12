import styles from "./Container.module.css";

/**
 * @type {import("react").FC<{ children: import("react").ReactNode }>}
 */
const Container = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
