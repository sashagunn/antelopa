import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Cloud, Heart, Camera } from 'lucide-react';

export function PhotoReports() {
  const { t } = useTranslation();

  return (
    <Section id="photos" variant="light">
      <SectionHeader 
        titleHtml={t('photos.heading', 'Our <span class="text-highlight">Daily</span> Life')}
        subtitle={t('photos.subheading', 'We capture the most precious moments of your child\'s day so you never miss a milestone.')}
      />

      <div className="max-w-3xl mx-auto mt-16 mt-12 bg-white rounded-[3rem] p-6 shadow-xl border border-primary/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-peach/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-64 relative rounded-[2rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" 
              alt="Children playing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary-dark" />
              <span className="text-sm font-medium text-primary-dark">{t('photos.today', 'Today\'s Album')}</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary-dark mb-4">
              <Heart className="w-6 h-6 fill-primary" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-primary-dark mb-4">
              {t('photos.postTitle', 'Photo Reports & Memories')}
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              {t('photos.postDesc', 'See how much fun we are having! We update our cloud gallery daily with cute, candid shots of our activities, crafts, and outdoor play.')}
            </p>
            
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white rounded-xl hover:bg-primary transition-colors font-medium shadow-md hover:shadow-lg"
            >
              <Cloud className="w-5 h-5" />
              {t('photos.cloudLink', 'Open Cloud Gallery')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
