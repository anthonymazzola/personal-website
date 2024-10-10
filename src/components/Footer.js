// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Anthony Mazzola.</p>
      </div>
    </footer>
  );
}

export default Footer;