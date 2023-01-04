import styles from "../../styles/CartContainer.module.css";

import { useState, useEffect } from "react";

import CartItemRow from "./CartItemRow";
import ButtonSubmit from "../common/CommonButtonSubmit";

const CartContainer = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("");

  // set cart and get items from local storage
  const displayCart = () => {
    let rows = [];
    let currentCart;

    try {
      currentCart = localStorage.getItem("cart");

      if (currentCart != null) {
        currentCart = JSON.parse(currentCart);
      } else {
        currentCart = [];
      }

      let price = 0;

      currentCart.forEach((data, index) => {
        rows.push(<CartItemRow cartData={data} />);

        price = Number(price) + Number(data.price);
      });

      setTotal(price + "$");
    } catch {}

    setCart(rows);
  };

  useEffect(() => {
    displayCart();
  }, []);

  return (
    <div className={styles.cartContainer}>
      {cart.length > 0 ? (
        <div className={styles.cart}>
          <div className={styles.cartBody}>{cart}</div>
          <div className={styles.cartFooter}>
            <div className={styles.cartFooterPrice}>Total: {total}</div>
            <ButtonSubmit label={"Continue to check out"} />
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>Your cart is empty</div>
      )}
    </div>
  );
};

export default CartContainer;
