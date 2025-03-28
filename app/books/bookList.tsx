// components/BookList.tsx
"use client";

import { useEffect, useState } from "react";
import { Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  author: string;
  published_year: number;
  available: boolean;
}

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/books") // Ganti dengan endpoint backend
      .then((res) => {
        setBooks(res.data);
      })
      .catch(() => {
        message.error("Gagal mengambil data buku");
      })
      .finally(() => setLoading(false));
  }, []);

  const columns: ColumnsType<Book> = [
    {
      title: "Judul Buku",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Penulis",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Tahun Terbit",
      dataIndex: "published_year",
      key: "published_year",
    },
    {
      title: "Status",
      dataIndex: "available",
      key: "available",
      render: (available: boolean) =>
        available ? "Tersedia" : "Sedang Dipinjam",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={books}
      rowKey="id"
      loading={loading}
      bordered
    />
  );
}
