
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

export function Programs() {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('programs.infantTitle'),
      age: t('programs.infantAge'),
      painPoint: 'Worried about leaving your baby?',
      outcome: t('programs.infantOutcome'),
      description: t('programs.infantDesc'),
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=800&auto=format&fit=crop',
      color: 'bg-accent-blue/10 border-accent-blue/20'
    },
    {
      title: t('programs.toddlerTitle'),
      age: t('programs.toddlerAge'),
      painPoint: 'Concerned about socialization and tantrums?',
      outcome: t('programs.toddlerOutcome'),
      description: t('programs.toddlerDesc'),
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop',
      color: 'bg-primary-light border-primary/20',
      featured: true
    },
    {
      title: t('programs.prekTitle'),
      age: t('programs.prekAge'),
      painPoint: 'Will they be ready for kindergarten?',
      outcome: t('programs.prekOutcome'),
      description: t('programs.prekDesc'),
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
      color: 'bg-accent-gold/10 border-accent-gold/20'
    }
  ];

  return (
    <Section id="programs" variant="white">
      <SectionHeader 
        titleHtml={t('programs.heading')}
        subtitle={t('programs.subheading')}
      />

      <div className="grid md:grid-cols-3 gap-10 mt-16 items-start max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <div 
            key={index}
            className={`group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-card transition-transform duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 flex flex-col h-full`}
          >
            <div className="aspect-[4/5] relative overflow-hidden shrink-0">
              <img 
                src={program.image} 
                alt={`${program.title} classroom`} 
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] font-bold uppercase tracking-wider mb-2">
                    {program.age}
                  </div>
                  <h3 className="text-2xl font-bold font-display shadow-sm">{program.title}</h3>
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col items-start text-left bg-soft-cream/30 dark:bg-slate-800/50">
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">{program.outcome}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
