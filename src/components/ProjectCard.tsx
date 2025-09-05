import React from 'react';
import { motion } from 'framer-motion';
import { ProjectType, industryColors } from '../data/projects';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-gray-50 dark:bg-gray-700">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Industry Tag */}
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${industryColors[project.industry]}`}>
            {project.industry}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        {/* Outcome Statement */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1">
          {project.outcomeStatement}
        </p>
        
        {/* Hover Description */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-50 dark:bg-gray-700 rounded-lg p-3 -mx-2 mb-3">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            <span className="font-medium">Role:</span> {project.role}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
            <span className="font-medium">Tools:</span> {project.tools.slice(0, 3).join(', ')}
            {project.tools.length > 3 && '...'}
          </p>
        </div>

        {/* View Case Study Button */}
        <div className="mt-auto">
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
            View Case Study →
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
