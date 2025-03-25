import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material';

import PortfolioTheme from '@/assets/theme/PortfolioTheme';

const kanit = Kanit({
  weight: ['300', '400', '500', '700'],
  subsets:['latin'],
  display: 'swap',
  variable: '--font-kanit',
})

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
      <body
        className={kanit.variable}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={PortfolioTheme}>
            <CssBaseline/>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
