import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Komuga Ventures | Your Business, Backed by a Partner You Can Trust",
  description:
    "Komuga Limited Ventures offers strategic business guidance, agent banking, mobile money, internet services, and data solutions in Bukoto, Kampala, Uganda.",
  verification: {
    other: {
      "facebook-domain-verification": ["aj32z97rxfkdbu9aogafj7f40aeikx"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
