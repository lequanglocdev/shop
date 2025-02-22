import BoxIcon from "./BoxIcon/BoxIcon";
import styles from "./styles.module.scss";
import { dataBoxIcon, dataMenu } from "./constant";

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.headerIcon}>
        {dataBoxIcon.map((item) => {
          return <BoxIcon key={item.id} type={item.type} href={item.href} />;
        })}
      </div>
      <div>
        {dataMenu.map((item) => {
          return (
            <div key={item}>
              <h4>{item.content}</h4>
            </div>
          );
        })}
      </div>

      <div></div>
    </div>
  );
};

export default Header;
