import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-300 to-turquois-700 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Hi, I'm <span className="text-pink-600">Rachel Ayaka Lin</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-black">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-8 max-w-md text-black">
            I build modern, responsive web applications using cutting-edge technologies.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-pink-400 hover:bg-pink-600 rounded-lg font-medium transition-colors"
            >
              Projects
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-pink-400 hover:bg-pink-600 rounded-lg font-medium transition-colors"
            >
              Resume
            </a>
            {/* <a 
              href="contact" 
              // className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 rounded-lg font-medium transition-colors"
            className="px-6 py-3 bg-pink-300 border-2 border-white hover:bg-white hover:text-blue-700 rounded-lg font-medium transition-colors"
            >
              On my free time
            </a> */}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            {/* Replace with your own image */}
            <Image 
              src="/images/profile.jpg"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;