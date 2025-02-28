/* eslint-disable react/prop-types */
import Layout from "@components/Layout/Layout";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import styles from './styles.module.scss'
import ProductItem from "@components/ProductItem/ProductItem";
const HeadingListProducts = ({data}) => {

  return (
    <Layout>
      <div className={styles.container}>
        <CountdownBanner />
        <div className={styles.containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[2]}
              prevSrc={item.images[3]}
              name={item.name}
              price={item.price}
              details={item}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HeadingListProducts;
