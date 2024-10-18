import React from 'react';
import styles from '../styles/projectcard.module.css'; 



interface ProjectCardProps {
  title: string;
  imageUrl: string;
  technologies: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, technologies, description }) => {
  return (
    <div className={styles['project-card']}> {/* Usa la sintaxis correcta para acceder a las clases */}
      <img src={imageUrl} alt={title} className={styles['project-image']} />
      <h3 className={styles['project-title']}>{title}</h3>
      <p className={styles['project-description']}>{description}</p>
      <div className={styles['project-technologies']}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles['technology-badge']}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
