/* eslint-disable react/prop-types */
import styles from "../styles.module.scss";
const Menu = ({ content }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuText}>{content}</div>
    </div>
  );
};

export default Menu;
