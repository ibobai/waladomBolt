import React from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layouts/MainLayout';

const MyRolePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('myRole.title')}
        </h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900">{t('myRole.userInfo')}</h2>
              <p className="mt-4 text-gray-600">
                This page displays member role information and responsibilities within the Waladom community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyRolePage;