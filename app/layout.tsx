import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThaIdol.info — プレビュー",
  description: "Thai Idol Media MVP"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="py-5">{children}</body>
    </html>
  );
}
