// src/components/Projects.js
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaSpotify, FaMusic, FaRobot, FaBasketballBall } from 'react-icons/fa';

const projects = [
  {
    title: 'Spotify Playlist Editor',
    description: 'Web application to manipulate Spotify playlists using the Spotify Web API.',
    link: 'https://github.com/anthonymazzola/spotify-playlist-editor',
    icon: <FaSpotify />,
  },
  {
    title: 'FindMyMusicRemote',
    description: 'Remote application to connect with friends over music.',
    link: 'https://github.com/anthonymazzola/FindMyMusicRemote',
    icon: <FaMusic />,
  },
  {
    title: 'MyBots',
    description: 'Collection of bots using various evolutionary robotics algorithms.',
    link: 'https://github.com/anthonymazzola/mybots',
    icon: <FaRobot />,
  },
  {
    title: 'NBA Machine Learning Prediction',
    description: 'Machine learning project to predict NBA game outcomes.',
    link: 'https://github.com/anthonymazzola/nba-machine-learning-prediction',
    icon: <FaBasketballBall />,
  },
];

function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
  
    const handlePrev = () => {
      setCurrentProject((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentProject((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const project = projects[currentProject];
  
    return (
      <Element name="projects">
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-6 py-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="relative bg-secondary rounded-lg p-8 shadow-lg">
            <motion.div
                key={currentProject}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl text-primary mb-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-secondary hover:bg-secondary-dark px-6 py-3 rounded-full transition"
                >
                View on GitHub
                </a>
              </motion.div>
              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-primary hover:text-white"
              >
                <FaArrowLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-primary hover:text-white"
              >
                <FaArrowRight size={24} />
              </button>
            </div>
            {/* Indicators */}
            <div className="mt-6">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block w-3 h-3 mx-1 rounded-full ${
                    index === currentProject ? 'bg-secondary' : 'bg-gray-500'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </section>
      </Element>
    );
  }
  
  export default Projects;