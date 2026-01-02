import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
const dmSans = DM_Sans({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "UIUX Mockup generator App",
  description: "Generated High quality Free UIUX Mobile and web Mock designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
