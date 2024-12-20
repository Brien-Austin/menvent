import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";


import { ReduxProvider } from "./components/providers/redux-provider";



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
  
        
      </body>
    </html>
  );
}
