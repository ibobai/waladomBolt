import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './routes';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <AppRoutes />
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;