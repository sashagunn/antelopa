
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
      <SectionHeader 
        titleHtml={t('testimonials.heading')}
        subtitle={t('testimonials.subtitle')}
      />

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-background rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col relative">
            
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 text-9xl text-accent-gold opacity-10 font-serif leading-none">"</div>
            
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
              ))}
            </div>
            
            <p className="text-text-main italic leading-relaxed mb-8 flex-grow relative z-10 text-lg">
              "{testimonial.quote}"
            </p>
            
            <div className="relative z-10">
              <p className="font-serif font-bold text-primary-dark text-lg">{testimonial.name}</p>
              <p className="text-sm font-medium text-text-muted">{testimonial.location}</p>
              <p className="text-xs text-primary mt-1">{testimonial.program}</p>
            </div>
            
          </div>
        ))}
      </div>
    </Section>
  );
}
