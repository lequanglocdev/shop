import Header from "@components/Header/Header"
import Banner from "@components/Banner/Banner"
import styles from './styles.module.scss'
import Info from "@components/Info/Info"
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling"
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts"
const Home = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <Banner/>
        <Info/>
        <AdvanceHeadling/>
        <HeadingListProducts/>
    </div>
  )
}

export default Home
