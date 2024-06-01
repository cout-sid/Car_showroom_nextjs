import {Navbar,Footer} from '@/components';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Showroom",
  description: "Explore Showroom from the Comfort of your Homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
