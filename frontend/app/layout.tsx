import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "XYZ Website",
  description: "Marketing Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body
        className="min-h-screen w-full ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
