import Header from "@components/Header/Header"
import Banner from "@components/Banner/Banner"
import styles from './styles.module.scss'
import Info from "@components/Info/Info"
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling"
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts"
import { useEffect } from "react"

import PopularProduct from "@components/PopularProduct/PopularProduct"
import { useState } from "react"
import getProduct from "@/apis/productServices"
import SaleHomepage from "@components/SaleHomepage/SaleHomepage"
import Footer from "@components/Footer/Footer"
const Home = () => {
 const [listProducts, setListProducts] = useState([]);

useEffect(() => {
  const query = {
    sortType: 0,
    page: 1,
    limit: 12,
  };

  getProduct(query)
    .then((res) => {
      console.log("API response:", res); 
      console.log("res.contents:", res.contents); 
      setListProducts(res.contents);
    })
    .catch((error) => console.error("Error fetching products:", error));
}, []);



  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProducts data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, listProducts.length )} />
      <SaleHomepage/>
      <Footer/>
    </div>
  );
}

export default Home
