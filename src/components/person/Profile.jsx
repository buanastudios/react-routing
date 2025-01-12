import Gap from "../element/Gap";
import styles from "./Profile.module.css";

/** @type {import("react").FC<{info: Pick<import("@/src/functions/people-definition").Person, "avatar" | "name" | "email" | "username" | "phoneNumber ">}>} */
const Profile = ({ info }) => {
  return (
    <div className={styles.profile}>
      <img className={styles.avatar} src={info.avatar} />
      <Gap direction="column" rowGap="md">
        <p className={styles.name}>{info.name}</p>
        <p className={styles["text-overflow"]}>username: @{info.username}</p>
        <p className={styles["text-overflow"]}>email: {info.email}</p>
        <p className={styles["text-overflow"]}>phone: {info.phoneNumber}</p>
      </Gap>
    </div>
  );
};

export default Profile;
