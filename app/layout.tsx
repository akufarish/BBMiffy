import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./_components/SideBar";
import BottomNavigationBar from "./_components/BottomNavigationBar";
import RightSideBar from "./_components/RightSideBar";
import logo from "@/public/img/logo.svg"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BBMIFFY",
  description: "BBMIFFY",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <Head>
      <link rel="icon" href={logo} sizes="any" />
      </Head>
      <body className="bg-bg">
      <div className="min-h-full">
      <div className="hidden lg:flex lg:w-60 lg:flex-col lg:fixed lg:inset-y-0">
        <SideBar />
      </div>


      <div className="lg:pl-[19rem]  h-full flex flex-col flex-1">
        <main className="flex flex-col">
          <div className="px-2 sm:px-8 pt-4 py-32 h-screen ">
            {children}
          </div>
        </main>
      </div>
      <div className="hidden lg:flex lg:w-full lg:flex-col lg:fixed lg:-bottom-2 p-2 z-30">
        <BottomNavigationBar />
      </div>
    </div>

      </body>
    </html>
  );
}
