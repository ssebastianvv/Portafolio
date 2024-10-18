//en esta parte de projectos puedo crear unas tarjetas donde se muestre la imagen y una brebe descripcion del projecto ademas de un link donde lleve directamente al projecto en el github mirando que este completo seria bueno si le puedo poner iconos sobre lo que se uso en el projecto 
import ProjectCard from "../card.project";

const Projects = () => {
    const projects = [
      {
        title: 'poke api',
        imageUrl: 'https://example.com/image1.jpg',
        technologies: ['React', 'TypeScript', 'CSS'],
        description: 'mostramos las tarjetas de los pokemones .',
      },
      {
        title: 'lista',
        imageUrl: 'https://example.com/image2.jpg',
        technologies: ['React', 'typescript', 'CSS'],
        description: 'se crea una lista de tareas .',
      },
      // Agrega más proyectos según sea necesario
    ];
  
    return (
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            description={project.description}
          />
        ))}
      </div>
    );
  };
  
  export default Projects;
  