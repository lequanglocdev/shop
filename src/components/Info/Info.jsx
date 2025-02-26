import Layout from "@components/Layout/Layout";
import { dataInfo } from "./constants";
import InfoCard from "./InfoCard/InfoCard";
import styles from "./styles.module.scss";
const Info = () => {
  return (
    <Layout>
      <div className={styles.container}>
        {dataInfo.map((item) => {
          return (
            <div key={item}>
              <InfoCard
                content={item.title}
                description={item.description}
                src={item.src}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Info;
