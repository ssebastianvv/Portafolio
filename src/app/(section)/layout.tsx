
import React from 'react';
import { HeaderComponent } from '../components/header'; // Ajusta la ruta según tu estructura
import { Footer } from '../components/footer'; // Ajusta la ruta según tu estructura

interface SectionsLayoutProps {
  children: React.ReactNode; // Asegúrate de definir correctamente el tipo de children
}

const SectionsLayout: React.FC<SectionsLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      <main className="flex-grow container mx-auto p-6">
        {children} {/* Aquí se renderizan las páginas dentro de las secciones */}
      </main>
      <Footer />
    </div>
  );
};

export default SectionsLayout;
