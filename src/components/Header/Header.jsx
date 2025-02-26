import BoxIcon from "./BoxIcon/BoxIcon";
import styles from "./styles.module.scss";
import { dataBoxIcon, dataMenu } from "./constant";
import Logo from "@icons/images/Logo-retina.png";
import { TfiReload } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import Menu from "./Menu/Menu";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            {dataBoxIcon.map((item) => {
              return (
                <BoxIcon key={item?.id} type={item.type} href={item.href} />
              );
            })}
          </div>
          <div className={styles.headerNav}>
            {dataMenu.slice(0, 3).map((item) => {
              return (
                <div key={item}>
                  <Menu content={item.content} />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "153px",
              height: "53px",
            }}
          />
        </div>

        <div className={styles.headerRight}>
          <div className={styles.headerRightText}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return (
                <div key={item}>
                  <Menu content={item.content} />
                </div>
              );
            })}
          </div>
          <div className={styles.headerRightIcon}>
            <TfiReload
              style={{
                fontSize: "20px",
              }}
            />
            <BsHeart
              style={{
                fontSize: "20px",
              }}
            />
            <div>
              <PiShoppingCart
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
