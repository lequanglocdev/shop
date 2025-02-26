import Layout from "@components/Layout/Layout";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import styles from './styles.module.scss'
const HeadingListProducts = () => {
  return (
    <Layout>
      <div className={styles.container} >
          <CountdownBanner/>
          <div>
      
          </div>
      </div>
    </Layout>
  );
};

export default HeadingListProducts;
