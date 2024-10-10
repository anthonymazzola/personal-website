// src/components/Experience.js
import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <Element name="experience">
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          {/* First Experience Entry */}
          <motion.div
            className="bg-secondary rounded-lg p-6 shadow-lg mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">Software Engineer, Cox Automotive</h3>
            <p className="text-sm mb-4">June 2024 - Present | Burlington, VT</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Develop and maintain multiple RESTful APIs using Java and Spring Boot.</li>
              <li>Utilize Amazon ECS and S3 to create and maintain a POST endpoint for updating price configuration S3 buckets across over 10,000 accounts.</li>
              <li>Led the implementation of cross-browser automation testing suite using Playwright.</li>
              <li>Implemented GET endpoints connecting to a Hollow-backed database.</li>
              <li>Conducted thorough testing of code manually and through JUnit.</li>
              <li>Active participant in weekly code reviews.</li>
              <li>Collaborated with peers to gain knowledge of various microservices and UI patterns.</li>
            </ul>
          </motion.div>
          {/* Second Experience Entry */}
          <motion.div
            className="bg-secondary rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Software Engineer Intern, Cox Automotive</h3>
            <p className="text-sm mb-4">May 2023 - June 2024 | Burlington, VT</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Deployed a React JS application for prototyping a new price configuration interface.</li>
              <li>Consumed RESTful API endpoints to fetch critical data.</li>
              <li>Created a new service and controller with enhanced security.</li>
              <li>Implemented integration testing through JUnit.</li>
              <li>Consistently met sprint goals in an Agile environment.</li>
              <li>Received a full-time offer from the internship.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Element>
  );
}

export default Experience;