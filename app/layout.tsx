import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.github.io/thai-idol-site"),
  title: "Thai Idol Navi | タイアイドル情報ナビ",
  description: "タイ地下アイドルのイベント・グループ・Lab記事を探せるナビポータル。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Thai Idol Navi",
    description: "タイ地下アイドルの実用情報ポータル",
    url: "https://example.github.io/thai-idol-site/",
    siteName: "Thai Idol Navi",
    images: [{ url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80" }],
    locale: "ja_JP",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body className="py-5 bg-[#fffafd]">{children}</body></html>;
}
