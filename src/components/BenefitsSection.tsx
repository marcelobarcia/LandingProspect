import React from 'react';
import { Clock, DollarSign, Sparkles, TrendingUp, Zap } from 'lucide-react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import FeatureItem from './FeatureItem';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="benefits">
      <Container>
        <SectionHeading emoji="💥" centered>
          Lo que ganas con nuestro Agente Inteligente
        </SectionHeading>
        
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">⏱️ Ahorro de tiempo</h3>
            <p className="text-gray-700">Ahorras hasta 9 minutos por lead, multiplicando la eficiencia de tu equipo.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">💸 Optimización de costos</h3>
            <p className="text-gray-700">Aumentas tu pipeline sin aumentar tu equipo, maximizando tu ROI.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">✨ Personalización a escala</h3>
            <p className="text-gray-700">Personalización real, sin esfuerzo manual, conectando mejor con cada prospecto.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">📈 Resultados mejorados</h3>
            <p className="text-gray-700">Más leads, más reuniones, más cierres, llevando tu pipeline al siguiente nivel.</p>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="ml-4 text-xl font-semibold">🔥 Tecnología lista para escalar</h3>
          </div>
          <p>Nuestra solución crece contigo, adaptándose a tus necesidades cambiantes y preparada para el futuro.</p>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;