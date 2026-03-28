import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: ''
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message || 'An unexpected error occurred.' };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0C10] p-4 text-white">
          <div className="glass-card p-8 max-w-md w-full text-center border-[#d8ff30]/30">
            <h2 className="text-2xl font-display font-bold text-[#d8ff30] mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-6 text-sm">{this.state.errorMessage}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-[#d8ff30] text-black font-bold rounded-xl hover:bg-[#e6ff66] transition-all"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

export default ErrorBoundary;
