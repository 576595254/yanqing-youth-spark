
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { File, Cog, Handshake, ChartBar } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/images/logo.png" 
            alt="延庆区选调生团队" 
            className="h-10 w-auto"
            onError={(e) => {
              e.currentTarget.src = "https://placeholder.pics/svg/100x40/DEDEDE/555555/延庆区选调生团队";
            }}
          />
          <h1 className={`font-bold text-lg md:text-xl transition-all duration-300 ${
            scrolled ? 'text-yanqingGreen' : 'text-white'
          }`}>
            延庆区选调生团队
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <NavItem icon={<File className="h-5 w-5" />} text="管理制度" href="#management" scrolled={scrolled} />
          <NavItem icon={<Cog className="h-5 w-5" />} text="项目化管理" href="#projects" scrolled={scrolled} />
          <NavItem icon={<Handshake className="h-5 w-5" />} text="资源对接" href="#resources" scrolled={scrolled} />
          <NavItem icon={<ChartBar className="h-5 w-5" />} text="调研报告" href="#research" scrolled={scrolled} />
        </nav>

        <div className="md:hidden">
          <button className={`p-2 rounded-md ${
            scrolled ? 'text-yanqingGreen hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  scrolled: boolean;
}

const NavItem = ({ icon, text, href, scrolled }: NavItemProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href}
      onClick={scrollToSection}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${
        scrolled 
          ? 'text-greatWallGray hover:text-yanqingGreen hover:bg-gray-100' 
          : 'text-white/90 hover:text-white hover:bg-white/10'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Header;
