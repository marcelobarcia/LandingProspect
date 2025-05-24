import React from 'react';
import { RocketIcon } from 'lucide-react';
import Button from './Button';
import Container from './Container';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-400 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <RocketIcon className="w-5 h-5 mr-2 text-indigo-300" />
            <span className="font-medium">Reinventando la prospección B2B</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            🚀 Tu próximo Vendedor no será humano… <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              y trabajará 24/7
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Automatiza tu prospección con inteligencia artificial. Detectamos leads, los contactamos, 
            los calificamos y los entregamos listos a tu equipo… sin intervención humana.
          </p>
          
          <div className="flex flex-col items-center">
            <Button onClick={scrollToForm} className="text-lg px-8 py-4 flex flex-col items-center mb-3">
              <span>👉 Quiero estar en la lista de espera</span>
              <span className="text-xs font-semibold opacity-80 leading-tight">sólo 100 cupos</span>
            </Button>
            <div className="w-full max-w-md mx-auto mt-2">
              <div className="w-full bg-indigo-100 rounded-full h-3.5 mb-2 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-3.5 rounded-full 
                            relative overflow-hidden"
                  style={{ width: '60%' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent w-1/3"></div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-indigo-50">
                <p className="text-base font-bold text-center text-indigo-900 tracking-wide">
                  <span className="text-lg text-emerald-600 drop-shadow-sm">60%</span> de cupos completados • 
                  <span className="text-amber-600">¡Apúrate!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.56,0,101.11,12.79,151.67,25.59,202.22,38.39,252.78,51.18,303.33,64Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;