import type { Metadata } from "next";

import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material';

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AppRouterCacheProvider>
          <ThemeProvider theme={PortfolioTheme}>
            <CssBaseline/>
            <Header/>
            {children}
            <Footer/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
