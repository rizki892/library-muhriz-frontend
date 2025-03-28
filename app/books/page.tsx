"use client";

import { Layout, Typography } from "antd";
import BookList from "@/app/books/bookList";

const { Content } = Layout;
const { Title } = Typography;

export default function BooksPage() {
  return (
    <Content style={{ padding: "20px", marginLeft: 200, marginTop: "64px", minHeight: "calc(100vh - 64px)", background: "#fff" }}>
      <Title level={2}>Daftar Buku</Title>
      <BookList />
    </Content>
  );
}
