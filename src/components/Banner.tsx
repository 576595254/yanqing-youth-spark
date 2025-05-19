
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden banner-bg">
      <div className="banner-overlay"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
        <div className={`text-center max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">北京市延庆区</span>
            <span className="text-activeOrange">选调生团队成果展示</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            扎根基层 服务人民 创新管理 共建未来
          </p>
          
          <button
            onClick={scrollToProjects}
            className="group bg-activeOrange hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
          >
            <span>探索项目化管理亮点</span>
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/80" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Banner;
