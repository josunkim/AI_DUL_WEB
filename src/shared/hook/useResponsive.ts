'use client';
import { useTheme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

export interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  screenWidth: number;
  screenHeight: number;
}

export const useResponsive = (): ResponsiveState => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  const isLandscape = screenWidth > screenHeight;
  const isPortrait = screenHeight >= screenWidth;

  return useMemo(() => ({ isMobile, isTablet, isDesktop, isLandscape, isPortrait, screenWidth, screenHeight }), [isMobile, isTablet, isDesktop, isLandscape, isPortrait, screenWidth, screenHeight]);
};
