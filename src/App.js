import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/profile.jpg" // Replace with your actual image path
              alt="Profile"
              className="w-80 h-80 object-cover rounded-lg shadow-lg grayscale"
            />
            <h1 className="absolute top-0 left-4 text-3xl md:text-4xl font-signature text-red-500">
              Shresth Kapoor
            </h1>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-left">
          <h2 className="text-4xl font-bold">Hi,</h2>
          <p className="mt-4 text-lg">
            I am a <span className="text-red-500 font-semibold">Software Engineer</span> passionate about building
            scalable and elegant solutions. I specialize in <span className="text-red-500 font-semibold">React, Spring Boot, and AI</span>.
          </p>
          <p className="mt-2 text-lg">
            Currently pursuing my <span className="text-red-500 font-semibold">MS in Computer Science at NYU</span>.
          </p>
          <div className="mt-6">
            <a
              href="/resume.pdf" // Replace with your actual resume link
              className="text-red-500 font-semibold border-b-2 border-red-500 hover:text-red-700"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-4 right-8 flex space-x-6 text-lg font-semibold">
        <a href="#about" className="hover:text-red-500">About</a>
        <a href="#work" className="hover:text-red-500">Work</a>
        <a href="#contact" className="hover:text-red-500">Contact</a>
      </div>
    </div>
  );
};

export default Portfolio;
