// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const createAppTheme = () => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#ff4081' },
    },
    typography: {
      fontFamily: 'Geist, Arial, sans-serif',
    },
  });
};
