import React from 'react';
import { XIcon, Clock, Search, DollarSign, LineChart } from 'lucide-react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import FeatureItem from './FeatureItem';

const PainPointsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="pain-points">
      <Container>
        <SectionHeading emoji="😫" centered>
          ¿Te suenan familiares estos problemas?
        </SectionHeading>
        
        <div className="max-w-3xl mx-auto mt-10">
          <FeatureItem icon={Search} emoji="❌" bad>
            Tu equipo pierde tiempo buscando leads manualmente
          </FeatureItem>
          
          <FeatureItem icon={Clock} emoji="❌" bad>
            Personalizar mensajes lleva horas y no escala
          </FeatureItem>
          
          <FeatureItem icon={XIcon} emoji="❌" bad>
            Es difícil saber qué prospectos realmente valen la pena
          </FeatureItem>
          
          <FeatureItem icon={DollarSign} emoji="❌" bad>
            Para crecer necesitas contratar más SDRs (caro y lento)
          </FeatureItem>
          
          <FeatureItem icon={LineChart} emoji="❌" bad>
            No tienes visibilidad clara de qué funciona y qué no
          </FeatureItem>
        </div>
        
        {/* Visual element */}
        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <span className="text-5xl md:text-6xl">😫</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PainPointsSection;