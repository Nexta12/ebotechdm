import type { Metadata } from "next";
import "./globals.css";
import WarningMessage from "@/components/WarningMessage";

export const metadata: Metadata = {
  title: "Website Temporarily Unreachable",
  description:
    "This Website is temporarily unreacheable, Please contact the server administrators or the hosting company of you are the owner of the website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "#ffffff" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          backgroundColor: "#ffffff",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-white text-gray-900 antialiased min-h-screen"
      >
        <WarningMessage />
      </body>
    </html>
  );
}
