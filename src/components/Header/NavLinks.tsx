import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wallet, UserCircle2, CreditCard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile }) => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/events', label: t('nav.events') },
    { href: '/community', label: t('nav.community') },
    { href: '/contact', label: t('nav.contact') },
    { 
      href: '/my-role', 
      label: t('nav.myRole'),
      icon: <UserCircle2 className="w-4 h-4" />
    },
    { 
      href: '/donate', 
      label: t('nav.donate'),
      icon: <Wallet className="w-4 h-4" />,
      highlight: true 
    },
    {
      href: '/id-card',
      label: t('nav.idCard'),
      icon: <CreditCard className="w-4 h-4" />
    }
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            "text-gray-800 hover:text-waladom-green transition-colors flex items-center gap-2",
            mobile ? "block px-3 py-2 w-full" : "",
            link.highlight && "bg-waladom-green text-white px-4 py-2 rounded-full hover:bg-waladom-green-dark hover:text-white",
            location.pathname === link.href && "text-waladom-green"
          )}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;