
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

      <div className="grid md:grid-cols-3 gap-8 mt-16 items-start">
        {programs.map((program, index) => (
          <div 
            key={index}
            className={`flex flex-col overflow-hidden bg-background-alt relative rounded-[4rem] transition-transform duration-500 hover:-translate-y-2 border border-black/5 ${program.featured ? 'shadow-xl' : 'shadow-md'}`}
          >
            <div className="p-8 pb-0 z-10">
              <h3 className="text-3xl font-medium text-primary-dark mb-2">{program.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {program.description}
              </p>
            </div>
            
            <div className="relative h-64 md:h-80 w-full mt-auto">
              {/* Organic mask shape for the image */}
              <div className="absolute inset-0 bg-accent-peach/20"></div>
              <img 
                src={program.image} 
                alt={`${program.title} classroom`} 
                className="w-full h-full object-cover rounded-b-[4rem]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-[4rem]"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-medium uppercase tracking-widest mb-3">
                    {program.age}
                  </div>
                  <p className="text-white font-medium drop-shadow-md">
                    {program.outcome}
                  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
