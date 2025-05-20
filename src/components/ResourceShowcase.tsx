import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { Building, Users, BookText } from 'lucide-react';

const ResourceShowcase = () => {
  const [activeTab, setActiveTab] = useState("enterprise");

  return (
    <div className="mt-10">
      <Tabs defaultValue="enterprise" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-white/90 border p-1 shadow-md">
            <TabsTrigger 
              value="enterprise" 
              className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-4"
            >
              <Building className="w-4 h-4" />
              <span className="hidden sm:inline">企业资源对接会</span>
              <span className="sm:hidden">对接会</span>
            </TabsTrigger>
            <TabsTrigger 
              value="youth-speaks" 
              className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-4"
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">长城青年说</span>
              <span className="sm:hidden">青年说</span>
            </TabsTrigger>
            <TabsTrigger 
              value="youth-speaks-2" 
              className="flex items-center gap-2 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600 py-2 px-4"
            >
              <BookText className="w-4 h-4" />
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
    </div>
  );
};

// Component for Enterprise Resource Matching Conference
const EnterpriseResourceMatching = ({ active }: { active: boolean }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img 
            src="/lovable-uploads/7a520d8d-13f7-46ad-9cf2-f346331f5c9b.png" 
            alt="企业资源对接会现场" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
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
    </motion.div>
  );
};

// Component for Great Wall Youth Speaks
const GreatWallYouthSpeaks = ({ active }: { active: boolean }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">《长城青年说》</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            《长城青年说》是延庆区选调生团队策划的青年主题宣讲活动，旨在通过青年视角讲述长城文化、延庆故事，传播正能量，展示青年风采。活动邀请各行各业的青年代表，分享他们的故事、经验和见解，激发更多青年人投身到基层建设中来。
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-800 mb-2">活动形式</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• 主题宣讲</li>
                <li>• 圆桌对话</li>
                <li>• 青年故事分享</li>
                <li>• 互动交流环节</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-800 mb-2">影响力</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• 覆盖受众 2000+ 人</li>
                <li>• 10+ 场线下活动</li>
                <li>• 5个主题系列</li>
                <li>• 25位青年代表参与</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-end">
            <span className="text-sm bg-yanqingGreen/10 text-yanqingGreen px-3 py-1 rounded-full">
              2023年度品牌活动
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-6">
        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/2ed41179-543c-48f3-8788-9d30135b8fab.png" 
            alt="长城青年说" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h4 className="text-2xl font-bold mb-2">长城青年说</h4>
              <p className="text-sm opacity-90">青年讲述长城故事</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yanqingGreen/10 to-yanqingGreen/5 p-5 rounded-lg shadow-sm">
          <h4 className="text-yanqingGreen font-medium mb-3">活动口号</h4>
          <p className="text-lg font-semibold text-center text-gray-700">
            "青春追梦，长城为证"
          </p>
        </div>
      </div>
    </div>
  );
};

// Component for Great Wall Youth Speaks 2
const GreatWallYouthSpeaks2 = ({ active }: { active: boolean }) => {
  return (
    <div className="space-y-8">
      <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-80">
        <img 
          src="/lovable-uploads/1c932043-eb17-4197-81af-1db6b13f2fcf.png" 
          alt="长城青年说2" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="p-8 text-white max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">长城青年说2</h3>
            <p className="text-lg opacity-90">青春传承 文化新声</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">活动升级与创新</h3>
            <p className="text-gray-600 mb-6">
              《长城青年说2》在前一季度成功的基础上，进行了全面升级和创新，引入更多互动元素，拓展传播渠道，增强活动影响力和参与度。活动聚焦青年在乡村振兴、文化传承等领域的实践和思考，展现新时代青年的担当与作为。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-orange-50 p-5 rounded-md">
                <h4 className="font-medium text-orange-700 mb-3">创新亮点</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs mr-2 mt-0.5">1</span>
                    <span className="text-gray-700">引入新媒体直播，扩大线上影响</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs mr-2 mt-0.5">2</span>
                    <span className="text-gray-700">增设"长城守护者"专题系列</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs mr-2 mt-0.5">3</span>
                    <span className="text-gray-700">推出"青年创意大赛"环节</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yanqingGreen/10 p-5 rounded-md">
                <h4 className="font-medium text-yanqingGreen mb-3">成果展示</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">活动场次</span>
                    <span className="font-medium text-gray-900">15场</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yanqingGreen h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">参与人数</span>
                    <span className="font-medium text-gray-900">3500+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yanqingGreen h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">线上传播</span>
                    <span className="font-medium text-gray-900">10万+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yanqingGreen h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <blockquote className="italic text-gray-700 border-l-4 border-yanqingGreen pl-4 py-2">
              "《长城青年说》第二季进一步彰显了青年的使命担当，传递了厚重的长城文化，展现了延庆青年的精神风貌。"
            </blockquote>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h4 className="font-bold text-gray-800 mb-3 text-lg">活动主题</h4>
              <div className="space-y-3">
                <div className="bg-amber-50 p-3 rounded-md">
                  <p className="text-amber-700 font-medium">青春守望 · 长城故事</p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-md">
                  <p className="text-emerald-700 font-medium">创新实践 · 乡村振兴</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-md">
                  <p className="text-purple-700 font-medium">文化传承 · 延庆印记</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-blue-700 font-medium">青年担当 · 时代使命</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 rounded-lg shadow-lg">
            <h4 className="font-medium mb-3 text-amber-400">2024年度</h4>
            <p className="text-lg font-bold mb-2">下一季预告</p>
            <p className="text-sm opacity-90 mb-4">
              《长城青年说3》将以"科技创新与传统文化融合"为主题，敬请期待！
            </p>
            <div className="text-right">
              <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 text-sm rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceShowcase;
