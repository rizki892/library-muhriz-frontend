// app/books/page.tsx
"use client";

import { Layout, Typography } from "antd";
import BookList from "@/app/books/bookList";

const { Content } = Layout;
const { Title } = Typography;

export default function BooksPage() {
  return (
    <Layout className="p-6 bg-white">
      <Content>
        <Title level={2}>Daftar Buku</Title>
        <BookList />
      </Content>
    </Layout>
  );
}
