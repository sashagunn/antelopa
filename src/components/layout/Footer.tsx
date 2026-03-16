
import { Heart, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-4">
              <div className="bg-primary/20 p-2 rounded-full text-primary-dark group-hover:bg-primary/30 transition-colors">
                <Heart className="w-5 h-5 fill-primary" />
              </div>
              <span className="font-serif font-semibold text-xl text-primary-dark">
                {t('footer.brandName')}
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-dark mb-4">{t('footer.col1Title')}</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="#programs" className="hover:text-primary transition-colors">{t('footer.col1Link1')}</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">{t('footer.col1Link2')}</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">{t('footer.col1Link3')}</a></li>
              <li><a href="#enrollment" className="hover:text-primary transition-colors">{t('footer.col1Link4')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-dark mb-4">{t('footer.col2Title')}</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="#why-us" className="hover:text-primary transition-colors">{t('footer.col2Link1')}</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">{t('footer.col2Link2')}</a></li>
              <li><a href="#safety" className="hover:text-primary transition-colors">{t('footer.col2Link3')}</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">{t('footer.col2Link4')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-dark mb-4">{t('footer.col3Title')}</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>1234 J Street, Sacramento, CA</li>
              <li><a href="tel:+19165550123" className="hover:text-primary transition-colors">(916) 555-0123</a></li>
              <li><a href="mailto:hello@antelopa.preschool" className="hover:text-primary transition-colors">hello@antelopa.preschool</a></li>
              <li>Lic# 343621813</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-4 text-xs text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
