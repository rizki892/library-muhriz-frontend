"use client";

import { Layout } from "antd";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const { Content } = Layout;

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh", display: "flex", flexDirection: "row" }}>
      {/* Sidebar Fixed */}
      <Sidebar />

      <Layout style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header Fixed */}
        <Header />

        {/* Content Scrollable */}
        <Content style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {children}
        </Content>

        {/* Footer */}
        <Footer />
      </Layout>
    </Layout>
  );
}
