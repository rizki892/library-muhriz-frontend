import Wrapper from "./components/Wrapper";

export const metadata = {
  title: "Library Management System",
  description: "Sistem Manajemen Perpustakaan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
