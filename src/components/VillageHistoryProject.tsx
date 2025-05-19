import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const villageData = [
  {
    id: 1,
    name: "岔道古城",
    period: "辽金时期",
    image: "/lovable-uploads/3b6826c4-ff45-46e8-8849-4d5c4e491990.png",
    description: "位于延庆西北部，是辽金时期重要军事要塞，出土陶瓷、兵器等文物，见证了延庆的边疆历史。",
    coordinates: [115.9342, 40.5531],
    discoveryDate: "2023-07-15"
  },
  {
    id: 2,
    name: "慈母川村石碑群",
    period: "明清时期",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/慈母川村石碑群",
    description: "位于慈母川村北侧山坡，保存有明清时期石碑10余块，记录了当地水利、赋税等历史信息。",
    coordinates: [116.0123, 40.4982],
    discoveryDate: "2023-09-22"
  },
  {
    id: 3,
    name: "古长城墩堡遗址",
    period: "明代",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/古长城墩堡遗址",
    description: "延庆段明长城重要军事设施，发现烽火台、墩堡等遗址，为研究明代边防体系提供实物资料。",
    coordinates: [115.8765, 40.5876],
    discoveryDate: "2023-11-05"
  },
  {
    id: 4,
    name: "张山营青铜器窖藏",
    period: "西周",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/张山营青铜器窖藏",
    description: "2024年初在张山营镇发现的西周青铜器窖藏，出土鼎、簋等礼器，表明延庆地区在西周时期的重要地位。",
    coordinates: [115.9876, 40.5123],
    discoveryDate: "2024-01-18"
  }
];

const timelineEvents = [
  { date: "2023年5月", title: "项目启动", description: "成立'寻找村落中的历史记忆'项目组" },
  { date: "2023年7-8月", title: "田野调查", description: "完成延庆区17个乡镇的初步走访" },
  { date: "2023年9-10月", title: "文献整理", description: "收集整理历史资料与口述史" },
  { date: "2023年11月", title: "专家会诊", description: "邀请北京史学专家进行文物鉴定" },
  { date: "2024年1月", title: "数据建库", description: "建立延庆区文物古迹数据库" },
  { date: "2024年3月", title: "成果展览", description: "在区文化中心举办成果展" },
  { date: "2024年5月", title: "手册出版", description: "《延庆村落历史记忆》手册出版" }
];

const treasureImages = [
  {
    src: "/lovable-uploads/3b6826c4-ff45-46e8-8849-4d5c4e491990.png",
    alt: "延庆古城墙遗址",
    caption: "延庆古城墙遗址"
  },
  {
    src: "/lovable-uploads/e38bff2f-1797-42bc-b548-660ecf1945c6.png",
    alt: "延庆历史文献资料",
    caption: "延庆历史文献资料"
  }
];

