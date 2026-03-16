
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-background-light dark:bg-background-dark pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Watercolor Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 watercolor-blob -z-10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-green/50 watercolor-blob -z-10 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Content */}
        <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-cream/80 text-primary text-xs font-bold tracking-wider uppercase border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('hero.badge')}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.2] text-slate-900 mb-8 text-balance">
            {t('hero.titleLine1')} <br className="hidden lg:block"/>
            <span className="text-highlight font-comfortaa">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <Button size="lg" className="shadow-xl transform hover:scale-[1.02]">
              {t('hero.ctaPrimary')}
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary/10 hover:bg-soft-cream/50">
              {t('hero.ctaSecondary')}
            </Button>
          </div>
        </div>

        {/* Image Area - Organic Shapes */}
        <div className="lg:col-span-6 relative">
          <div className="aspect-square bg-soft-green rounded-[3rem] overflow-hidden relative z-10 p-3 sm:p-5 border-8 border-white dark:border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-primary/20 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=800&auto=format&fit=crop" 
              alt="Children engaging in development activities" 
              className="w-full h-full object-cover relative z-10"
            />
              
            {/* Character Badge */}
            <div className="absolute -bottom-6 -right-6 sm:-right-10 bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-primary/5">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-10 h-10 rounded-full bg-soft-cream border-2 border-white flex items-center justify-center text-sm shadow-sm">👨‍👩‍👧</div>
                <div className="w-10 h-10 rounded-full bg-soft-green border-2 border-white flex items-center justify-center text-sm shadow-sm">👨‍👦</div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold whitespace-nowrap">{t('hero.badgeReview')}</p>
                <div className="flex text-amber-400 text-xs mt-1">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
