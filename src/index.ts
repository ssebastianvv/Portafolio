import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import SectionsLayout from './app/(sections)/layout'; // Verifica que la ruta sea correcta
import './i18n'; // Importa la configuración de i18n

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Usa createRoot para React 18+
  root.render(
    <React.StrictMode>
      <SectionsLayout>
        {/* Aquí puedes agregar contenido por defecto si es necesario */}
        <h1>Bienvenido a mi aplicación</h1>
        <p>Este es el contenido principal de la aplicación.</p>
      </SectionsLayout>
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento raíz');
}
