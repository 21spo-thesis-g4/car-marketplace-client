import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "CarNet",
  description: "Sell your car online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
