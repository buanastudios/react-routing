import cx from "classnames";

import styles from "./Gap.module.css";

/**
 * @type {import("react").FC<{
 *  children: import("react").ReactNode;
 *  gap: "none" | "xs" | "sm" | "md" | "lg" | "xl";
 *  rowGap: "none" | "xs" | "sm" | "md" | "lg" | "xl";
 *  colGap: "none" | "xs" | "sm" | "md" | "lg" | "xl";
 *  direction: "column" | "row";
 *  align: "start" | "center" | "end";
 * } & JSX.IntrinsicElements["div"]>}
 */
const Gap = ({
  children,
  gap = "none",
  rowGap = "none",
  colGap = "none",
  direction = "row",
  align = "start",
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        styles.default,
        {
          [styles["row-gap-" + rowGap]]: rowGap != "none",
          [styles["col-gap-" + colGap]]: colGap != "none",
          [styles[gap]]: gap != "none",
          [styles[direction]]: direction,
          [styles[direction.concat("-", align)]]: align,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Gap;
