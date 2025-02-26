/* eslint-disable react/prop-types */
import styles from "../styles.module.scss";

const InfoCard = ({ content, description, src }) => {
  return (
    <div className={styles.containerInfoCard}>
      <img width={40} height={41} src={src} alt="icon" />
      <div className={styles.containerContent}>
        <div className={styles.title}>{content}</div>
        <div className={styles.des}>{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
