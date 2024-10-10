// src/components/AboutMe.js
import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <Element name="about">
      <section className="min-h-screen flex items-center justify-center bg-primary">
        <motion.div
          className="text-center p-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Anthony Mazzola</h1>
          <p className="text-xl mb-6">Software Engineer</p>
          <div className="space-x-4">
            <a href="mailto:mazzolaant@gmail.com" className="text-secondary hover:underline">
              mazzolaant@gmail.com
            </a>
            <span>|</span>
            <a href="tel:+18027808284" className="text-secondary hover:underline">
              (802) 780-8284
            </a>
          </div>
        </motion.div>
      </section>
    </Element>
  );
}

export default AboutMe;