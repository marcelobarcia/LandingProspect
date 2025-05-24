import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-900 text-gray-400">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} AI Prospecting Agent. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm hover:text-white transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;