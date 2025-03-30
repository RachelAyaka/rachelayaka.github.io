'use client'
import { createTheme } from '@mui/material/styles';

const PortfolioTheme = createTheme({
  cssVariables: true,

  typography: {
    fontFamily: "'Georgia', serif",
  },

  palette: {
    primary: {
      main: '#F3D0D7', 
      dark: '#D49C9F',
    },
    secondary: {
      main: '#FFEFEF',
    },
    background: {
      default: '#FAF5F0',
      // default: '#FFF6EA',
      paper: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#EEF7EE',
    },
    warning: {
      main: '#E7C231',
      light: '#FDF9EB',
    },
    error: {
      main: '#C42E2E',
      light: '#FAEBEB',
    }
  },
});

export default PortfolioTheme;