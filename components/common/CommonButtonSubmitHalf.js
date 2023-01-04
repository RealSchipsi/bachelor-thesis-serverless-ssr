import styles from "../../styles/Common.module.css";

const ButtonSubmitHalf = ({ label, func }) => {
  return (
    <div className={styles.buttonSubmitHalfContainer} onClick={() => func()}>
      {label}
    </div>
  );
};

export default ButtonSubmitHalf;
