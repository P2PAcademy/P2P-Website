import React from 'react';
import videoFile from '../assets/video.mp4'; // adjust the path based on actual location

const Home = () => {
  return (
    <main style={{ backgroundColor: 'rgb(44, 61, 85)' }}>
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
          {/* Text Content - Now always first on mobile/tablet */}
          <div className="flex-1 order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-3 animate__animated animate__bounceInLeft">
              Welcome to <br className="hidden sm:block" />
              <span className="text-cyan-400">P2P Academy</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto lg:mx-0 mb-6 md:mb-4 animate__animated animate__fadeIn animate__delay-1s">
              A community of cybersecurity enthusiasts, ethical hackers, and CTF players. Share tools, collaborate on red and blue team techniques, and grow together.
            </p>
            
            <div className="flex justify-center lg:justify-start animate__animated animate__fadeIn animate__delay-1s">
              <a
                href="https://discord.gg/XBetF5v7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
               
                Join us on Discord
                 <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-1 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Video Content - Now always second on mobile/tablet */}
          <div className="flex-1 w-full order-2 lg:order-2 animate__animated animate__fadeIn animate__delay-2s">
            <video
              src={videoFile}
              autoPlay
              muted
              loop
              controls={false}
              className="w-full rounded-xl shadow-lg max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;