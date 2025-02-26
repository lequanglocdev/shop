/* eslint-disable react/prop-types */
import styles from './styles.module.scss'
const Layout = ({children}) => {
  return (
    <main className={styles.wrapperLayout}>
      <div className={styles.containerLayout}>{children}</div>
    </main>
  );
}

export default Layout
