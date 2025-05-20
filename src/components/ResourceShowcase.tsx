import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { Building, Video, Play } from 'lucide-react';
const ResourceShowcase = () => {
  const [activeTab, setActiveTab] = useState("enterprise");
  return <div className="mt-10">
      <Tabs defaultValue="enterprise" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-white/90 border p-1 shadow-md">
            <TabsTrigger value="enterprise" className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-4">
              <Building className="w-4 h-4" />
              <span className="hidden sm:inline">企业资源对接会</span>
              <span className="sm:hidden">对接会</span>
            </TabsTrigger>
            <TabsTrigger value="youth-speaks" className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-4">
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">长城青年说</span>
              <span className="sm:hidden">青年说</span>
            </TabsTrigger>
            <TabsTrigger value="youth-speaks-2" className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-4">
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">长城青年说2</span>
              <span className="sm:hidden">青年说2</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="enterprise" className="mt-2">
          <EnterpriseResourceMatching active={activeTab === "enterprise"} />
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
          <p className="text-gray-600 mb-4">
            通过搭建企业与基层的对接平台，促进资源共享与合作，为地方发展注入新活力。资源对接会聚集了各行业优质企业资源，助力延庆区域经济发展和产业升级。
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2024年3月</span>
            <span className="text-orange-500 text-sm font-medium">50+ 企业参与</span>
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
              <span className="text-gray-700">引入3000万元产业投资，助力当地经济发展</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
              <span className="text-gray-700">建立长效合作机制，确保资源持续对接</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg shadow-sm p-6">
          <h4 className="text-amber-600 font-medium mb-3">参与企业反馈</h4>
          <blockquote className="italic text-gray-700 border-l-2 border-amber-300 pl-4">
            "通过此次资源对接会，我们找到了理想的合作伙伴，为企业在延庆的发展打开了新局面。"
            <footer className="text-sm text-gray-500 mt-2 not-italic">— 某科技企业负责人</footer>
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