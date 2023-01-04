import styles from "../../styles/Common.module.css";

const Input = ({ label, placeholder, value, setvalue, msg, type }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputLabel}>{label}</div>
      <div className={styles.inputTile}>
        <input
          className={styles.input}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={(text) => setvalue(text.target.value)}
        />
      </div>
      <div className={styles.inputMsg}>{msg}</div>
    </div>
  );
};

export default Input;
