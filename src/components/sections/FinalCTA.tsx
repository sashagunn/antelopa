
import { Button } from '../ui/Button';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section id="enrollment" className="py-24 bg-accent text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 text-white space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
              {t('cta.heading')}
            </h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-md">
              {t('cta.subtitle')}
            </p>

            <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-[3rem] border border-white/20 shadow-xl mt-12">
              <h3 className="text-xl font-bold font-display tracking-wide mb-6 flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Calendar className="text-white w-5 h-5" />
                </div>
                {t('cta.availTitle')}
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                  <span className="text-white/90 font-medium">{t('cta.avail1')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                  <span className="text-white/90 font-medium">{t('cta.avail2')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                  <span className="text-white/90 font-medium">{t('cta.avail3')}</span>
                </li>
              </ul>
              <div className="flex items-start gap-4 pt-6 border-t border-white/10">
                <div className="p-2 bg-white/20 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-wide">{t('cta.locTitle')}</h4>
                  <p className="text-white/80 text-sm mt-2 leading-relaxed">
                    {t('cta.loc1')}<br/>
                    {t('cta.loc2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scheduling Form Concept */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-[4rem] p-8 sm:p-12 shadow-2xl relative border-8 border-white/20 dark:border-slate-700/50">
            <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 text-center">{t('cta.formTitle')}</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{t('cta.fName')}</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-0 focus:border-primary transition-colors outline-none font-medium" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{t('cta.lName')}</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-0 focus:border-primary transition-colors outline-none font-medium" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{t('cta.program')}</label>
                <select className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-0 focus:border-primary transition-colors outline-none font-medium appearance-none">
                  <option>{t('cta.pOpt1')}</option>
                  <option>{t('cta.pOpt2')}</option>
                  <option>{t('cta.pOpt3')}</option>
                  <option>{t('cta.pOpt4')}</option>
                  <option>{t('cta.pOpt5')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{t('cta.date')}</label>
                <input type="month" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-0 focus:border-primary transition-colors outline-none font-medium text-slate-500" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">{t('cta.email')}</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-0 focus:border-primary transition-colors outline-none font-medium" placeholder="jane@example.com" />
              </div>

              <div className="pt-4">
                 <Button type="button" size="lg" className="w-full h-16 text-lg justify-between group shadow-xl">
                   {t('cta.submit')}
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                     <ArrowRight className="w-5 h-5" />
                   </div>
                 </Button>
              </div>
              <p className="text-xs text-center text-slate-500 font-medium mt-6">
                {t('cta.note')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
