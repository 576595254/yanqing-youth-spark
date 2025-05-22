
import { useEffect } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import StatsSidebar from '@/components/StatsSidebar';
import ProjectManagement from '@/components/ProjectManagement';
import ManagementSystem from '@/components/ManagementSystem';
import ResourceShowcase from '@/components/ResourceShowcase';

const Index = () => {
  useEffect(() => {
    // Implement AOS (Animate on Scroll) functionality
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('[data-aos]');
      scrollElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight * 0.8;
        if (elementPosition < scrollPosition) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in viewport
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <div className="min-h-screen w-full">
      <Header />
      <Banner />
      <StatsSidebar />
      
      <main>
        <ProjectManagement />
        <ManagementSystem />
        
        <section id="resources" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-400 px-[6px] py-[15px] md:text-5xl relative inline-block">
                资源对接与宣传推广
                <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-orange-400 transform -translate-x-1/2"></span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">此部分将展示资源对接会与《长城青年说》等活动内容与成果。</p>
            </div>
            
            <ResourceShowcase />
          </div>
        </section>
        
        <section id="research" className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-yanqingGreen mb-16 py-[25px] font-bold md:text-5xl">调研报告</h2>
            <p className="text-gray-600 max-w-2xl mx-auto pb-20">此部分将展示各类调研报告与研究成果。</p>
          </div>
        </section>
      </main>
      
      <footer className="bg-greatWallGray text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">北京市延庆区选调生团队</h3>
              <p className="text-sm text-white/70">扎根基层 服务人民 创新管理 共建未来</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-white/70">© 2024 延庆区选调生团队. 保留所有权利.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
