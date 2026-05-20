import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.github.io/thai-idol-site"),
  title: "タイ地下アイドルナビ",
  description: "タイ・バンコクの地下アイドルライブ、グループ情報、現場ガイド、日本式アイドル文化をまとめた情報ナビサイト。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "タイ地下アイドルナビ",
    description: "タイ・バンコクの地下アイドルライブ、グループ情報、現場ガイド、日本式アイドル文化をまとめた情報ナビサイト。",
    url: "https://example.github.io/thai-idol-site/",
    siteName: "タイ地下アイドルナビ",
    images: [{ url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80" }],
    locale: "ja_JP",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ja"><body className="py-5 bg-[#fffafd]">{children}</body></html>; }
