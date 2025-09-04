import React, { useState } from 'react';

const projects = [
  {
    title: 'Photoshop Project',
    description: 'Creating Graphics and Editing Photos using Photoshop',
    image: '/graphic.png',
    link: '#', 
  },
  {
    title: 'Digital Art Project',
    description: 'Creating Digital Art for personal use or for clients',
    image: '/digitalart.png',
    link: '#', 
  },
  {
    title: 'Website',
    description: 'Website Project for Lifewood Data Technology. Its based off their actual Site but with Account Creation and Dashboard for Users and Admins',
    image: '/site.png',
    link: '#', 
  },
  {
    title: 'Basic HTML Game',
    description: 'A Jet Shooter game made with HTML, CSS with music, sound effects and power ups.',
    image: '/jet.png',
    link: '#', 
  },
  {
    title: 'Inventory System',
    description: 'It adds items, their price, quantity, has item ID, can edit, delete, can go check the cart and checkout. Can visit transaction history and can download the history file',
    image: '/inven.png',
    link: '#', 
  },
  {
    title: 'Ordering App',
    description: 'Full Ordering App for Android with Firebase as backend. Has Admin and User side',
    image: '/app.png',
    link: '#', 
  },
  {
    title: 'Unoffical Vanguard Counter App',
    description: 'For Easy Computation, this app Counts, Assigns, Multiplies , and Subtracts Points or Power for the Card Game Cardfight Vanguard.',
    image: '/vg.png',
    link: '#', 
  },
  {
    title: 'Video Project',
    description: 'I love what I do, and everytime, I do my best to improve',
    youtubeId: '4VsRZAlMQbA', // Replace with your YouTube video ID
    link: '#', 
  },
];

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Styles for the animated border */}
      <style jsx>{`
        @keyframes rgb-shift {
          0% { border-color: #ff0000; }
          33% { border-color: #00ff00; }
          66% { border-color: #0000ff; }
          100% { border-color: #ff0000; }
        }
        .animate-rgb-border {
          animation: rgb-shift 6s linear infinite;
          border-width: 3px;
          border-style: solid;
        }
      `}</style>
      
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-xl shadow-2xl transition-transform transform hover:-translate-y-2 animate-rgb-border">
            <div className="bg-slate-900 p-6 rounded-lg h-full">
              {project.youtubeId ? (
                // Render an iframe for YouTube videos with fixed height
                <div className="w-full h-48 rounded-lg mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              ) : (
                // Render an image for other projects with fixed height and object-cover
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  className="w-full h-48 rounded-lg mb-4 object-cover cursor-pointer" 
                  onClick={() => openLightbox(project.image)} 
                />
              )}
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:text-blue-400">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Zoomed Screenshot" 
              className="max-w-full max-h-[90vh] object-contain transition-transform duration-300" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;