import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { Building, Video, Play, School } from 'lucide-react';
const ResourceShowcase = () => {
  const [activeTab, setActiveTab] = useState("enterprise");
  return <div className="mt-10">
      <Tabs defaultValue="enterprise" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-white/90 border p-1 shadow-md">
            <TabsTrigger value="enterprise" className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-[4px]">
              <Building className="w-4 h-4" />
              <span className="hidden sm:inline">企业资源对接会</span>
              <span className="sm:hidden">对接会</span>
            </TabsTrigger>
            <TabsTrigger value="university" className="flex items-center gap-2 data-[state=active]:bg-purple-100 data-[state=active]:text-purple-600 py-2 mx-0 px-[6px]">
              <School className="w-4 h-4" />
              <span className="hidden sm:inline">高校共建活动</span>
              <span className="sm:hidden">高校</span>
            </TabsTrigger>
            <TabsTrigger value="youth-speaks" className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-[7px]">
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">长城青年说</span>
              <span className="sm:hidden px-0">青年说</span>
            </TabsTrigger>
            <TabsTrigger value="youth-speaks-2" className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-[4px]">
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">长城青年说2</span>
              <span className="sm:hidden">青年说2</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="enterprise" className="mt-2">
          <EnterpriseResourceMatching active={activeTab === "enterprise"} />
        </TabsContent>
        
        <TabsContent value="university" className="mt-2">
          <UniversityCollaboration active={activeTab === "university"} />
        </TabsContent>
        
        <TabsContent value="youth-speaks" className="mt-2">
          <GreatWallYouthSpeaks active={activeTab === "youth-speaks"} />
        </TabsContent>
        
        <TabsContent value="youth-speaks-2" className="mt-2">
          <GreatWallYouthSpeaks2 active={activeTab === "youth-speaks-2"} />
        </TabsContent>
      </Tabs>
    </div>;
};

