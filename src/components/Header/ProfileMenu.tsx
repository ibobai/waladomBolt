import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Settings, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';

const ProfileMenu: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <User className="w-6 h-6 text-gray-700" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
            <div className="py-1">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Settings className="w-4 h-4 mr-2" />
                {t('nav.settings')}
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="w-4 h-4 mr-2" />
                {t('nav.logout')}
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileMenu;