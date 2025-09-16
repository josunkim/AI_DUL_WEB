'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }
  resetError = () => this.setState({ hasError: false, error: undefined });

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const Fallback = this.props.fallback;
        return <Fallback error={this.state.error} resetError={this.resetError} />;
      }
      return (
        <Box display='flex' minHeight='100vh' alignItems='center' justifyContent='center' bgcolor='grey.100'>
          <Box textAlign='center'>
            <Typography variant='h4' fontWeight='bold' gutterBottom>
              죄송합니다. 문제가 발생했습니다.
            </Typography>
            <Typography mb={2}>페이지를 새로고침하거나 잠시 후 다시 시도해주세요.</Typography>
            <Button variant='contained' color='primary' onClick={this.resetError}>
              다시 시도
            </Button>
          </Box>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
