import styles from "../../styles/CartItemRow.module.css";

const CartItemRow = ({ cartData }) => {
  return (
    <div className={styles.cartItemRow}>
      <div className={styles.cartItemRowLeft}>
        <div className={styles.cartItemRowTitle}>{cartData.title}</div>
        <div className={styles.cartItemRowArticlenumber}>
          Art.: {cartData.articlenumber}
        </div>
      </div>
      <div className={styles.cartItemRowMiddle}>
        <div className={styles.cartItemRowQuantity}>
          Quantity: {cartData.quantity}
        </div>
        <div className={styles.cartItemRowSize}>Size: {cartData.size}</div>
      </div>
      <div className={styles.cartItemRowRight}>
        <div className={styles.cartItemRowPrice}>{cartData.price}$</div>
      </div>
    </div>
  );
};

export default CartItemRow;
