"use client";

import { Layout, Menu } from "antd";
import { BookOutlined, HomeOutlined, ReadOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider theme="dark" collapsible>
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="books" icon={<BookOutlined />}>
          <Link href="/books">Daftar Buku</Link>
        </Menu.Item>
        <Menu.Item key="loans" icon={<ReadOutlined />}>
          <Link href="/loans">Peminjaman</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
