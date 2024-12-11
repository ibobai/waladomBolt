import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    navigate('/login');
  };

  return (
    <MainLayout>
      <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-waladom-green mb-6">
              Waladom
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              {t('home.subtitle', 'Connecting Sudanese Communities Worldwide')}
            </p>
            <p className="text-lg text-gray-600 mb-12">
              {t('home.description', 'Join our global network of Sudanese communities, share experiences, and stay connected with your roots.')}
            </p>
            <button
              onClick={handleJoinCommunity}
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg text-white bg-waladom-green hover:bg-waladom-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-waladom-green transition-all duration-200 transform hover:scale-105"
            >
              <Users className="w-6 h-6 mr-2" />
              {t('home.joinButton', 'Join Our Community')}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;