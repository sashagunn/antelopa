
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Sunrise, BookOpen, Coffee, Sun, Moon, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Philosophy() {
  const { t } = useTranslation();

  const rhythm = [
    { time: '7:30 AM', event: t('philosophy.r1'), icon: Sunrise },
    { time: '9:00 AM', event: t('philosophy.r2'), icon: BookOpen },
    { time: '10:00 AM', event: t('philosophy.r3'), icon: Coffee },
    { time: '10:30 AM', event: t('philosophy.r4'), icon: Sun },
    { time: '12:00 PM', event: t('philosophy.r5'), icon: Coffee },
    { time: '1:00 PM', event: t('philosophy.r6'), icon: Moon },
    { time: '3:00 PM', event: t('philosophy.r7'), icon: Music },
    { time: '5:00 PM', event: t('philosophy.r8'), icon: Sunrise }
  ];

  return (
    <Section id="philosophy" variant="white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <SectionHeader 
            titleHtml={t('philosophy.heading')}
            subtitle={t('philosophy.subtitle')}
            centered={false}
          />
          
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>{t('philosophy.p1')}</p>
            <p>{t('philosophy.p2')}</p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-lg">•</span>
                <span><strong>{t('philosophy.li1')}:</strong> {t('philosophy.li1Desc')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-lg">•</span>
                <span><strong>{t('philosophy.li2')}:</strong> {t('philosophy.li2Desc')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-lg">•</span>
                <span><strong>{t('philosophy.li3')}:</strong> {t('philosophy.li3Desc')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Daily Rhythm Card */}
        <div className="bg-background rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 relative">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl"></div>
          
          <h3 className="text-2xl font-serif text-primary-dark mb-8 text-center relative z-10">{t('philosophy.rhythmTitle')}</h3>
          
          <div className="space-y-6 relative z-10">
            {rhythm.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-grow border-b border-gray-200 border-dashed pb-2">
                  <span className="font-semibold text-primary">{item.time}</span>
                  <span className="ml-4 text-text-main font-medium">{item.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
