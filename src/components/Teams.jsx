import React from 'react';
import { FaExternalLinkAlt, FaCrown, FaUserSecret, FaTrophy, FaStar } from 'react-icons/fa';
const Teams = () => {
  const teamData = {
    name: "P2P Academy",
    rank: "Rank #193",
    points: 131,
    members: 14,
    url: "https://app.hackthebox.com/teams/overview/6821",
    membersList: [
      "Marclos15",
      "mqrion",
      "w3nch",
      "trevorh",
      "Thennavan",
      "atoontoto",
      "Heiwa7Ai",
      "abhinav005",
      "ldriot",
      "FREDDY12345",
      "strakie",
      "ahmeedc",
      "S4m4l",
      "0xlaporte"
    ]
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-gray-100" style={{ backgroundColor: 'rgb(44, 61, 85)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="block  bg-clip-text ">
              Our <span className="text-cyan-400">HTB Teams</span>
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Elite cybersecurity professionals competing on Hack The Box
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate__animated animate__fadeIn animate__delay-5s">
          {/* Team Overview Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-cyan-400 ">
            <div className="flex items-center mb-4">
              <FaUserSecret className="h-8 w-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">{teamData.name}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Team Rank</p>
                <p className="text-xl font-bold text-cyan-400 flex items-center">
                  <FaCrown className="mr-2" /> {teamData.rank}
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Points</p>
                <p className="text-xl font-bold text-cyan-400">
                  {teamData.points.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Members</p>
                <p className="text-xl font-bold text-cyan-400">
                  {teamData.members}
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Platform</p>
                <p className="text-xl font-bold text-cyan-400 flex items-center">
                  <FaTrophy className="mr-2" /> Hack The Box
                </p>
              </div>
            </div>
            
            <a
              href={teamData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
            >
              View HTB Profile
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>

          {/* Team Members Card */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-blue-400 ">
            <div className="flex items-center mb-6">
              <FaUserSecret className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Team Members</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 hover:cursor-pointer">
              {teamData.membersList.map((member, index) => (
                <div 
                  key={index} 
                  className=" bg-gray-700 p-3 rounded-lg flex items-center hover:bg-gray-600 transition-colors"
                >
                  <FaStar className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-white font-medium truncate">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-300">
            Want to join our HTB team? Contact us on <span className="text-cyan-400" >Discord</span>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Teams;