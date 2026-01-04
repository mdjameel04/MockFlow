import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'
import Provider from "./Provider";



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
    
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
