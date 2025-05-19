import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';

const redBookPosts = [
  {
    id: 1,
    title: "探访延庆世园会遗址公园",
    image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/小红书1",
    likes: 328,
    comments: 42,
    views: 12580,
    tags: ["延庆风光", "世园会", "旅游推荐"]
  },
  {
    id: 2,
    title: "零用工平台入户调研实录",
    image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/小红书2",
    likes: 256,
    comments: 37,
    views: 9650,
    tags: ["乡村振兴", "零用工", "基层工作"]
  },
  {
    id: 3,
    title: "延庆非遗面人技艺传承人专访",
    image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/小红书3",
    likes: 412,
    comments: 67,
    views: 15320,
    tags: ["非物质文化遗产", "传统技艺", "延庆文化"]
  },
  {
    id: 4,
    title: "选调生村落调研日志",
    image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/小红书4",
    likes: 189,
    comments: 29,
    views: 7520,
    tags: ["选调生日常", "基层实践", "乡村振兴"]
  },
];

const RedBookProject = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");
  
  const stats = {
    followers: 18750,
    posts: 87,
    monthlyViews: 138500,
    interaction: 4.8
  };
  
  const trendData = [
    { month: '1月', followers: 12500 },
    { month: '2月', followers: 13200 },
    { month: '3月', followers: 14800 },
    { month: '4月', followers: 16300 },
    { month: '5月', followers: 17600 },
    { month: '6月', followers: 18750 }
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">小红书账号"小选和她的朋友们"</DialogTitle>
            <DialogDescription>
              延庆区选调生团队运营的官方社交媒体平台，分享延庆风土人情及选调生基层工作
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="posts" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="posts">热门笔记</TabsTrigger>
              <TabsTrigger value="stats">数据驾驶舱</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="p-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {redBookPosts.map((post) => (
                  <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">{post.title}</h4>
                      <div className="flex justify-between text-sm text-gray-500 mb-3">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                        <span>👁️ {post.views}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">粉丝数</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.followers}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">笔记数</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.posts}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">月浏览量</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.monthlyViews}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">互动率 (%)</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.interaction}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-bold mb-4">粉丝增长趋势</h4>
                <div className="h-60 w-full">
                  <div className="flex h-full items-end space-x-2">
                    {trendData.map((data, idx) => (
                      <div key={idx} className="relative flex-1 flex flex-col items-center">
                        <div className="w-full bg-gray-200 rounded-t-sm" style={{ 
                          height: `${(data.followers / 20000) * 100}%`,
                          background: `linear-gradient(to top, #008066, #40a08c)` 
                        }}></div>
                        <span className="text-xs mt-1 text-gray-600">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-bold mb-4">热门标签</h4>
                <div className="flex flex-wrap gap-3">
                  {["乡村振兴", "延庆风光", "选调生日常", "非遗传承", "零用工平台", "长城文化", "基层实践", "世园公园", "延庆美食", "生态保护"].map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block px-3 py-1 rounded-full text-white font-medium"
                      style={{
                        backgroundColor: `hsl(${(idx * 36) % 360}, 80%, 40%)`,
                        fontSize: `${Math.max(0.7, Math.random() * 0.4 + 0.8)}rem`,
                        transform: `rotate(${Math.random() * 6 - 3}deg)`
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      
      <div className="cursor-pointer group" onClick={() => setOpen(true)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-yanqingGreen mb-4 group-hover:text-activeOrange transition-colors">
              小红书账号"小选和她的朋友们"运营
            </h3>
            <p className="text-gray-600 mb-4">
              打造延庆特色生活内容IP，通过优质的笔记展示延庆风土人情和选调生工作。目前已累计18000+粉丝，月均浏览量超过10万，是展示选调生工作和延庆生活的重要窗口。
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #IP运营
              </span>
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #内容创作
              </span>
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #延庆宣传
              </span>
            </div>
            <div className="flex items-center text-activeOrange font-medium group-hover:translate-x-1 transition-transform">
              <span>查看详情</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-2 gap-1 h-full">
              {redBookPosts.slice(0, 4).map((post, idx) => (
                <div key={idx} className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="w-full p-4 text-white">
                <p className="font-bold">热门笔记瀑布流</p>
                <p className="text-sm text-white/80">浏览量累计 100,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedBookProject;
