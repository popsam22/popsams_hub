import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Popsam's Hub",
  description: "Popsam's Creative Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black font-poppins">{children}</body>
    </html>
  );
}
