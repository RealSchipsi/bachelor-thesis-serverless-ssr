import styles from "../../styles/ProductTile.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

const ProductTile = ({ productData }) => {
  const router = useRouter();

  return (
    <div className={styles.productTile}>
      <div className={styles.productTileHeader}>
        <div className={styles.productTileHeaderTitle}>{productData.title}</div>
        <div className={styles.productTileHeaderCategory}>
          {productData.category}
        </div>
      </div>
      <div className={styles.productTileBody}>
        <Image
          src={productData.image}
          alt="Picture of product"
          width={400}
          height={330}
        />
      </div>
      <div className={styles.productTileFooter}>
        <div
          className={styles.productTileFooterMoreInformation}
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
        <div className={styles.productTileFooterPrice}>
          Price: {productData.price}$
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
