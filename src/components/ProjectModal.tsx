import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Wrench, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { ProjectType, industryColors } from '../data/projects';

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="pr-12">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${industryColors[project.industry]}`}>
                    {project.industry}
                  </span>
                  {project.duration && (
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-1" />
                      {project.duration}
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {project.outcomeStatement}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6 space-y-8">
                {/* Project Image */}
                <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Case Study Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    {/* Problem */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Target className="text-red-500 mr-3" size={24} />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          The Challenge
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.challenges}
                      </p>
                    </section>

                    {/* Solution */}
                    <section>
                      <div className="flex items-center mb-4">
                        <Lightbulb className="text-yellow-500 mr-3" size={24} />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          My Approach
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.solutions}
                      </p>
                    </section>

                    {/* Impact */}
                    <section>
                      <div className="flex items-center mb-4">
                        <TrendingUp className="text-green-500 mr-3" size={24} />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Impact & Results
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.impact}
                      </p>
                    </section>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Role */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        My Role
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {project.role}
                      </p>
                    </div>

                    {/* Tools */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Wrench size={18} className="mr-2 text-gray-600 dark:text-gray-400" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Tools & Technologies
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-600"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;