import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Roadmap from '@/components/sections/Roadmap';

import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Features />
      <Roadmap />
      
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
