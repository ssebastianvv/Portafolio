// aca puedo hacer un div con 3 cosas principales que haya hecho ademas de un pequeño resumen de mi trabajo como soy mis gustos etc 
"use client"
import React from 'react';
import Card from '../card';


const aboutForm: React.FC = () => {

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenido a mi página</h1>
      <p>
        Soy un apasionado de la tecnología y el diseño. Aquí te comparto algunas de mis
        pasiones.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card title="Tecnología" description="Me encanta aprender sobre nuevas tecnologías." />
        <Card title="Diseño" description="Disfruto crear el login y el register de una forma atractiva y funcional." />
        <Card title="Música" description="La música es una parte esencial de mi vida como dicen sin musica la vida seria un error." />
      </div>
      <div>
      <h1>Mis Gustos</h1>
      <p>
        Aquí te cuento un poco más sobre mis gustos. 
        Disfruto de la música, una buena cancion dependiendo del momento desde ayudarte a meditar como en el gym ademas, me gusta explorar nuevas tecnologías. 
      </p>
      <h2>Tecnología</h2>
      <p>
        Me gusta seguir las tendencias en tecnología, desde inteligencia artificial hasta desarrollo web.
      </p>
      <h2>Diseño</h2>
      <p>
        el nivel de pasion que tengo hacia el diseño de alta calidad en el momento de crear un login y un registro es increible.
      </p>
      <h2>Música</h2>
      <p>
        La música me inspira en todo lo que hago. Escucho una variedad de géneros y siempre estoy
        buscando nuevos artistas.
      </p>
    </div>
    </div>
  );
};

export default aboutForm;
