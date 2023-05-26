import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import speechProjectImage from '../resources/speech.jpeg';
import spaceshipImage from '../resources/spaceship.jpeg';
import descriptions from '../resources/projectContent.json';

const Projects = () => {
  return (
    <div style={styleSheet.container}>
      <Header />
      <div style={styleSheet.outerBox}>
        <ProjectCard projectImage={speechProjectImage} projectDescription={descriptions.project_1} />
        <ProjectCard projectImage={spaceshipImage} projectDescription={descriptions.project_2} />
        <ProjectCard projectDescription={descriptions.project_1} />
        <ProjectCard projectDescription={descriptions.project_1} />
        <ProjectCard projectDescription={descriptions.project_1} />
        <ProjectCard projectDescription={descriptions.project_1} />
      </div>
    </div>
  );
};

const styleSheet = {
  container: {
    height: '100vh', // Set the container height to 100% of the viewport height
    backgroundColor: '#2E3B55',
  },
  outerBox: {
    display: 'grid', // Use CSS Grid for layout
    gridTemplateColumns: 'repeat(3, 1fr)', // Create three columns of equal width
    gap: '20px', // Add some gap between the cards
    alignItems: 'center',
    height:'90vh',
    backgroundColor: '#2E3B55',
    flexGrow: 1, // Allow the outer box to grow and occupy the remaining vertical space
    overflow: 'scroll',
    padding: '20px', // Add padding to the outer box
  },
};

export default Projects;
