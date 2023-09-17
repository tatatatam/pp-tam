import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Footer from "./containers/footer";

const kanit = Kanit({
  weight: "300",
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "TATAMOJ",
  description: "Empower Your life with Infinite Possibilities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kanit.className} style={{ margin: "0px" }}>
        {children}
      </body>
      <Footer />
    </html>
  );
}
