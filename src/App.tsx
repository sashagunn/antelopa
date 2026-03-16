
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { WhyUs } from './components/sections/WhyUs';
import { Programs } from './components/sections/Programs';
import { Safety } from './components/sections/Safety';
import { Team } from './components/sections/Team';
import { Philosophy } from './components/sections/Philosophy';
import { Gallery } from './components/sections/Gallery';
import { PhotoReports } from './components/sections/PhotoReports';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-primary-light selection:text-primary-dark">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <WhyUs />
        <Programs />
        <Safety />
        <Team />
        <Philosophy />
        <Gallery />
        <PhotoReports />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
