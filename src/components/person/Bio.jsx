import styles from "./Bio.module.css";

const Bio = ({ bio }) => {
  return (
    <div className={styles.bio}>
      <h2>Biography</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Bio;
