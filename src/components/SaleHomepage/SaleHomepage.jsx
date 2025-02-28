import ButtonComponent from "@components/Button/ButtonComponent";
import styles from  "./styles.module.scss"
import useTranslateXImage from "../../hook/useTranslateXImage";

const SaleHomepage = () => {
  const { translateXPosition } = useTranslateXImage();
  return (
    <div className={styles.container}>
      <div
        className={styles.boxImage}
        style={{
           transform: `translateX(${translateXPosition}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          className={styles.img}
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
          alt=""
        />
      </div>
      <div>
        <h2 className={styles.title}>Sale Of The Year</h2>
        <p className={styles.des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>

        <div className={styles.boxBtn}>
          <ButtonComponent content={"Read more"} isPriamry={false} />
        </div>
      </div>
      <div
        className={styles.boxImage}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          className={styles.img}
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SaleHomepage
