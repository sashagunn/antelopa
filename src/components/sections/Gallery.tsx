
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

export function Gallery() {
  const { t } = useTranslation();

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
      alt: t('gallery.img1'),
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop',
      alt: t('gallery.img2'),
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
      alt: t('gallery.img3'),
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1584697964190-7cb83eec19b4?q=80&w=800&auto=format&fit=crop',
      alt: t('gallery.img4'),
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
      alt: t('gallery.img5'),
      span: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <Section id="gallery" variant="light">
      <SectionHeader 
        titleHtml={t('gallery.heading')}
        subtitle={t('gallery.subtitle')}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out ${img.span}`}
            >
              <div className="absolute inset-0 bg-accent-peach/10 z-0"></div>
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 ease-in-out group-hover:scale-105 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
                <p className="font-medium text-lg tracking-wide">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
