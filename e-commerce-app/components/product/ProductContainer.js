import styles from "../../styles/ProductContainer.module.css";

import { useState } from "react";

import Image from "next/image";

import DividerSmall from "../common/DividerSmall";
import ButtonSubmit from "../common/CommonButtonSubmit";

const ProductContainer = ({
  productNumber,
  productTitle,
  productCategory,
  productDescription,
  productImage,
  productQuantity,
  productPrice,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const plusQuantity = () => {
    if (quantity < Number(productQuantity)) {
      setQuantity(quantity + 1);
    }
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // add item to cart with local storage
  const addToCart = () => {
    let cart = [];

    try {
      cart = localStorage.getItem("cart");

      if (cart != null) {
        cart = JSON.parse(cart);
      } else {
        cart = [];
      }
    } catch {}

    let price = productPrice;

    if (Number(quantity) > 1) {
      price = Number(price) * Number(quantity);
    }

    let newItem = {
      articlenumber: productNumber,
      title: productTitle,
      quantity: quantity,
      size: size,
      price: price,
    };

    cart.push(newItem);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productContainerTile}>
        <div className={styles.productContainerTileLeft}>
          <Image
            src={productImage}
            alt="Picture of product"
            width={450}
            height={550}
          />
        </div>
        <div className={styles.productContainerTileRight}>
          <div className={styles.productHeader}>
            <div className={styles.productTitle}>{productTitle}</div>
            <div className={styles.productCategory}>{productCategory}</div>
          </div>
          <div className={styles.productBody}>
            <div className={styles.productDescription}>
              {productDescription}
            </div>
            <DividerSmall />
            <div className={styles.productOptions}>
              <div className={styles.productSize}>
                <div
                  className={
                    size == "S"
                      ? styles.selectedProductSizeOption
                      : styles.productSizeOption
                  }
                  onClick={() => setSize("S")}
                >
                  S
                </div>
                <div
                  className={
                    size == "M"
                      ? styles.selectedProductSizeOption
                      : styles.productSizeOption
                  }
                  onClick={() => setSize("M")}
                >
                  M
                </div>
                <div
                  className={
                    size == "L"
                      ? styles.selectedProductSizeOption
                      : styles.productSizeOption
                  }
                  onClick={() => setSize("L")}
                >
                  L
                </div>
                <div
                  className={
                    size == "XL"
                      ? styles.selectedProductSizeOption
                      : styles.productSizeOption
                  }
                  onClick={() => setSize("XL")}
                >
                  XL
                </div>
              </div>
              <DividerSmall />
              <div className={styles.productRow}>
                <div className={styles.productQuantity}>
                  <div
                    className={styles.productQuantitySide}
                    onClick={minusQuantity}
                  >
                    -
                  </div>
                  <div className={styles.productQuantityMiddle}>{quantity}</div>
                  <div
                    className={styles.productQuantitySide}
                    onClick={plusQuantity}
                  >
                    +
                  </div>
                </div>
                <div className={styles.productPrice}>
                  Price: {productPrice}$
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productFooter}>
            <ButtonSubmit label={"Add to cart"} func={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
