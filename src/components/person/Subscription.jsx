import styles from "./Subscription.module.css";

/** @type {import("react").FC<{info: Pick<import("@/src/functions/people-definition").Person, "credit_card" | "balance">}>} */
const Subscription = ({ info }) => {
  return (
    <div>
      <h2 className={styles.title}>Subscription</h2>

      <div className={styles["subscription-detail"]}>
        <h3 className={styles.subtitle}>Credit Card</h3>
        <div>
          <p>Number: {info.credit_card.number}</p>
          <p>CCV: {info.credit_card.CCV}</p>
        </div>
        <div>
          <p>Issuer: {info.credit_card.issuer}</p>
        </div>
        <p>Balance: {info.balance}</p>
      </div>
    </div>
  );
};

export default Subscription;
