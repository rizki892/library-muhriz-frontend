"use client";

import { Layout } from "antd";

const { Footer } = Layout;

export default function CustomFooter() {
  return (
    <Footer style={{ textAlign: "center", background: "#f0f2f5", padding: "10px" }}>
      © {new Date().getFullYear()} Library Muhriz - All Rights Reserved
    </Footer>
  );
}
