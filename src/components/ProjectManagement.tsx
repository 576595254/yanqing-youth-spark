
import React from 'react';
import RedBookProject from './RedBookProject';
import VillageHistoryProject from './VillageHistoryProject';
import ZeroWorkPlatform from './ZeroWorkPlatform';
import { ArrowDown } from 'lucide-react';

const ProjectManagement = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-yanqingGreen/10 text-yanqingGreen px-4 py-2 rounded-full text-sm font-medium">
              精彩项目展示
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-yanqingGreen mb-4 px-[5px] py-[26px] md:text-5xl">
            项目化管理 <span className="text-amber-400">成果展示</span>
          </h2>
          
          <p className="text-gray-600 px-0 mx-[8px] my-0 text-lg py-[16px]">
            延庆区选调生团队通过项目化管理方式，将理论与实践相结合，推动基层治理创新，解决实际问题
          </p>
          
          <div className="mt-10 flex justify-center">
            <ArrowDown className="w-10 h-10 text-yanqingGreen/50 animate-bounce" />
          </div>
        </div>
        
        <div className="space-y-20">
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
