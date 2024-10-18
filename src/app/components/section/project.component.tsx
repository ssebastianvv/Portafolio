"use client"

import React, { useState } from "react";
import ProjectCard from "../card.project";
import { FaReact, FaHtml5, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

const Projects = () => {
  const projects = [
    {
      title: 'Poke API',
      imageUrl: 'https://example.com/image1.jpg',
      technologies: ['React', 'TypeScript', 'CSS'],
      description: 'Mostramos las tarjetas de los Pokémon.',
    },
    {
      title: 'Lista de Tareas',
      imageUrl: 'https://example.com/image2.jpg',
      technologies: ['React', 'TypeScript', 'CSS'],
      description: 'Se crea una lista de tareas.',
    },
    {
      title: 'Lista de Tareas',
      imageUrl: 'https://example.com/image2.jpg',
      technologies: ['nn', 'nn', 'HTML5'],
      description: 'Se crea una lista de tareas.',
    },
    {
      title: 'Lista de Tareas',
      imageUrl: 'https://example.com/image2.jpg',
      technologies: ['React', 'Bootstrap', 'FaGithub'],
      description: 'Se crea una lista de tareas.',
    },
  ];

  const technologies = [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'CSS', icon: <IoLogoCss3 /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'FaGithub', icon: <FaGithub /> },
    // Agrega más tecnologías según sea necesario
  ];

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleTechClick = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech); // Alternar selección
  };

  const filteredProjects = selectedTech
    ? projects.filter(project => project.technologies.includes(selectedTech))
    : projects;

  return (
    <div className="projects-container">
      <div className="technologies">
        <h2>Tecnologías Usadas</h2>
        <div className="tech-icons">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`tech-icon ${selectedTech === tech.name ? 'active' : ''}`}
              onClick={() => handleTechClick(tech.name)}
            >
              {tech.icon} {tech.name}
            </div>
          ))}
        </div>
      </div>

      <div className="project-list">
        <h2>Proyectos Realizados</h2>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
