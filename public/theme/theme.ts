import { createTheme } from '@mui/material/styles';
import { COLORS, DARK_COLORS } from './colors';

export const createAppTheme = (mode: 'light' | 'dark') => {
  const paletteColors = mode === 'light' ? COLORS : DARK_COLORS;
  return createTheme({
    palette: {
      mode,
      primary: { main: paletteColors.Black[200] },
      secondary: { main: '#b45309', light: '#fbbf24', dark: '#78350f', contrastText: '#fff' },
      background: mode === 'light' ? { default: '#ffffff' } : { default: '#121212' },
      text: mode === 'light' ? { primary: '#000000', secondary: '#555555' } : { primary: '#ffffff', secondary: '#aaaaaa' },
      Black: paletteColors.Black,
      Grayscale: paletteColors.Grayscale,
      PrimaryBlue: paletteColors.PrimaryBlue,
      White: paletteColors.White,
      SecondaryYellow: paletteColors.SecondaryYellow,
      SecondaryRed: paletteColors.SecondaryRed,
      Line: paletteColors.Line,
      Background: paletteColors.Background,
      NeutralGray: paletteColors.NeutralGray,
    },
    typography: {
      fontFamily: 'Pretendard Variable, sans-serif',
    },
  });
};
