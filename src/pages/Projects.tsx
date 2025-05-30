import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects | Varnica - Product & Project Manager';
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <SectionHeading
          title="My Work"
          subtitle="Explore my projects and case studies showcasing my approach to product and project management."
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;