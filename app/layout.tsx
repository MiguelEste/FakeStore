import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fake Store",
  description: "The best fake store for fake products",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="p-5 bg-teal-800 flex-none text-white">
          <Link href="/" className="text-4xl font-bold">
            <h1>FakeStore</h1>
          </Link>
          <p className="text-xs">The best fake store for fake products!</p>
        </header>
        <main className="flex-1 p-5">{children}</main>
        <footer className="p-5 bg-teal-800 flex-none text-white">
          ©FakeStore 2026
        </footer>
      </body>
    </html>
  );
}
