import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"

import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";


import { ReduxProvider } from "./components/providers/redux-provider";
import { ToastProvider } from "./components/providers/toast-providers";



export const metadata: Metadata = {
  title: "Terovent",
  description: "An App for Introverts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased `}>
        <SessionProvider>
          <ToastProvider/>
  
        <ReduxProvider>
 

        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
           <main className=" "> {children}</main>
        
        
        </ThemeProvider>
        </ReduxProvider>
        </SessionProvider>
  
        
      </body>
    </html>
  );
}
