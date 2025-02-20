import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./components/navbar";
import ClientConfig from "./components/clientConfig";

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
         <ClientConfig />
        {children}
      </body>
    </html>
  );
}
