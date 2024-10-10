// src/components/Education.js
import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

function Education() {
  return (
    <Element name="education">
      <section className="py-12 bg-primary">
      <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <motion.div
            className="bg-secondary rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">University of Vermont</h3>
            <p className="text-sm mb-4">
              Bachelor of Science in Computer Science, Minor in Electrical Engineering | 2024 | GPA: 3.85
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Dean's List</li>
              <li>Teaching Assistant for Computer Science and Electrical Engineering</li>
              <li>President of Pi Kappa Phi</li>
              <li>Learning Community Leader</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Element>
  );
}

export default Education;