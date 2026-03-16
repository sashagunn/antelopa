
import { Button } from '../ui/Button';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section id="enrollment" className="py-24 bg-accent-terracotta text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              {t('cta.heading')}
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-[3rem] border border-white/20 mb-10">
              <h3 className="text-xl font-serif font-medium mb-6 flex items-center gap-2">
                <Calendar className="text-white" />
                {t('cta.availTitle')}
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-peach" />
                  <span className="text-white/90">{t('cta.avail1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-peach" />
                  <span className="text-white/90">{t('cta.avail2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-peach" />
                  <span className="text-white/90">{t('cta.avail3')}</span>
                </li>
              </ul>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">{t('cta.locTitle')}</h4>
                  <p className="text-white/80 text-sm mt-1">
                    {t('cta.loc1')}<br/>
                    {t('cta.loc2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scheduling Form Concept */}
          <div className="bg-background-alt text-text-main rounded-[3rem] p-8 sm:p-12 shadow-2xl relative">
            <h3 className="text-3xl font-serif font-medium text-primary-dark mb-8 text-center">{t('cta.formTitle')}</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text-muted">{t('cta.fName')}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" placeholder="Jane" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text-muted">{t('cta.lName')}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-text-muted">{t('cta.program')}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none bg-white">
                  <option>{t('cta.pOpt1')}</option>
                  <option>{t('cta.pOpt2')}</option>
                  <option>{t('cta.pOpt3')}</option>
                  <option>{t('cta.pOpt4')}</option>
                  <option>{t('cta.pOpt5')}</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-text-muted">{t('cta.date')}</label>
                <input type="month" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none text-text-muted" />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-text-muted">{t('cta.email')}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" placeholder="jane@example.com" />
              </div>

              <Button type="button" size="lg" className="w-full mt-4 justify-between group">
                {t('cta.submit')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-center text-text-muted mt-4">
                {t('cta.note')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
