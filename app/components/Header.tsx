"use client";

import { Layout } from "antd";

const { Header } = Layout;

export default function CustomHeader() {
  return (
    <Header style={{ background: "#001529", color: "#fff", textAlign: "center", fontSize: "18px" }}>
      Library Management System
    </Header>
  );
}
