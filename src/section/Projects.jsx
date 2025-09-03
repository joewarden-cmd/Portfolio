import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project. Talk about its features and technologies used.',
    link: '#', 
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project. Mention the challenges you faced and how you overcame them.',
    link: '#', 
  },
  {
    title: 'Project 3',
    description: 'A brief description of your third project. Highlight its unique selling points.',
    link: '#', 
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-2xl transition-transform transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:text-blue-400">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;