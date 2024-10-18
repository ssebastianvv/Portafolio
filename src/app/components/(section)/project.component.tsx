//en esta parte de projectos puedo crear unas tarjetas donde se muestre la imagen y una brebe descripcion del projecto ademas de un link donde lleve directamente al projecto en el github mirando que este completo seria bueno si le puedo poner iconos sobre lo que se uso en el projecto 
import ProjectCard from "../card.project";

const Projects = () => {
    const projects = [
      {
        title: 'Proyecto 1',
        imageUrl: 'https://example.com/image1.jpg',
        technologies: ['React', 'TypeScript', 'CSS'],
        description: 'Una breve descripción del proyecto 1.',
      },
      {
        title: 'Proyecto 2',
        imageUrl: 'https://example.com/image2.jpg',
        technologies: ['Node.js', 'Express', 'MongoDB'],
        description: 'Una breve descripción del proyecto 2.',
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
  