'use client'
import React, { useState } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import { projects } from '../assets/data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
//   const filteredProjects: Project[] = []
  const filteredProjects = filter === 'all' 
    ? projects : []
    // : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        {filteredProjects.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm currently working on some exciting projects. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;