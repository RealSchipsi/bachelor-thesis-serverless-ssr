import styles from "../../styles/Layout.module.css";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
