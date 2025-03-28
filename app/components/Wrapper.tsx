"use client";

import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Sidebar />
      <Layout style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Content style={{ flex: 1, padding: "20px" }}>
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
