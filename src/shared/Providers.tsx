'use client';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { createAppTheme } from '../../public/theme/theme';
import ErrorBoundary from '@/shared/components/ErrorBoundary';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const theme = createAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <CssBaseline />
        {children}
      </ErrorBoundary>
    </ThemeProvider>
  );
};