const VillageHistoryProject = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  
  // In a real implementation, we would use an actual mapping library like Mapbox or GoogleMaps
  const handleLocationClick = (id: number) => {
    setSelectedLocation(id === selectedLocation ? null : id);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="text-center mb-4">
              <img 
                src="/lovable-uploads/f8eeaba7-86e0-4f7c-a612-54e126ccd16b.png" 
                alt="寻找村落中的历史记忆" 
                className="h-16 mx-auto mb-2"
              />
            </div>
            <DialogTitle className="text-2xl text-center">寻找村落中的历史记忆</DialogTitle>
            <DialogDescription className="text-center">
              延庆区选调生团队通过实地调研，记录并保护村落历史文化遗产
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="overview">项目概述</TabsTrigger>
              <TabsTrigger value="map">文物地图</TabsTrigger>
              <TabsTrigger value="timeline">项目时间线</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-1 space-y-6">
              <div className="prose max-w-none">
                <div className="bg-amber-50 p-6 rounded-lg mb-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-yanqingGreen mb-3">在延庆的古村巷陌间，散落着无数被时光封存的文化密码 —— </h3>
                  <p className="text-gray-700">
                    延庆区拥有丰富的历史文化遗产，但由于城市化进程加快，许多村落中的历史文物和集体记忆正在逐渐消失，它们沉默矗立，却鲜有人知晓其背后的千年故事。延庆区选调生团队以 "寻踪者" 的身份，发起"寻找村落中的历史记忆"项目，开启了一场跨越时空的文化对话。
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-yanqingGreen mb-4">项目成果展示</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {treasureImages.map((img, idx) => (
                      <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                        <img src={img.src} alt={img.alt} className="w-full h-auto" />
                        <p className="p-3 text-center text-sm text-gray-700 bg-gray-50">{img.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-yanqingGreen mb-4">进展情况</h3>
                  <p className="text-gray-700 mb-4">
                    现在已经收集延庆镇、永宁镇、康庄镇、张山营镇、刘斌堡乡<span className="text-red-500 font-bold">5个乡镇23处历史遗迹的基础材料</span>。
                    通过走访延庆17个乡镇，已记录发现文物古迹45处，收集口述历史127段，为保护延庆区历史文化遗产做出重要贡献。
                  </p>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">#文化保护</span>
                      <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">#历史调研</span>
                      <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">#乡村记忆</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-yanqingGreen mb-4">项目成果运用</h3>
                  <div className="p-4 border rounded-lg">
                    <p className="text-gray-700">
                      未来我们将通过选调生团队编纂出版《延庆村落历史记忆》手册，作为延庆区历史文化保护的重要资料。
                      同时，通过建立延庆区文物古迹数字档案，为未来的文化遗产保护和文旅产业发展提供了数据支持。
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="map" className="p-1 space-y-6">
              <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">
                    此处将嵌入延庆区地图，显示文物古迹点位
                    <br />
                    （实际项目中将集成地图API）
                  </p>
                  
                  {/* Map markers - in real implementation these would be positioned on a real map */}
                  {villageData.map((location, idx) => (
                    <div 
                      key={idx}
                      className={`absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        selectedLocation === location.id 
                          ? 'bg-activeOrange scale-125 z-20' 
                          : 'bg-yanqingGreen hover:bg-activeOrange'
                      }`}
                      style={{
                        top: `${10 + (idx * 20)}%`,
                        left: `${15 + (idx * 20)}%`,
                      }}
                      onClick={() => handleLocationClick(location.id)}
                    >
                      <span className="text-white text-xs font-bold">{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {villageData.map((location) => (
                  <div 
                    key={location.id} 
                    className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
                      selectedLocation === location.id 
                        ? 'ring-2 ring-activeOrange scale-[1.02]' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleLocationClick(location.id)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={location.image} 
                        alt={location.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">{location.name}</h4>
                        <span className="bg-gray-100 text-yanqingGreen px-2 py-1 rounded text-xs">
                          {location.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>发现日期: {location.discoveryDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="timeline" className="relative p-1">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              <div className="relative space-y-8 py-4">
                {timelineEvents.map((event, idx) => (
                  <div key={idx} className={`flex items-start ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div 
                        className="bg-white shadow-md rounded-lg p-4 transition-all hover:shadow-lg hover:-translate-y-1"
                        style={{ animationDelay: `${idx * 200}ms` }}
                      >
                        <h4 className="text-yanqingGreen font-bold">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="w-4 h-4 bg-activeOrange rounded-full border-4 border-white"></div>
                      <div className="text-xs font-medium text-gray-500 mt-1">{event.date}</div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-center">项目成果</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-yanqingGreen">45</div>
                    <p className="text-sm text-gray-500">发现文物古迹点</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-yanqingGreen">127</div>
                    <p className="text-sm text-gray-500">收集口述历史</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-yanqingGreen">1000+</div>
                    <p className="text-sm text-gray-500">历史照片扫描</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      
      <div className="cursor-pointer group" onClick={() => setOpen(true)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-yanqingGreen mb-4 group-hover:text-activeOrange transition-colors">
              "寻找村落中的历史记忆"文物古迹集
            </h3>
            <p className="text-gray-600 mb-4">
              选调生团队走访延庆17个乡镇，记录发现文物古迹45处，收集口述历史127段，为保护延庆区历史文化遗产做出重要贡献，并编纂出版《延庆村落历史记忆》手册。
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #文化保护
              </span>
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #历史调研
              </span>
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #乡村记忆
              </span>
            </div>
            <div className="flex items-center text-activeOrange font-medium group-hover:translate-x-1 transition-transform">
              <span>查看详情</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow order-1 md:order-2">
            <div className="aspect-[4/3]">
              <img 
                src="/lovable-uploads/03bd8dd8-b2fb-4c4e-b5dc-d98e5d59055e.png"
                alt="延庆文物古迹地图"
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="w-full p-4 text-white">
                <p className="font-bold">延庆区文物古迹地图</p>
                <p className="text-sm text-white/80">已标记45处历史点位</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VillageHistoryProject;
