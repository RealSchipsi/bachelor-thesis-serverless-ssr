import styles from "../../styles/Header.module.css";

import Link from "next/link";

import {
  RiShoppingBasket2Line,
  RiUserLine,
  RiSearchLine,
} from "react-icons/ri";

const Header = () => {
  let token;

  // check if user is signed in with token
  try {
    token = localStorage.getItem("token");
  } catch {}

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLogo}>
          <Link className={styles.headerLinkElement} href="/">
            <h4>SportX</h4>
          </Link>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerLink}>
          <Link className={styles.headerLinkElement} href="/search">
            <RiSearchLine />
          </Link>
        </div>
        <div className={styles.headerLink}>
          {token ? (
            <Link className={styles.headerLinkElement} href="/profile">
              <RiUserLine />
            </Link>
          ) : (
            <Link className={styles.headerLinkElement} href="/signin">
              <RiUserLine />
            </Link>
          )}
        </div>
        <div className={styles.headerLink}>
          <Link className={styles.headerLinkElement} href="/cart">
            <RiShoppingBasket2Line />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
