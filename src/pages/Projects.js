import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import speechProjectImage from '../resources/speech.jpeg';
import spaceshipImage from '../resources/spaceship.jpeg';
import descriptions from '../resources/projectContent.json';
import facerecog from '../resources/facerecog.png';
import competitive from '../resources/competitive.jpeg';
import textSimilar from '../resources/textSimilar.webp';
import recursion from '../resources/recursion.png';
import sentimentAnalysis2 from '../resources/sentimentAnalysis2.jpeg';

const Projects = () => {
  return (
    <div style={styleSheet.container}>
      <Header />
      <div style={styleSheet.outerBox}>
        <ProjectCard projectImage={speechProjectImage} projectDescription={descriptions.project_1} />
        <ProjectCard projectImage={spaceshipImage} projectDescription={descriptions.project_2} />
        <ProjectCard projectImage={facerecog} projectDescription={descriptions.project_3} />
        <ProjectCard projectImage={competitive} projectDescription={descriptions.project_4} />
        <ProjectCard projectImage={textSimilar} projectDescription={descriptions.project_5} />
        <ProjectCard projectImage={recursion} projectDescription={descriptions.project_6} />
        <ProjectCard projectImage={sentimentAnalysis2} projectDescription={descriptions.project_7} />
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
    backgroundColor: '#2E3B55',
    flexGrow: 1, // Allow the outer box to grow and occupy the remaining vertical space
    overflow: 'scroll',
    padding: '20px', // Add padding to the outer box
  },
};

export default Projects;
