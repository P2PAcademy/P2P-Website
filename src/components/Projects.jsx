import React from 'react'

const Projects = () => {
  return (
    <section className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          <span className="text-cyan-400">P2P Academy</span> Open Source Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Tools developed by our community in competitions — now available for everyone on GitHub!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tool 1 */}
          <div className="bg-gray-900 p-6 duration-300 
                hover:scale-[1.02] hover:shadow-xl rounded-xl shadow-lg hover:cursor-pointer border animate__animated animate__zoomIn animate__delay-5s border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold text-indigo-400">
              ReconX
            </h3>
            <p className="mt-2 text-gray-300">
              A powerful reconnaissance automation tool used during our Web Exploit competition.
            </p>
            <a
              href="https://github.com/p2p-academy/reconx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-300 hover:text-indigo-500 text-sm"
            >
              View on GitHub →
            </a>
          </div>

          {/* Tool 2 */}
          <div className=" duration-300 
                hover:scale-[1.02] hover:shadow-xl animate__animated animate__zoomIn animate__delay-5s bg-gray-900 p-6 rounded-xl shadow-lg border hover:cursor-pointer border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold text-indigo-400">
              VulnTrack
            </h3>
            <p className="mt-2 text-gray-300">
              Lightweight vulnerability tracker to manage discovered CVEs during red teaming events.
            </p>
            <a
              href="https://github.com/p2p-academy/vulntrack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-300 hover:text-indigo-500 text-sm"
            >
              View on GitHub →
            </a>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/p2p-academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-base  rounded-md shadow-sm text-white font-bold bg-cyan-700 hover:bg-cyan-600 transition"
          >
            View All P2P Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
