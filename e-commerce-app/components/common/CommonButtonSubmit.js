import styles from "../../styles/Common.module.css";

const ButtonSubmit = ({ label, func }) => {
  return (
    <div className={styles.buttonSubmitContainer} onClick={() => func()}>
      {label}
    </div>
  );
};

export default ButtonSubmit;
