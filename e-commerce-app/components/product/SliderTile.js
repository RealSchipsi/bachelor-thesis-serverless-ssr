import styles from "../../styles/ProductSliderTile.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

const SliderTile = ({ productData, sliderTileType }) => {
  const router = useRouter();

  return (
    <>
      {sliderTileType == "product" ? (
        <div className={styles.sliderTile}>
          <div className={styles.sliderTileMain}>
            <div className={styles.sliderTileMainHeader}>
              <div className={styles.sliderTileMainHeaderTitle}>
                {productData.title}
              </div>
              <div className={styles.sliderTileMainHeaderCategory}>
                {productData.category}
              </div>
            </div>
            <div className={styles.sliderTileMainBody}>
              <Image
                src={productData.image}
                alt="Picture of product"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.sliderTileMainFooter}>
              <div
                className={styles.sliderTileMainFooterMoreInformationProduct}
                onClick={() => {
                  router.push({
                    pathname: "/product/[productId]",
                    query: {
                      productId: productData.articlenumber,
                      productTitle: productData.title,
                      productPrice: productData.price,
                      productCategory: productData.category,
                      productDescription: productData.description,
                      productImage: productData.image,
                      productQuantity: productData.quantity,
                    },
                  });
                }}
              >
                More information
              </div>
              <div className={styles.sliderTileMainFooterPrice}>
                Price: {productData.price}$
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.sliderTile}>
          <div className={styles.sliderTileMain}>
            <div className={styles.sliderTileMainHeader}>
              <div className={styles.sliderTileMainHeaderTitle}>
                {productData.title}
              </div>
            </div>
            <div className={styles.sliderTileMainBody}>
              <Image
                src={productData.image}
                alt="Picture of product"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.sliderTileMainFooter}>
              <div
                className={styles.sliderTileMainFooterMoreInformationCategory}
                onClick={() => {
                  router.push({
                    pathname: "/category/[categoryId]",
                    query: {
                      categoryId: productData.categorynumber,
                      sectionTitle: productData.title,
                    },
                  });
                }}
              >
                See more
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderTile;
