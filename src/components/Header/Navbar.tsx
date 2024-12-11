import React from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '../LanguageSelector';
import NavLinks from './NavLinks';
import Logo from '../Logo';
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="relative bg-white">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Logo />
              <span className="text-2xl font-bold text-waladom-green">Waladom</span>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
            <NavLinks />
            <SearchBar />
            <LanguageSelector />
            <ProfileMenu />
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-waladom-green focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-waladom-green focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 pt-2 pb-3 space-y-3">
            <NavLinks mobile />
            <div className="px-3 py-2">
              <SearchBar />
            </div>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
            <div className="px-3 py-2">
              <ProfileMenu />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;