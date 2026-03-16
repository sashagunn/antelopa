
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Smartphone, Lock, Sparkles, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Safety() {
  const { t } = useTranslation();

  const safetyFeatures = [
    {
      icon: Smartphone,
      title: t('safety.f1Title'),
      description: t('safety.f1Desc')
    },
    {
      icon: Lock,
      title: t('safety.f2Title'),
      description: t('safety.f2Desc')
    },
    {
      icon: Sparkles,
      title: t('safety.f3Title'),
      description: t('safety.f3Desc')
    },
    {
      icon: AlertTriangle,
      title: t('safety.f4Title'),
      description: t('safety.f4Desc')
    }
  ];

  return (
    <Section id="safety" variant="white">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Image / App Mockup Side */}
        <div className="lg:w-1/2 w-full relative">
          <div className="absolute inset-0 bg-soft-green/50 rounded-[4rem] transform rotate-3 scale-105 -z-10"></div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
            <div className="absolute inset-0 bg-accent/20 z-0 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800&auto=format&fit=crop" 
              alt="Clean and safe classroom environment" 
              className="w-full h-full object-cover relative z-10"
            />
            {/* Overlay App Notification */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur rounded-2xl p-4 shadow-xl flex items-center gap-4 animate-pulse border border-primary/5" style={{ animationDuration: '4s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>

              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t('safety.appTag')}</p>
                <p className="text-sm font-bold text-slate-900">{t('safety.appMsg')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2">
          <SectionHeader 
            titleHtml={t('safety.heading')}
            subtitle={t('safety.subtitle')}
            centered={false}
          />

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button size="lg" className="shadow-xl transform hover:scale-[1.02]">{t('safety.cta')}</Button>
        </div>

      </div>
    </Section>
  );
}
