'use client'
import { createTheme } from '@mui/material/styles';

const PortfolioTheme = createTheme({
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
      paper: '#FFFFFF', // Crisp white for cards and sections
    },
  },
});

export default PortfolioTheme;