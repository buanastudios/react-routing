import Button from "./Button";
import styles from "./Card.module.css";

/**
 * @type {import("react").FC<{
 *  person: import("@/src/functions/people-definition").Person
 * }>}
 */
const Card = ({ person }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>
        <p className={styles["card-content-header"]}>{person.name}</p>
        <div className={styles["card-content-details"]}>
          <p className={styles["card-content-username"]}>@{person.username}</p>
          <p className={styles["card-content-bio"]}>{person.bio}</p>
        </div>
      </div>

      <div className={styles["card-action"]}>
        <Button onClick={() => {}}>See details</Button>
      </div>
    </div>
  );
};

export default Card;
