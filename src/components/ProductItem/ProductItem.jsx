/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import reLoadIcon from "@icons/reloadIcon.svg";
import heartIcon from "@icons/heart.svg";
import cartIcon from "@icons/cartIcon.svg";
// import cls from "classnames";

const ProductItem = ({
  src,
  prevSrc,
  name,
  price,
  // details,
 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img src={src} alt="product" />
        <img src={prevSrc} alt="product" className={styles.showImage} />

        <div className={styles.showFncWhenHover}>
          <div className={styles.boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
          <div className={styles.boxIcon}>
            <img src={heartIcon} alt="" />
          </div>
          <div className={styles.boxIcon}>
            <img src={reLoadIcon} alt="" />
          </div>
          <div className={styles.boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
        </div>
      </div>
      <div
       
      >
        ${price}
      </div>
      <div>
        {name}
      </div>
    </div>
  );
};

export default ProductItem;
