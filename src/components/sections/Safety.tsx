
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Smartphone, Lock, Sparkles, AlertTriangle } from 'lucide-react';

export function Safety() {
  const safetyFeatures = [
    {
      icon: Smartphone,
      title: 'Daily Updates via Brightwheel',
      description: 'Get photos, nap times, and meal updates sent directly to your phone throughout the day. Never wonder how they are doing.'
    },
    {
      icon: Lock,
      title: 'Strict Secure Entry',
      description: 'Doors are locked 24/7. Access is only granted to authorized family members via personalized PIN codes and fingerprint verification.'
    },
    {
      icon: Sparkles,
      title: 'Clinical-Grade Sanitization',
      description: 'Toys are sanitized daily, and high-touch surfaces are cleaned frequently to prevent the spread of germs. We maintain a spotless environment.'
    },
    {
      icon: AlertTriangle,
      title: 'Clear Sick Child Policies',
      description: 'We strictly enforce our wellness policy to protect all children. If a child is sick, they stay home. No exceptions, for everyone\'s peace of mind.'
    }
  ];

  return (
    <Section id="safety" variant="white">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Image / App Mockup Side */}
        <div className="lg:w-1/2 w-full relative">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
              alt="Caregiver updating parent via tablet" 
              className="w-full h-auto object-cover"
            />
            {/* Overlay App Notification */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg flex items-center gap-4 animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Just now via Brightwheel</p>
                <p className="text-sm font-semibold text-gray-900">Leo just finished his lunch! 🍎</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2">
          <SectionHeader 
            title="We Treat Their Safety as Our Highest Calling"
            subtitle="You'll know how your child is doing throughout the day with real-time updates, photos, and clear communication protocols."
            centered={false}
          />

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark">
                    <feature.icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark mb-1">{feature.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button size="lg">Learn About Our Safety Protocols</Button>
        </div>

      </div>
    </Section>
  );
}
