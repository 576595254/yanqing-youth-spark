import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const villageData = [{
  id: 1,
  name: "永宁古城遗址",
  period: "明代",
  image: "/lovable-uploads/f10da036-718c-4def-91ee-06a6713666d9.jpg",
  description: "永宁古城遗址位于延庆区城东，为长城防御系统中的军事重镇。永宁古城目前仅存一段约300米的东城墙（现位于永宁古城北门口东侧）及西北角马面（现位于延庆·好物铸造厂北门口）、其他大部分已被拆。",
  coordinates: [116.1723, 40.4982]
}, {
  id: 2,
  name: "上磨村黄龙潭",
  period: "古代水源",
  image: "/lovable-uploads/6943bd7a-958b-4f93-9f13-8e34a923b7d9.png",
  description: "位于永宁镇上磨村。旧时，黄龙潭潭水如沸，外溢西流，与龙湾河汇合，形成延庆的母亲河，这是妫河的主要源头，上磨村又因早年黄龙潭上游水磨安装于此而得名。",
  coordinates: [116.1456, 40.5123]
}, {
  id: 3,
  name: "和平街火神庙",
  period: "清末",
  image: "/lovable-uploads/3da854b6-3783-4d7a-8fab-9b13c9ca7f62.png",
  description: "位于永宁镇和平街村，始建于清末，是一座供奉道教火德真君的庙宇。殿内山墙绘有精美的壁画，生动地描绘出了古代战争的场景，并细致地描绘出了士兵们所使用的武器及用法。",
  coordinates: [116.1598, 40.4876]
}, {
  id: 4,
  name: "永宁玉皇阁",
  period: "明代",
  image: "/lovable-uploads/5196f15f-6f16-43ab-bb8b-b1f31c1df081.jpg",
  description: "明成祖朱棣决定在永宁建县，明宣宗朱瞻基命令薛禄统兵到永宁，率领部下修筑城池。永宁城四边方正，城内布局严谨，城中央建有3层4面、高约20米的标志性建筑—玉皇阁，登临其上，可以俯视整座城池。",
  coordinates: [116.1645, 40.4925]
}];

const treasureImages = [{
  src: "/lovable-uploads/3b6826c4-ff45-46e8-8849-4d5c4e491990.png",
  alt: "延庆古城墙遗址",
  caption: "延庆古城墙遗址"
}, {
  src: "/lovable-uploads/e38bff2f-1797-42bc-b548-660ecf1945c6.png",
  alt: "延庆历史文献资料",
  caption: "延庆历史文献资料"
}];

const VillageHistoryProject = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  // In a real implementation, we would use an actual mapping library like Mapbox or GoogleMaps
  const handleLocationClick = (id: number) => {
    setSelectedLocation(id === selectedLocation ? null : id);
  };

  return <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            
            <DialogTitle className="text-center px-[12px] py-[19px] text-4xl">寻找村落中的历史记忆</DialogTitle>
            <DialogDescription className="text-center">这些承载着地域文明的 "活化石"，亟待被重新看见。</DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="overview">项目概述</TabsTrigger>
              <TabsTrigger value="map">古迹示例</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-1 space-y-6">
              <div className="prose max-w-none">
                <div className="bg-amber-50 p-6 rounded-lg mb-6 border border-amber-200 py-[38px]">
                  <h3 className="text-xl font-bold text-yanqingGreen mb-3">在延庆的古村巷陌间，散落着无数被时光封存的文化密码 —— </h3>
                  <p className="text-gray-700">
                    延庆区拥有丰富的历史文化遗产，但由于城市化进程加快，许多村落中的历史文物和集体记忆正在逐渐消失，它们沉默矗立，却鲜有人知晓其背后的千年故事。延庆区选调生团队以 "寻踪者" 的身份，发起"寻找村落中的历史记忆"项目，开启了一场跨越时空的文化对话。
                  </p>
                </div>
                
                <div className="mb-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {treasureImages.map((img, idx) => <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                        <img src={img.src} alt={img.alt} className="w-full h-auto" />
                        <p className="p-3 text-center text-sm text-gray-700 bg-gray-50">{img.caption}</p>
                      </div>)}
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
                  <h3 className="text-xl font-bold text-yanqingGreen mb-4 mx-[19px]">未来成果运用</h3>
                  <div className="p-4 border rounded-lg">
                    <p className="text-gray-700">未来我们将通过编纂《延庆村落历史记忆》手册，作为延庆区历史文化保护的重要资料。 同时，上线的百度词条等，让这些文化遗产突破地理边界，成为全网可查的 "延庆文化名片"。</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="map" className="p-1 space-y-6">
              
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {villageData.map(location => <div key={location.id} className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${selectedLocation === location.id ? 'ring-2 ring-activeOrange scale-[1.02]' : 'hover:shadow-md'}`} onClick={() => handleLocationClick(location.id)}>
                    <div className="aspect-video overflow-hidden">
                      <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">{location.name}</h4>
                        <span className="bg-gray-100 text-yanqingGreen px-2 py-1 rounded text-xs">
                          {location.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                    </div>
                  </div>)}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      
      <div className="cursor-pointer group" onClick={() => setOpen(true)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 order-2 md:order-1">
            <h3 className="font-bold text-yanqingGreen mb-4 group-hover:text-activeOrange transition-colors text-4xl py-[16px]">
              "寻找村落中的历史记忆"文物古迹集
            </h3>
            <p className="text-gray-600 mb-4 py-[8px]">选调生团队搜集延庆5个乡镇，记录发现文物古迹23处，为保护延庆区历史文化遗产做出重要贡献，并编纂出版《延庆村落历史记忆》手册。</p>
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
              <img src="/lovable-uploads/e38bff2f-1797-42bc-b548-660ecf1945c6.png" alt="北京古籍历史文献" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="w-full p-4 text-white">
                <p className="font-bold">延庆区文物古迹地图</p>
                <p className="text-sm text-white/80">已标记23处历史点位</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default VillageHistoryProject;
