
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
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <div className="relative h-screen w-full overflow-hidden">
      {/* Banner background with Great Wall landscape */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
      backgroundImage: "url('/lovable-uploads/9ef36454-5a9f-4d95-b0b8-c9b9d11653ac.png')"
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
        <div className={`text-center max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <div className="mb-6 inline-block">
            <p className="text-white/90 uppercase tracking-widest text-sm font-medium mb-2">北京市延庆区</p>
            <div className="h-20 w-20 md:h-28 md:w-28 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center animate-float">
              <span className="text-white text-3xl md:text-4xl font-bold">延庆</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="block mb-2 text-shadow-lg">北京市延庆区</span>
            <span className="text-amber-400 text-shadow-lg px-0 py-0 my-0 mx-0">选调生团队
成果展示</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 text-shadow-md max-w-2xl mx-auto">扎根基层 服务人民
创新管理 共建未来</p>
          
          <div className="flex justify-center space-x-4">
            <button onClick={scrollToProjects} className="group bg-amber-400 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3">
              <span className="py-0 text-xl">探索项目化管理亮点</span>
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/80" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>;
};

export default Banner;
