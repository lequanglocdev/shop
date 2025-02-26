import styles from './styles.module.scss'
import ButtonComponent from '@components/Button/ButtonComponent';

const Banner = () => {
  return (
    <div className={styles.containerBanner}>
      <div className={styles.contentBanner}>
        <h1 className={styles.title}>XStore Marseille04 Demo</h1>
        <p className={styles.des}>
          Make yours celebrations even more special this years with beautiful.
        </p>
          <ButtonComponent content={'Go to shop'}/>
      </div>
    </div>
  );
}

export default Banner
