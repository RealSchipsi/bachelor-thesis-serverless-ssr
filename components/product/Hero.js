import styles from "../../styles/ProductHero.module.css";

import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroLeftLink}>
          <div
            onClick={() => {
              router.push({
                pathname: "/category/[categoryId]",
                query: {
                  categoryId: "cat001",
                  sectionTitle: "Shirts",
                },
              });
            }}
            className={styles.heroLink}
          >
            Shirts
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroRightTop}>
          <div className={styles.heroRightTopLink}>
            <div
              onClick={() => {
                router.push({
                  pathname: "/category/[categoryId]",
                  query: {
                    categoryId: "cat002",
                    sectionTitle: "Jackets",
                  },
                });
              }}
              className={styles.heroLink}
            >
              Jackets
            </div>
          </div>
        </div>
        <div className={styles.heroRightBottom}>
          <div className={styles.heroRightBottomLink}>
            <div
              onClick={() => {
                router.push({
                  pathname: "/category/[categoryId]",
                  query: {
                    categoryId: "cat003",
                    sectionTitle: "Shorts",
                  },
                });
              }}
              className={styles.heroLink}
            >
              Shorts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
