"use client";
import React from 'react';
import Card from '../card';
import styles from '../../styles/aboutForm.module.css'; 

const AboutForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Bienvenido a mi página</h1>
        <p>
          Soy un apasionado de la tecnología y el diseño. Aquí te comparto algunas de mis
          pasiones.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card title="Tecnología" description="Me encanta aprender sobre nuevas tecnologías." />
        <Card title="Diseño" description="Disfruto crear el login y el register de una forma atractiva y funcional." />
        <Card title="Música" description="La música es una parte esencial de mi vida; como dicen, sin música la vida sería un error." />
      </div>
      <div className={styles.gustos}>
        <h1>Mis Gustos</h1>
        <p>
          Aquí te cuento un poco más sobre mis gustos. 
          Disfruto de la música, una buena canción dependiendo del momento, desde ayudarte a meditar hasta el gimnasio. Además, me gusta explorar nuevas tecnologías.
        </p>
        <h2>Tecnología</h2>
        <p>
          Me gusta seguir las tendencias en tecnología, desde inteligencia artificial hasta desarrollo web.
        </p>
        <h2>Diseño</h2>
        <p>
          El nivel de pasión que tengo hacia el diseño de alta calidad al crear un login y un registro es increíble.
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

export default AboutForm;
