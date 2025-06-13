import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Teams from './components/Teams';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [loading]);

  return (
    <div className="bg-gray-900 text-white">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="blogs">
            <Blogs />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="teams">
            <Teams />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;