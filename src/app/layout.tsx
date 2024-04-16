import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the page
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={inter.className}>  {/* Apply the Inter font class to the body */}
        {children}   {/* Render the children components */}
      </body>
    </html>
  );
}
