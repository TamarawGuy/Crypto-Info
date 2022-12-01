import React from "react";
import Link from "next/link";
import { Menu, Image } from "antd";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logoContainerImage}
          src="images/icon.png"
          alt="logo"
        />
      </div>
      <div className={styles.menuContainer}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/cryptocurrencies">CryptoCurrencies</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
