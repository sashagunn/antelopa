
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-background pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent-peach/50 text-accent-terracotta text-xs font-bold tracking-widest uppercase mb-8 border border-accent-peach">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-terracotta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-terracotta"></span>
              </span>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary-dark font-medium leading-tight mb-8 text-balance">
              {t('hero.titleLine1')} <br className="hidden lg:block"/>
              <span className="text-highlight">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-muted mb-10 text-balance leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                {t('hero.ctaPrimary')}
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Image Area - Organic Shapes */}
          <div className="relative mt-12 lg:mt-0 lg:ml-auto max-w-lg mx-auto">
            {/* Background Blob/Shape */}
            <div className="absolute inset-0 bg-accent-peach/30 rounded-[8rem] transform rotate-3 scale-105 -z-10"></div>
            
            <div className="relative z-10 bg-white rounded-[4rem] p-6 shadow-xl border border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                alt="Happy children learning" 
                className="rounded-[3rem] object-cover aspect-square w-full"
              />
              
              {/* Floating Review Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-12 bg-white rounded-full px-6 py-4 shadow-xl border border-gray-50 flex items-center gap-4 z-20">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-accent-peach border-2 border-white flex items-center justify-center text-xs">👨‍👩‍👧</div>
                  <div className="w-8 h-8 rounded-full bg-primary-light border-2 border-white flex items-center justify-center text-xs">👨‍👦</div>
                </div>
                <div>
                  <p className="font-bold text-primary-dark text-sm">{t('hero.badgeReview')}</p>
                  <div className="flex gap-0.5 text-accent-terracotta text-xs">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
