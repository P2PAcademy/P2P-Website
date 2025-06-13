import React from 'react';
import { FaExternalLinkAlt, FaCalendarAlt, FaUserShield } from 'react-icons/fa';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Ethical Hacking",
      excerpt: "Learn the fundamentals of ethical hacking and penetration testing in this beginner's guide.",
      author: "P2P Academy Team",
      date: "May 15, 2024",
      url: "https://example.com/ethical-hacking-guide",
      category: "Beginner",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "CTF Strategies for Beginners",
      excerpt: "Discover proven strategies to approach Capture The Flag competitions as a newcomer.",
      author: "CTF Veteran",
      date: "April 28, 2024",
      url: "https://example.com/ctf-strategies",
      category: "CTF",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Building Your First Security Tool",
      excerpt: "Step-by-step guide to creating a basic network scanner using Python.",
      author: "Tool Developer",
      date: "June 2, 2024",
      url: "https://example.com/build-security-tool",
      category: "Development",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "Advanced Reverse Engineering Techniques",
      excerpt: "Deep dive into modern reverse engineering methods used by professionals.",
      author: "Security Researcher",
      date: "March 17, 2024",
      url: "https://example.com/reverse-engineering",
      category: "Advanced",
      readTime: "15 min read"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(44, 61, 85)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="block">P2P Academy</span>
            <span className="block text-cyan-400">Blog & Resources</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Learn from our community's shared knowledge and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-gray-800 rounded-lg hover:cursor-pointer overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl border-l-4 border-cyan-400 animate__animated animate__zoomIn animate__delay-4s"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 text-xs font-semibold text-cyan-100 bg-cyan-900 rounded-full">
                    {post.category}
                  </span>
                  <span className="ml-auto text-sm text-gray-400 flex items-center">
                    <FaCalendarAlt className="mr-1" /> {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 flex-grow">{post.excerpt}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center">
                    <FaUserShield className="mr-1" /> {post.author}
                  </span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
                >
                  Read Article
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://example.com/all-blogs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-cyan-700 hover:bg-cyan-600 transition-colors"
          >
            View All Blog Posts
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;