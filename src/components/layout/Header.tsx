import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <img src="/logo.jpg" alt="Antelopa.preschool Logo" className="w-[50px] h-[50px] object-cover rounded-full border border-primary/20 bg-primary/10" />
              <span className="text-xl font-bold tracking-tight text-primary uppercase font-display hidden sm:block">Antelopa</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide">
            <a href="#why-us" className="text-slate-600 hover:text-primary transition-colors">{t('nav.whyUs', 'Why Us')}</a>
            <a href="#programs" className="text-slate-600 hover:text-primary transition-colors">{t('nav.programs', 'Programs')}</a>
            <a href="#team" className="text-slate-600 hover:text-primary transition-colors">{t('nav.team', 'Our Team')}</a>
            
            <div className="flex items-center gap-6 border-l border-slate-200 pl-8">
              <div 
                className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-500 cursor-pointer"
                onClick={toggleLanguage}
              >
                <span className={`hover:text-primary transition-colors ${i18n.language === 'en' ? 'text-primary' : ''}`}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={`hover:text-primary transition-colors ${i18n.language === 'ru' ? 'text-primary' : ''}`}>RU</span>
              </div>
              
              <a href="tel:+19165550123" className="hidden lg:flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (916) 555-0123
              </a>
              <Button size="sm" className="hidden lg:inline-flex">{t('nav.schedule', 'Schedule a Tour')}</Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-muted hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <a href="#why-us" className="block px-3 py-3 rounded-md text-base font-medium text-text-muted hover:text-primary-dark hover:bg-gray-50">{t('nav.whyUs', 'Why Us')}</a>
            <a href="#programs" className="block px-3 py-3 rounded-md text-base font-medium text-text-muted hover:text-primary-dark hover:bg-gray-50">{t('nav.programs', 'Programs')}</a>
            <a href="#team" className="block px-3 py-3 rounded-md text-base font-medium text-text-muted hover:text-primary-dark hover:bg-gray-50">{t('nav.team', 'Our Team')}</a>
            
            <div className="mt-4 pt-4 border-t border-gray-200 px-3 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <a href="tel:+19165550123" className="flex items-center text-primary-dark font-medium">
                  <Phone className="w-5 h-5 mr-3" />
                  (916) 555-0123
                </a>
                <button 
                  onClick={toggleLanguage} 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 active:bg-gray-200 text-sm font-semibold text-text-main"
                >
                  <Globe className="w-4 h-4 text-primary-dark" />
                  {i18n.language === 'ru' ? 'RU' : 'EN'}
                </button>
              </div>
              <Button fullWidth>{t('nav.schedule', 'Schedule a Tour')}</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
