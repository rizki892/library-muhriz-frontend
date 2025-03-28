"use client";

import { Layout } from "antd";

const { Header } = Layout;

export default function CustomHeader() {
  return (
    <Header
      style={{
        position: "fixed", // Tetap di atas
        top: 0,
        left: 200, // Sesuai dengan lebar Sidebar
        right: 0,
        height: 64,
        zIndex: 1000, // Agar selalu di atas
        backgroundColor: "#001529",
        color: "white",
        padding: "0 20px",
      }}
    >
      <h2>Library Management</h2>
    </Header>
  );
}
