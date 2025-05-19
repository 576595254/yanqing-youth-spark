
import React from 'react';
import RedBookProject from './RedBookProject';
import VillageHistoryProject from './VillageHistoryProject';
import ZeroWorkPlatform from './ZeroWorkPlatform';

const ProjectManagement = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yanqingGreen mb-4">
            项目化管理 <span className="text-activeOrange">成果展示</span>
          </h2>
          <p className="text-gray-600">
            延庆区选调生团队通过项目化管理方式，将理论与实践相结合，推动基层治理创新，解决实际问题
          </p>
        </div>
        
        <div className="space-y-16">
          <div data-aos="fade-up" data-aos-delay="100">
            <RedBookProject />
          </div>
          
          <div className="border-t border-gray-200 pt-16" data-aos="fade-up" data-aos-delay="200">
            <VillageHistoryProject />
          </div>
          
          <div className="border-t border-gray-200 pt-16" data-aos="fade-up" data-aos-delay="300">
            <ZeroWorkPlatform />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
