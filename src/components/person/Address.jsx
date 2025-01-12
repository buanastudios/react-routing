import styles from "./Address.module.css";

/** @type {import("react").FC<{address: import("@/src/functions/people-definition").Person["address"]}>} */
const Address = ({ address }) => {
  return (
    <div className={styles.address}>
      <h2 className={styles.title}>Address</h2>

      <div className={styles["address-detail"]}>
        <div>
          <p>Street: </p>
          <p>{address.street}</p>
        </div>
        <div>
          <p>City: </p>
          <p>{address.city}</p>
        </div>
        <div>
          <p>County: </p>
          <p>{address.county}</p>
        </div>
        <div>
          <p>Country: </p>
          <p>{address.country}</p>
        </div>
        <div>
          <p>Lattitude: </p>
          <p>{address.lat}</p>
        </div>
        <div>
          <p>Longtitude: </p>
          <p>{address.long}</p>
        </div>
        <div>
          <p>State: </p>
          <p>{address.state}</p>
        </div>
        <div>
          <p>Zip Code: </p>
          <p>{address.zipCode}</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
