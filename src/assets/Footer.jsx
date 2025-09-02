import React from 'react';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-slate-900 py-12 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4 text-cyan-400">Contact Me</h3>
        <p className="text-lg text-slate-400">Feel free to reach out to me via email or social media.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="mailto:your-email@example.com" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
            Email
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;