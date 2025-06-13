import { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavClick = (sectionText) => {
    const sectionMap = {
      'Home': 'home',
      'About Us': 'about',
      'Blogs': 'blogs',
      'Projects': 'projects',
      'Our Teams': 'teams'
    };
    
    const sectionId = sectionMap[sectionText];
    setActiveLink(sectionText);
    setIsOpen(false);
    
    // Add a small timeout to ensure the state updates complete
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 10);
  };


  return (
    <nav className="bg-gray-800 shadow-lg animate__animated animate__fadeInDown">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo section with logo image */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              alt="P2P Academy Logo" 
              className="h-8 w-auto xs:h-10 sm:h-12"
            />
            <a 
              href="#home" 
              className="text-white font-extrabold text-sm xs:text-lg sm:text-xl"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Home');
              }}
            >
              P2P Academy
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavItem 
              href="#home" 
              text="Home" 
              isActive={activeLink === 'Home'}
              onClick={() => handleNavClick('Home')}
            />
            <NavItem 
              href="#about" 
              text="About Us" 
              isActive={activeLink === 'About Us'}
              onClick={() => handleNavClick('About Us')}
            />
            <NavItem 
              href="#blogs" 
              text="Blogs" 
              isActive={activeLink === 'Blogs'}
              onClick={() => handleNavClick('Blogs')}
            />
            <NavItem 
              href="#projects" 
              text="Projects" 
              isActive={activeLink === 'Projects'}
              onClick={() => handleNavClick('Projects')}
            />
            <NavItem 
              href="#teams" 
              text="Our Teams" 
              isActive={activeLink === 'Our Teams'}
              onClick={() => handleNavClick('Our Teams')}
            />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem 
              href="#home" 
              text="Home" 
              isActive={activeLink === 'Home'}
              onClick={() => handleNavClick('Home')}
            />
            <MobileNavItem 
              href="#about" 
              text="About Us" 
              isActive={activeLink === 'About Us'}
              onClick={() => handleNavClick('About Us')}
            />
            <MobileNavItem 
              href="#blogs" 
              text="Blogs" 
              isActive={activeLink === 'Blogs'}
              onClick={() => handleNavClick('Blogs')}
            />
            <MobileNavItem 
              href="#projects" 
              text="Projects" 
              isActive={activeLink === 'Projects'}
              onClick={() => handleNavClick('Projects')}
            />
            <MobileNavItem 
              href="#teams" 
              text="Our Teams" 
              isActive={activeLink === 'Our Teams'}
              onClick={() => handleNavClick('Our Teams')}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop NavItem component
const NavItem = ({ href, text, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`${
      isActive 
        ? 'text-white font-extrabold' 
        : 'text-gray-300 hover:text-white font-bold'
    } px-3 py-2 rounded-md text-sm transition-colors duration-200`}
  >
    {text}
  </a>
);

// Mobile NavItem component
const MobileNavItem = ({ href, text, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`${
      isActive 
        ? 'text-white font-extrabold' 
        : 'text-gray-300 hover:text-white font-bold'
    } block px-3 py-2 rounded-md text-base transition-colors duration-200`}
  >
    {text}
  </a>
);

export default Navbar;