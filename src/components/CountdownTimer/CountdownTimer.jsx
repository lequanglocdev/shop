/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from './styles.module.scss'
const CountdownTimer = ({ targetDate }) => {
  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { Days: 0, Hours: 0, Mins: 0, Secs: 0 };
    }

    return {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Mins: Math.floor((difference / 1000 / 60) % 60),
      Secs: Math.floor((difference / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (number) => String(number).padStart(2, "0");

  return (
    <div className={styles.container}>
      {Object.entries(timeLeft).map(([key, value]) => (
        <span key={key} className={styles.box}>
          {formatNumber(value)} <span className={styles.title}>{key}</span>{" "}
        </span>
      ))}
    </div>
  );
};

export default CountdownTimer;
