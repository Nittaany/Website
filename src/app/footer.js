import React from "react";
import "./globals.css";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8" id="contact">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="mt-2 text-2xl text-gray-400">Connect With Me!</p>
        </div>
        <div className="mb-4">
          <div className="flex justify-center">
            <div className="flex mb-2 text-gray-400 ">
              <p>Made with 🩷 by</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="http://linkedin.com/in/satyam-c"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://twitter.com/ChaudharyNitant"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              Twitter ↗
            </a>
            <a
              href="https://github.com/Nittaany/"
              className="text-blue-300 hover:text-blue-100 transition"
            >
              Github ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
