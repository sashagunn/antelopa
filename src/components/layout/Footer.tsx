import { Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background-dark text-white/70 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          <div className="md:col-span-1 space-y-8">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                {t('footer.brandName', 'Antelopa')}
              </span>
            </a>
            <p className="max-w-sm leading-relaxed text-lg italic text-slate-400">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t('footer.col1Title')}</h4>
            <ul className="space-y-4">
              <li><a href="#programs" className="hover:text-white transition-colors">{t('footer.col1Link1')}</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">{t('footer.col1Link2')}</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">{t('footer.col1Link3')}</a></li>
              <li><a href="#enrollment" className="hover:text-white transition-colors">{t('footer.col1Link4')}</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t('footer.col2Title')}</h4>
            <ul className="space-y-4">
              <li><a href="#why-us" className="hover:text-white transition-colors">{t('footer.col2Link1')}</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">{t('footer.col2Link2')}</a></li>
              <li><a href="#safety" className="hover:text-white transition-colors">{t('footer.col2Link3')}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t('footer.col2Link4')}</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t('footer.col3Title')}</h4>
            <ul className="space-y-4">
              <li>1234 J Street, Sacramento, CA</li>
              <li><a href="tel:+19165550123" className="hover:text-white transition-colors">(916) 555-0123</a></li>
              <li><a href="mailto:hello@antelopa.preschool" className="hover:text-white transition-colors">hello@antelopa.preschool</a></li>
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
