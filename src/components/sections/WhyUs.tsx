import { Section } from '../ui/Section';
import { Shield, Sparkles, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WhyUs() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: t('whyUs.val1Title'),
      description: t('whyUs.val1Desc'),
      color: 'text-accent-terracotta bg-accent-peach/30'
    },
    {
      icon: Sparkles,
      title: t('whyUs.val2Title'),
      description: t('whyUs.val2Desc'),
      color: 'text-accent-terracotta bg-accent-peach/30'
    },
    {
      icon: Heart,
      title: t('whyUs.val3Title'),
      description: t('whyUs.val3Desc'),
      color: 'text-accent-terracotta bg-accent-peach/30'
    }
  ];

  return (
    <Section id="philosophy" variant="light" className="relative overflow-hidden pt-24 pb-32">
      {/* Watercolor Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-cream rounded-full blur-[100px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="w-16 h-2 bg-accent mb-8 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1]" dangerouslySetInnerHTML={{ __html: t('whyUs.heading') }} />
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
                {t('whyUs.subtitle')}
              </p>
            </div>

            <div className="space-y-8 bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-700">
              {values.map((value, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className={`p-4 rounded-[2rem] flex-shrink-0 bg-soft-green text-primary shadow-sm group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 tracking-widest text-sm uppercase mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract Card/Shape Component */}
          <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-soft-cream rounded-[4rem] shadow-2xl border-8 border-white dark:border-slate-800 flex flex-col justify-center text-center p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10 space-y-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/50">
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-primary" dangerouslySetInnerHTML={{ __html: t('whyUs.boxTitle') }} />
                    <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-medium italic">
                      "{t('whyUs.boxDesc')}"
                    </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
