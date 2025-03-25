'use client'
import { createTheme } from '@mui/material/styles';

const PortfolioTheme = createTheme({
  typography: {
    fontFamily: '"Kanit", sans-serif', // Apply Kanit globally across your app
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: "#f0f0f0", // Set global background color
    },
    text: {
      primary: "#333333", // Set global text color
    },
  },
});

export default PortfolioTheme;