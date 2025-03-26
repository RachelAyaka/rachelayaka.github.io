import type { Metadata } from "next";

import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material';

import PortfolioTheme from '@/assets/theme/PortfolioTheme';

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
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
