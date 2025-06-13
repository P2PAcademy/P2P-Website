import React, { useState, useEffect } from 'react';
import { FaDiscord, FaShieldAlt, FaUsers, FaCode, FaFlag } from 'react-icons/fa';

const About = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const taglines = [
    "Where knowledge meets <span class='text-blue-300'>innovation</span> in cybersecurity",
    "Home to <span class='text-blue-300'>950+</span> ethical hackers",
    "Join our <span class='text-blue-300'>CTF</span> competitions",
    "<span class='text-blue-300'>Peer-to-peer</span> learning community"
  ];

  useEffect(() => {
    let interval;
  
    const startInterval = () => {
      interval = setInterval(() => {
        setCurrentLine((prev) => (prev + 1) % taglines.length);
      }, 3000);
    };
  
    if (window.innerWidth >= 450) {
      startInterval();
    }
  
    const handleResize = () => {
      if (window.innerWidth < 450 && interval) {
        clearInterval(interval);
        interval = null;
      } else if (window.innerWidth >= 450 && !interval) {
        startInterval();
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="relative block">
              <span className="relative block">
                <span className='text-white'>About</span> <span className="text-cyan-400">P2P Academy</span>
              </span>
            </span>
            
            {/* Tagline with responsive behavior */}
            <div className="mt-2 h-8 sm:h-10 text-lg font-medium text-purple-200 sm:text-xl">
              {/* Mobile - static single line */}
              <span className="block sm:hidden" dangerouslySetInnerHTML={{ __html: taglines[0] }} />
              
              {/* Desktop - animated cycling lines */}
              <div className="hidden sm:block relative">
                {taglines.map((line, index) => (
                  <span
                    key={index}
                    className={`absolute left-0 right-0 transition-opacity duration-1000 ${
                      index === currentLine ? 'opacity-100' : 'opacity-0'
                    }`}
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </div>
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer">
          {/* Community Card */}
          <div className=" animate__animated animate__zoomIn animate__delay-1s bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
              <FaUsers className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Thriving Community</h3>
            <p className="text-gray-300">
              950+ members strong and growing! Our Discord server brings together ethical hackers and cybersecurity professionals at all skill levels.
            </p>
          </div>

          {/* Knowledge Sharing Card */}
          <div className="animate__animated animate__zoomIn animate__delay-2s bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
              <FaShieldAlt className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Knowledge Exchange</h3>
            <p className="text-gray-300">
              Beginners learn from experts, experts refine their skills by teaching. We share experiences, techniques, and real-world cybersecurity knowledge.
            </p>
          </div>

          {/* CTF Card */}
          <div className="animate__animated animate__zoomIn animate__delay-3s bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
              <FaFlag className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">CTF Participation</h3>
            <p className="text-gray-300">
              We alert members about upcoming CTF competitions and form teams to participate. Perfect for both CTF veterans and newcomers.
            </p>
          </div>

          {/* Tool Building Card */}
          <div className="animate__animated animate__zoomIn animate__delay-1s bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mb-4">
              <FaCode className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Tool Development</h3>
            <p className="text-gray-300">
              Collaborate on building cybersecurity tools and utilities. Contribute to open-source projects or start your own with community support.
            </p>
          </div>

          {/* Discord Card */}
          <div className="animate__animated animate__zoomIn animate__delay-2s bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <FaDiscord className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Active Discord Server</h3>
            <p className="text-gray-300">
              Daily discussions, Q&A sessions, and resource sharing. Get instant help with cybersecurity challenges from our engaged community.
            </p>
          </div>

          {/* Join Us Card */}
          <div className="animate__animated animate__zoomIn animate__delay-3s bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-medium text-white mb-2">Ready to Join?</h3>
            <p className="text-gray-100 mb-4">
              Whether you're a beginner or an expert, P2P Academy has something for you in your cybersecurity journey.
            </p>
            <a
              href="https://discord.gg/XBetF5v7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Join Our Discord
              <FaDiscord className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300">
            P2P Academy - Peer-to-peer learning for the cybersecurity community since <span className='text-cyan-400'>2024</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;