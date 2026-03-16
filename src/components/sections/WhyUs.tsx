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
    <Section id="philosophy" variant="light" className="relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-peach/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
        
        {/* Left: Text Content */}
        <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          <div className="w-1.5 h-12 bg-accent-terracotta mb-6 mx-auto lg:mx-0 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-medium text-primary-dark mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('whyUs.heading') }} />
          <p className="text-text-muted text-lg leading-relaxed mb-12">
            {t('whyUs.subtitle')}
          </p>

          <div className="space-y-8 text-left">
            {values.map((value, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className={`p-4 rounded-[2rem] flex-shrink-0 ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark tracking-widest text-sm uppercase mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Abstract Card/Shape */}
        <div className="relative w-full h-[600px] flex justify-center items-center">
             <div className="absolute inset-x-8 top-12 bottom-0 bg-white rounded-[6rem] shadow-xl border border-white/50 -z-10"></div>
             
             <div className="text-center px-12 pt-24">
                <h3 className="text-3xl font-medium text-primary-dark mb-4 text-balance" dangerouslySetInnerHTML={{ __html: t('whyUs.boxTitle') }} />
                <p className="text-text-muted text-sm leading-relaxed text-balance">
                  {t('whyUs.boxDesc')}
                </p>
             </div>
        </div>
      </div>
    </Section>
  );
}
