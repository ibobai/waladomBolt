import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-waladom-green border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;