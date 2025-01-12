import styles from "./NoData.module.css";

/**
 * @type {import("react").FC<{
 *  children: import("react").ReactNode
 * }>}
 */
const NoData = ({ children }) => {
  return <p className={styles["no-data"]}>{children || "No Data Found."}</p>;
};

export default NoData;
