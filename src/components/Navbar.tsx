import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Waladom</span>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">{t('nav.home')}</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">{t('nav.about')}</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">{t('nav.events')}</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">{t('nav.community')}</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">{t('nav.contact')}</a>
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.home')}</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.about')}</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.events')}</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.community')}</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.contact')}</a>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;