import React from 'react';

const Footer = () => {
  return (
    <footer className="flex bg-gray-900 flex-col items-center bg-zinc-50 text-center text-gray-800 dark:bg-gray-900 dark:text-white lg:text-left">
      {/* Content container */}
      <div className="container mx-auto p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 text-lg font-semibold uppercase">About <span className="text-cyan-400">P2P Academy</span></h5>
            <p className="mb-4 text-gray-300">
              P2P Academy is dedicated to empowering individuals with cybersecurity and coding knowledge.
              Join our Discord and start your learning journey with a passionate community of learners and mentors.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 text-lg font-semibold uppercase">Our <span className="text-cyan-400">Mission</span> </h5>
            <p className="mb-4 text-gray-300">
              We aim to make ethical hacking and development accessible for all. With hands-on projects,
              real-world scenarios, and consistent support, we help you build your dream skills step-by-step.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-black/5 p-4 text-center text-sm dark:text-gray-300">
        © {new Date().getFullYear()} Copyright:{' '}
        <a href="https://discord.gg/XBetF5v7" className="hover:underline font-semibold text-cyan-400">
          P2P Academy
        </a>
        <div className="mt-2">
          Site built by{' '}
          <a href="https://www.linkedin.com/in/muhammadrohankhan" className="hover:underline font-semibold text-cyan-400">
            h4ckz0r.404
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;