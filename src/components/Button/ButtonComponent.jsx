/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
const ButtonComponent = ({ content }) => {
  return (
    <div className={styles.containerBtn}>
      <button className={styles.btn}>{content}</button>
    </div>
  );
};

export default ButtonComponent;
