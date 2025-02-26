import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from './styles.module.scss'
import ButtonComponent from "@components/Button/ButtonComponent";

const CountdownBanner = () => {
  const targetDate = "2025-12-31T00:00:00";
  return (
    <div className={styles.container}>
      <div className={styles.containerTimmer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={styles.title}>The classics make a comeback</p>
      <div className={styles.boxBtn}>
        <ButtonComponent content={'Buy now'} />
      </div>
    </div>
  );
};

export default CountdownBanner;
