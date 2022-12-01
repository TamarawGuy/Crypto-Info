import React from "react";
import Link from "next/link";
import { Menu } from "antd";
import styles from "../styles/Navbar.module.css";
import { useGetCryptoCoinsQuery } from "../services/cryptoApi";

const Navbar = () => {
  const { data: coinsData, isFetching } = useGetCryptoCoinsQuery(10);
  console.log(coinsData);

  if (isFetching) return "Loading...";

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logoContainerImage}
          src="images/icon.png"
          alt="logo"
        />
      </div>

      <Menu className={styles.menuContainer} mode="horizontal">
        <Menu.Item className={styles.navLink}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item className={styles.navLink}>
          <Link href="/cryptocurrencies">CryptoCurrencies</Link>
        </Menu.Item>
        <Menu.Item className={styles.navLink}>
          <Link href="/news">News</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navbar;
