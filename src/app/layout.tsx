import { JSX } from "react";
import type { Metadata } from "next";

import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline, Divider, ThemeProvider } from '@mui/material';

import PortfolioTheme from '@/assets/theme/PortfolioTheme';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rachel Ayaka Lin Portfolio",
  description: "Personal Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="en">
      <body style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: 0, 
        padding: 0,
        width: '100%',
        overflowX: 'hidden',
      }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={PortfolioTheme}>
            <CssBaseline/>
            <Header/>
            <main style={{ 
              width: '100%', 
              padding: 0, 
              margin: 0, 
              overflowX: 'hidden' 
            }}>
              {children}
            </main>
            <Divider/>
            <Footer/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
