
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.t1Name'),
      location: t('testimonials.t1Loc'),
      quote: t('testimonials.t1Quote'),
      program: t('testimonials.t1Prog')
    },
    {
      name: t('testimonials.t2Name'),
      location: t('testimonials.t2Loc'),
      quote: t('testimonials.t2Quote'),
      program: t('testimonials.t2Prog')
    },
    {
      name: t('testimonials.t3Name'),
      location: t('testimonials.t3Loc'),
      quote: t('testimonials.t3Quote'),
      program: t('testimonials.t3Prog')
    }
  ];

  return (
    <Section id="testimonials" variant="white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          titleHtml={t('testimonials.heading')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-soft-cream/30 dark:bg-slate-800 rounded-[3rem] p-10 shadow-card border border-slate-100 dark:border-slate-700 flex flex-col relative transform hover:-translate-y-2 transition-transform duration-500">
              
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-8 text-9xl text-accent opacity-10 font-display leading-none">"</div>
              
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed mb-10 flex-grow relative z-10 text-lg font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="relative z-10 border-t border-slate-200 dark:border-slate-600 pt-6 mt-auto">
                <p className="font-display font-bold text-slate-900 text-xl mb-1">{testimonial.name}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                   <span className="font-bold uppercase tracking-wider">{testimonial.location}</span>
                </div>
                <p className="text-xs text-primary font-bold">{testimonial.program}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
