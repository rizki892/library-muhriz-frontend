"use client";

import { Layout } from "antd";

const { Footer } = Layout;

export default function CustomFooter() {
  return (
    <Footer style={{ textAlign: "center", background: "#333333",color:"#fff", padding: "10px 0" }}>
      © {new Date().getFullYear()} Library Muhriz - All Rights Reserved
    </Footer>
  );
}
