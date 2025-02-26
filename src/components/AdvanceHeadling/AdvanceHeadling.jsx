/* eslint-disable react/no-unescaped-entities */
import styles from "./styles.module.scss";

const AdvanceHeadling = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headline}></div>
      <div className={styles.containerMiddleBox}>
        <p className={styles.des}>don't miss super offers</p>
        <p className={styles.title}>Our best products</p>
      </div>
      <div className={styles.headline}></div>
    </div>
  );
};

export default AdvanceHeadling;
