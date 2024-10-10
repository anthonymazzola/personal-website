// src/components/Skills.js
import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import {
  FaJava,
  FaPython,
  FaJs,
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from 'react-icons/fa';
import {
  SiScala,
  SiKubernetes,
  SiSpringboot,
  SiMongodb,
  SiNewrelic,
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Scala', icon: <SiScala /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'NoSQL', icon: <SiMongodb /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Amazon ECS', icon: <FaAws /> },
  { name: 'Amazon S3', icon: <FaAws /> },
  { name: 'Amazon SQS', icon: <FaAws /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'New Relic', icon: <SiNewrelic /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'CI/CD', icon: <FaGitAlt /> },
  { name: 'Object-Oriented Programming', icon: <FaJava /> },
];

function Skills() {
  return (
    <Element name="skills">
      <section className="py-12 bg-primary">
      <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8"
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {skills.concat(skills).map((skill, index) => (
                <div
                  key={index}
                  className="flex-none flex flex-col items-center space-y-2"
                >
                  <div className="text-5xl text-secondary">{skill.icon}</div>
                  <p className="text-center text-sm">{skill.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Skills;