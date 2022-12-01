import Navbar from "../components/Navbar";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { Typography, Image, Layout } from "antd";

import styles from "../styles/Home.module.css";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Provider store={store}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Navbar />
        </Header>
        <Content className={styles.main}>
          <div className={styles.leftMain}>
            <Typography.Title className={styles.heading}>
              Discover the latest information about cryptocurrencies as well as
              the latest news
            </Typography.Title>
          </div>
          <div className={styles.rightMain}>
            <Image className={styles.rightMainImage} src="/images/ai.png" />
          </div>
        </Content>
        <Footer className={styles.footer}>
          <Typography.Paragraph className={styles.footerHeading}>
            Crypto Info / &copy; All rights reserved
          </Typography.Paragraph>
        </Footer>
      </Layout>
    </Provider>
  );
};

export default Home;
