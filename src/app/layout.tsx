import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "奥沢トレーディングス",
  description:
    "奥沢トレーディングスはweb制作事業、webアプリ事業に特化した会社です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {typeof metadata.title === "string"
            ? metadata.title
            : "奥沢トレーディングス"}
        </title>
        <meta
          name="description"
          content={
            typeof metadata.description === "string"
              ? metadata.description
              : "奥沢トレーディングスはweb制作事業、webアプリ事業に特化した会社です。"
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "奥沢トレーディングス",
              url: "", // ここに会社のURLを記入
              logo: "", // ここにロゴのURLを記入
              contactPoint: {
                "@type": "ContactPoint",
                areaServed: "JP",
                availableLanguage: ["Japanese"],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
