import type { Metadata } from "next";
import { Roboto_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/static/footer";
import Header from "@/components/static/header";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MTG Card Search",
  description: "Created by DiamonDoughnut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Header />
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
