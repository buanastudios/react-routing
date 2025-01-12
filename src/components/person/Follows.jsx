import cx from "classnames";

import styles from "./Follows.module.css";

/** @type {import("react").FC<{info: Pick<import("@/src/functions/people-definition").Person, "followers" | "following" | "likes">}>} */
const Follows = ({ info }) => {
  return (
    <div className={styles.follows}>
      <div>
        <p className={cx(styles.digit)}>{info.followers}</p>
        <p>Followers</p>
      </div>
      <div>
        <p className={cx(styles.digit)}>{info.following}</p>
        <p>Following</p>
      </div>
      <div>
        <p className={cx(styles.digit)}>{info.likes}</p>
        <p>Likes</p>
      </div>
    </div>
  );
};

export default Follows;
