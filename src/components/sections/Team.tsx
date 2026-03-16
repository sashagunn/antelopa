
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { GraduationCap, Heart, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Team() {
  const { t } = useTranslation();

  return (
    <Section id="team" variant="light">
      <SectionHeader 
        titleHtml={t('team.heading')}
        subtitle={t('team.subtitle')}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Director Profile (Larger) */}
        <div className="lg:col-span-4 md:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 items-center mb-8">
          <div className="w-48 h-48 lg:w-64 lg:h-64 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
              alt="Sarah Jenkins, Center Director" 
              className="w-full h-full object-cover rounded-full shadow-md border-4 border-primary-light"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-2">{t('team.dirRole')}</div>
            <h3 className="text-3xl font-serif text-primary-dark mb-4">{t('team.dirName')}</h3>
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              "{t('team.dirQuote')}"
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> {t('team.dirCred1')}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {t('team.dirCred2')}</div>
              <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-primary" /> {t('team.dirCred3')}</div>
            </div>
          </div>
        </div>

        {/* Teacher Profiles */}
        {[
          {
            name: t('team.t1Name'),
            role: t('team.t1Role'),
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
            philosophy: `"${t('team.t1Quote')}"`,
            creds: t('team.t1Cred')
          },
          {
            name: t('team.t2Name'),
            role: t('team.t2Role'),
            image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop',
            philosophy: `"${t('team.t2Quote')}"`,
            creds: t('team.t2Cred')
          },
          {
            name: t('team.t3Name'),
            role: t('team.t3Role'),
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
            philosophy: `"${t('team.t3Quote')}"`,
            creds: t('team.t3Cred')
          }
        ].map((teacher, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="w-32 h-32 mx-auto mb-6">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-full object-cover rounded-full shadow-sm"
              />
            </div>
            <div className="text-center mb-4">
              <h4 className="text-xl font-serif text-primary-dark">{teacher.name}</h4>
              <p className="text-primary text-sm font-medium">{teacher.role}</p>
            </div>
            <p className="text-text-muted text-sm italic mb-6 flex-grow text-center">
              {teacher.philosophy}
            </p>
            <div className="text-xs text-gray-500 text-center font-medium pt-4 border-t border-gray-100">
              {teacher.creds}
            </div>
          </div>
        ))}
        
        {/* Hiring Box */}
        <div className="bg-primary-light/50 rounded-3xl p-6 border border-primary/20 flex flex-col items-center justify-center text-center">
            <h4 className="text-xl font-serif text-primary-dark mb-2">{t('team.hiringTitle')}</h4>
            <p className="text-text-muted text-sm mb-4">{t('team.hiringDesc')}</p>
            <a href="#" className="text-primary font-medium hover:underline text-sm flex items-center gap-1">
              {t('team.hiringLink')} <Heart className="w-4 h-4 ml-1" />
            </a>
        </div>

      </div>
    </Section>
  );
}
