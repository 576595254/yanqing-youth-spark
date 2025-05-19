import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { File, Cog, Handshake, ChartBar, Menu, X } from 'lucide-react';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img alt="延庆区选调生团队" className="h-10 w-auto" onError={e => {
          e.currentTarget.src = "https://placeholder.pics/svg/100x40/DEDEDE/555555/延庆区选调生团队";
        }} src="/lovable-uploads/67ac6115-dd36-44a8-a712-a81d581db02d.png" />
          <h1 className={`font-bold text-lg md:text-xl transition-all duration-300 ${scrolled ? 'text-yanqingGreen' : 'text-white'}`}>
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
          <button className={`p-2 rounded-md ${scrolled ? 'text-yanqingGreen hover:bg-gray-100' : 'text-white hover:bg-white/10'}`} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`bg-white w-64 h-full shadow-xl transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-5 border-b border-gray-200">
            <h2 className="text-yanqingGreen font-bold text-lg">导航菜单</h2>
          </div>
          <nav className="p-5 space-y-5">
            <MobileNavItem icon={<File className="h-5 w-5" />} text="管理制度" href="#management" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem icon={<Cog className="h-5 w-5" />} text="项目化管理" href="#projects" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem icon={<Handshake className="h-5 w-5" />} text="资源对接" href="#resources" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem icon={<ChartBar className="h-5 w-5" />} text="调研报告" href="#research" onClick={() => setMobileMenuOpen(false)} />
          </nav>
        </div>
      </div>
    </header>;
};
interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  scrolled: boolean;
}
const NavItem = ({
  icon,
  text,
  href,
  scrolled
}: NavItemProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <a href={href} onClick={scrollToSection} className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-300 ${scrolled ? 'text-greatWallGray hover:text-yanqingGreen hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>
      {icon}
      <span>{text}</span>
    </a>;
};
interface MobileNavItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  onClick: () => void;
}
const MobileNavItem = ({
  icon,
  text,
  href,
  onClick
}: MobileNavItemProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
      onClick();
    }
  };
  return <a href={href} onClick={scrollToSection} className="flex items-center space-x-3 p-3 rounded-lg text-greatWallGray hover:text-yanqingGreen hover:bg-gray-100 transition-all duration-300">
      <span className="text-yanqingGreen bg-green-50 p-2 rounded-lg">{icon}</span>
      <span className="font-medium">{text}</span>
    </a>;
};
export default Header;