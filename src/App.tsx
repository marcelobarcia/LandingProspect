import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import BenefitsSection from './components/BenefitsSection';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  // Update the title when component mounts
  useEffect(() => {
    document.title = 'AI Prospector | Tu SDR Automatizado 24/7';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <PainPointsSection />
        <BenefitsSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;