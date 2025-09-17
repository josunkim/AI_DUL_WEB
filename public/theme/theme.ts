import { createTheme } from '@mui/material/styles';

export const createAppTheme = () => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#1976d2', light: '#63a4ff', dark: '#004ba0', contrastText: '#fff' },
      secondary: { main: '#b45309', light: '#fbbf24', dark: '#78350f', contrastText: '#fff' },
    },
    typography: {
      fontFamily: 'Geist, Arial, sans-serif',
    },
  });
};
