/* eslint-disable react/prop-types */
import Layout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from './styles.module.scss'
const PopularProduct = ({data}) => {
  console.log(">>data",data)
  return (
    <Layout>
      <div className={styles.container}>
        {data.map((item) => (
          <ProductItem
            key={item.id}
            src={item.images[0]}
            prevSrc={item.images[1]}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PopularProduct;
