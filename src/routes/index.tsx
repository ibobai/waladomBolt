import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, MyRolePage, IdCardPage } from '../pages';
import LoadingSpinner from '../components/LoadingSpinner';

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-role" element={<MyRolePage />} />
        <Route path="/id-card" element={<IdCardPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;