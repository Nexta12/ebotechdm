import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ebotech Digital Media | The Voice of Truth & Digital Innovation",
  description:
    "Ebotech Digital Media is a premier independent newspaper providing breaking national news, technology intelligence, investigative reports, and the 2026 Youth Skill Acquisition Scholarship.",
  keywords: [
    "Ebotech Digital Media",
    "Nigerian Newspaper",
    "African Tech News",
    "Digital Skills Scholarship",
    "Skill Acquisition Program",
    "Investigative Journalism",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-[#fcfbf7] text-[#111111] antialiased min-h-screen flex flex-col justify-between">
        <NextTopLoader
          color="#058c9a"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #058c9a,0 0 5px #058c9a"
        />
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
