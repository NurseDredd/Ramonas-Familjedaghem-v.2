import type { Metadata } from "next";
import "../styles/index.css";
import Layout from "../components/Layout/Layout";

export const metadata: Metadata = {
  title: "Ramonas Familjedaghem",
  description: "En trygg och personlig barnomsorg i Masmo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