// Component for Enterprise Resource Matching Conference
const EnterpriseResourceMatching = ({
  active
}: {
  active: boolean;
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <motion.div initial="hidden" animate={active ? "visible" : "hidden"} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img src="/lovable-uploads/7a520d8d-13f7-46ad-9cf2-f346331f5c9b.png" alt="企业资源对接会现场" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">资源对接会</h3>
            <p className="text-sm opacity-90">企业与基层交流平台</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">企业资源对接会</h3>
          <p className="text-gray-600 mb-4">井庄镇选调生立足北京市“百千工程”建设要求，充分发挥自身优势，积极整合内外部资源，通过搭建资源推介平台、提供全流程服务保障、持续跟踪后期意向，推动本地特色资源与市场需求深度对接，为延庆区“醉美井庄”示范片区建设发展注入新动能。</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2024年3月</span>
            
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="flex flex-col justify-between">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-l-4 border-orange-400 pl-3 mb-4">活动成效</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
              <span className="text-gray-700">促成10+合作项目，涵盖文旅、农业等多个领域</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
              <span className="text-gray-700">选调生们结合井庄镇特点及市场需求，制定个性化活动方案，碰撞合作火花</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
              <span className="text-gray-700">建立长效合作机制，持续跟踪回访，建立台账确保资源后续对接落地</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg shadow-sm p-6">
          <h4 className="text-amber-600 font-medium mb-3">参与企业反馈</h4>
          <blockquote className="italic text-gray-700 border-l-2 border-amber-300 pl-4">
            "通过此次资源对接会，我们找到了理想的合作伙伴，为企业在延庆的发展打开了新局面。"
            <footer className="text-sm text-gray-500 mt-2 not-italic">— 某企业负责人</footer>
          </blockquote>
        </div>
      </motion.div>
    </motion.div>;
};

// Component for University Collaboration Activities
const UniversityCollaboration = ({
  active
}: {
  active: boolean;
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <motion.div initial="hidden" animate={active ? "visible" : "hidden"} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img src="/lovable-uploads/3c1eb298-6103-40e8-9d47-c87687cd8c92.png" alt="高校共建活动现场" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">高校共建活动</h3>
            <p className="text-sm opacity-90">走一起·学一起·研一起</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">延庆区选调生 × 清华博士讲师团</h3>
          <p className="text-gray-600 mb-4">高校共建活动是延庆区选调生团队与清华大学博士生讲师团合作开展的文化共建活动，以"走一起、学一起、研一起"为核心理念，通过专题座谈、实践考察、互动交流等形式，增进资源共享、优势互补，促进学术与基层工作的有机结合。</p>
          <div className="flex justify-between items-center">
            
            <span className="text-purple-500 text-sm font-medium">30+ 参与人次</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="flex flex-col justify-between">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 border-l-4 border-purple-400 pl-3 mb-4">活动过程</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
              <span className="text-gray-700">搭建青年学子与基层青年干部的交流平台，涵盖延庆区域历史文化、发展规划等内容</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
              <span className="text-gray-700">实地考察窑湾村"百千工程"建设情况、非遗工作室、乡情村史陈列室和富春山居民宿，开展交流研讨</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
              <span className="text-gray-700">建立长期合作机制，形成井庄镇与清华大学建筑学院讲师团共建合作初步方案</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-sm p-6">
          <h4 className="text-purple-600 font-medium mb-3">参与者感言</h4>
          <blockquote className="italic text-gray-700 border-l-2 border-indigo-300 pl-4">
            "通过此次活动，我们不仅深入了解了延庆的历史文化，更将学术研究与基层实践紧密结合，为乡村振兴贡献了智慧力量。"
            <footer className="text-sm text-gray-500 mt-2 not-italic">— 清华大学博士研究生</footer>
          </blockquote>
        </div>
      </motion.div>
    </motion.div>;
};

// Component for Great Wall Youth Speaks 1
const GreatWallYouthSpeaks = ({
  active
}: {
  active: boolean;
}) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">《长城青年说》</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">《长城青年说》是延庆区选调生团队策划的深入学习贯彻总书记重要回信精神青年主题宣传视频，旨在通过青年视角讲述长城文化、延庆故事，传播正能量，展示青年风采。守护长城，接力传承！为延庆长城文化遗产保护与传承注入青春力量，激发更多青年人投身到基层建设中来。</p>
        
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-3 py-1 bg-yanqingGreen/10 text-yanqingGreen text-sm rounded-full">2024年度品牌活动</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            青春追梦，长城为证
          </span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg bg-gray-100 group">
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
            <button className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-yanqingGreen hover:scale-105 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current" />
            </button>
          </div>
          <img src="/lovable-uploads/2ed41179-543c-48f3-8788-9d30135b8fab.png" alt="长城青年说视频封面" className="w-full h-full object-cover" />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">视频简介</h4>
          <p className="text-gray-600 text-sm">
            本视频展示了《长城青年说》活动的精彩瞬间，记录了青年代表们对长城文化的传承与创新，以及他们在延庆基层建设中的实践与思考。
          </p>
        </div>
      </div>
    </div>;
};

// Component for Great Wall Youth Speaks 2
const GreatWallYouthSpeaks2 = ({
  active
}: {
  active: boolean;
}) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">《长城青年说 2》</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">《长城青年说2》在总书记回信一周年之际，回顾八达岭镇石峡村一年的变化，专注选调生群体为长城脚下和美乡村做出的贡献，传承长城文化，讲好长城故事。聚焦青年在乡村振兴、文化传承等领域的实践和思考，展现新时代青年的担当与作为。</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full">
            青春守望 · 长城故事
          </span>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full">
            创新实践 · 乡村振兴
          </span>
          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
            文化传承 · 延庆印记
          </span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <div className="relative rounded-lg overflow-hidden aspect-video shadow-lg bg-gray-100 group">
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
            <button className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-yanqingGreen hover:scale-105 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current" />
            </button>
          </div>
          <img src="/lovable-uploads/1c932043-eb17-4197-81af-1db6b13f2fcf.png" alt="长城青年说2视频封面" className="w-full h-full object-cover" />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">视频简介</h4>
          <p className="text-gray-600 text-sm">
            《长城青年说2》视频记录了青年们在文化传承与创新中的探索与实践，展示了延庆青年的精神风貌和创造力，彰显了新时代青年的使命担当。
          </p>
        </div>
      </div>
    </div>;
};
export default ResourceShowcase;