import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "BBMIFFY",
  description: "BBMIFFY",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-black to-gray-700 h-screen">
        <div className="grid justify-center items-center min-h-screen">
          <div className="bg-bg p-12 px-32 rounded-md shadow-md">{children}</div>
        </div>
      </body>
    </html>
  );
}
