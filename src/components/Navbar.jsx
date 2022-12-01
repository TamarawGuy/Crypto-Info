import React from "react";
import Link from "next/link";
import { Menu } from "antd";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/cryptocurrencies">CryptoCurrencies</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/">Home</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
