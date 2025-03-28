"use client";

import { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { BookOutlined, HomeOutlined, ReadOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const { Sider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Deteksi ukuran layar
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCollapsed(mobile); // Collapse otomatis jika mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Menu Sidebar
  const menuItems = (
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
  );

  return (
    <>
      {isMobile ? (
        <>
          {/* Tombol Menu di Header */}
          <Button
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
            style={{
              position: "fixed",
              top: 10,
              left: 10,
              zIndex: 1001,
              background: "#001529",
              color: "#fff",
            }}
          />
          {/* Sidebar dalam bentuk Drawer */}
          <Drawer
            title="Menu"
            placement="left"
            closable
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            {menuItems}
          </Drawer>
        </>
      ) : (
        <Sider
          theme="dark"
          width={200}
          style={{
            background: "#001529",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            paddingTop: 20,
            display: collapsed ? "none" : "block", // Hilangkan sidebar saat collapse
          }}
        >
          {/* Logo Aplikasi */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Image
              src="/favicon.ico" // Ganti dengan path logo aplikasi
              alt="App Logo"
              width={100}
              height={100}
              style={{ transition: "all 0.3s ease" }}
            />
          </div>
          {menuItems}
        </Sider>
      )}
    </>
  );
}
