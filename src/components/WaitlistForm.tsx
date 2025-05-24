import React, { useState } from 'react';
import { CheckIcon, Loader2 } from 'lucide-react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Button from './Button';

const WaitlistForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    currentTool: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In a real implementation, you would send this data to your backend
      console.log('Form submitted:', formState);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white" id="waitlist-form">
      <Container>
        {isSubmitted ? (
          <div className="max-w-2xl mx-auto text-center py-10">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">¡Gracias por unirte!</h2>
            <p className="text-xl mb-6">
              Te hemos añadido a nuestra lista de espera. Te contactaremos pronto con más información 
              sobre cómo puedes ser uno de los primeros en probar nuestro Agente Inteligente.
            </p>
            <p className="text-indigo-300">
              Mientras tanto, ¿qué tal si compartes esta oportunidad con otros que podrían beneficiarse?
            </p>
          </div>
        ) : (
          <>
            <SectionHeading emoji="📩" centered>
              Únete a la lista de espera
            </SectionHeading>
            
            <p className="text-xl text-center max-w-3xl mx-auto mb-10 text-indigo-100">
              Estamos lanzando acceso anticipado a empresas que quieran escalar su prospección sin esfuerzo humano. 
              ¿Te interesa ser uno de los primeros?
            </p>
            
            <form 
              className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-indigo-300/30 focus:border-indigo-300 text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-indigo-300/30 focus:border-indigo-300 text-white"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    value={formState.position}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-indigo-300/30 focus:border-indigo-300 text-white"
                    placeholder="Tu cargo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/10 border border-indigo-300/30 focus:border-indigo-300 text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="currentTool" className="block text-sm font-medium mb-2">
                  ¿Qué herramienta usas hoy para prospectar? (opcional)
                </label>
                <input
                  type="text"
                  id="currentTool"
                  name="currentTool"
                  value={formState.currentTool}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 border border-indigo-300/30 focus:border-indigo-300 text-white"
                  placeholder="Ej. LinkedIn Sales Navigator, Outreach, etc."
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4"
                  primary
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Procesando...
                    </span>
                  ) : (
                    '✅ Quiero automatizar mi prospección'
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </Container>
    </section>
  );
};

export default WaitlistForm;