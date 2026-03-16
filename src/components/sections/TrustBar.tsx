
import { ShieldCheck, HeartPulse, Award, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TrustBar() {
  const { t } = useTranslation();

  const trustItems = [
    {
      icon: Shield,
      title: t('trust.licTitle'),
      description: t('trust.licDesc')
    },
    {
      icon: HeartPulse,
      title: t('trust.cprTitle'),
      description: t('trust.cprDesc')
    },
    {
      icon: ShieldCheck,
      title: t('trust.bgTitle'),
      description: t('trust.bgDesc')
    },
    {
      icon: Award,
      title: t('trust.awardTitle'),
      description: t('trust.awardDesc')
    }
  ];

  return (
    <div className="bg-primary-dark text-white py-12 relative z-20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-secondary-300 text-sm opacity-80 max-w-[200px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
