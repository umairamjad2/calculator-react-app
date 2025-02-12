import styles from "./Display.module.css";

const Display = ({ DisplayChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={DisplayChange}
      placeholder="0"
      readOnly
    />
  );
};

export default Display;
