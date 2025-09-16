'use client';
import React from 'react';
import { Container } from '@mui/material';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const ResponsiveContainer = ({ children, maxWidth = 'lg' }: ResponsiveContainerProps) => {
  return <Container maxWidth={maxWidth}>{children}</Container>;
};

export default ResponsiveContainer;
