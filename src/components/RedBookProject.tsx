import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, Heart, MessageSquare, Eye, Award } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const redBookPosts = [{
  id: 1,
  title: "探访延庆世园会遗址公园",
  image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/小红书1",
  likes: 328,
  comments: 42,
  views: 12580,
  tags: ["延庆风光", "世园会", "旅游推荐"]
}, {
  id: 2,
  title: "零用工平台入户调研实录",
  image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/小红书2",
  likes: 256,
  comments: 37,
  views: 9650,
  tags: ["乡村振兴", "零用工", "基层工作"]
}, {
  id: 3,
  title: "延庆非遗面人技艺传承人专访",
  image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/小红书3",
  likes: 412,
  comments: 67,
  views: 15320,
  tags: ["非物质文化遗产", "传统技艺", "延庆文化"]
}, {
  id: 4,
  title: "北京延庆夜市合集",
  image: "https://placeholder.pics/svg/300x400/DEDEDE/555555/夜市合集",
  likes: 486,
  comments: 57,
  views: 18720,
  tags: ["延庆美食", "夜市", "美食攻略"]
}];
const contentPlanData = [{
  seq: 1,
  period: "7月上旬",
  format: "图文",
  theme: "夜市合集（一）",
  keywords: "四海夜市、刘建堡夜市、康庄夜市等",
  executor: "李翊",
  team: "一组"
}, {
  seq: 2,
  period: "7月下旬",
  format: "图文",
  theme: "夜市合集（二）",
  keywords: "司家营夜市、恒王、延陵等",
  executor: "段非凡",
  team: "二组"
}, {
  seq: 3,
  period: "8月上旬",
  format: "图文",
  theme: "延庆区红色旅游景点",
  keywords: "骑行、滦河北路、雁栖铺子",
  executor: "黄蓉莉",
  team: "一组"
}, {
  seq: 4,
  period: "8月下旬",
  format: "视频",
  theme: "恒王市场、延陵公社",
  keywords: "恒王市场、延陵公社",
  executor: "王耀正",
  team: "二组"
}, {
  seq: 5,
  period: "9月上旬",
  format: "图文",
  theme: "咖啡合集（一）",
  keywords: "咖啡合集",
  executor: "罗浩",
  team: "一组"
}, {
  seq: 6,
  period: "9月下旬",
  format: "图文",
  theme: "咖啡合集（二）",
  keywords: "咖啡合集",
  executor: "张文怡",
  team: "三组"
}, {
  seq: 7,
  period: "10月上旬",
  format: "图文",
  theme: "秋日 晚霞 橙色",
  keywords: "秋日 晚霞 橙色",
  executor: "杨冰",
  team: "二组"
}, {
  seq: 8,
  period: "10月下旬",
  format: "图文",
  theme: "稻田成熟",
  keywords: "稻田成熟",
  executor: "徐文建",
  team: "三组"
}];
const extendedPlanData = [{
  seq: 9,
  period: "11月上旬",
  format: "视频",
  theme: "永宁古城",
  keywords: "永宁古城",
  executor: "文伟",
  team: "三组"
}, {
  seq: 10,
  period: "11月下旬",
  format: "视频",
  theme: "古韵龙湾雪景",
  keywords: "古韵龙湾雪景",
  executor: "李翊",
  team: "一组"
}, {
  seq: 11,
  period: "12月上旬",
  format: "视频",
  theme: "石京龙滑雪",
  keywords: "石京龙滑雪",
  executor: "段非凡",
  team: "二组"
}, {
  seq: 12,
  period: "12月下旬",
  format: "视频",
  theme: "世园冰雪嘉年华",
  keywords: "世园冰雪嘉年华",
  executor: "黄蓉莉",
  team: "一组"
}];
const RedBookProject = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("intro");
  const { ref: animationRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const stats = {
    followers: 20000,
    posts: 87,
    monthlyViews: 100000,
    interaction: 4.8
  };
  
  const trendData = [{
    month: '1月',
    followers: 12500
  }, {
    month: '2月',
    followers: 13200
  }, {
    month: '3月',
    followers: 14800
  }, {
    month: '4月',
    followers: 16300
  }, {
    month: '5月',
    followers: 17600
  }, {
    month: '6月',
    followers: 18000
  }];
  
  const handleDetailClick = () => {
    setOpen(true);
  };
  
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">小红书账号"小选和她的朋友们"</DialogTitle>
            <DialogDescription>
              延庆区选调生团队运营的官方社交媒体平台，分享延庆风土人情及选调生基层工作
            </DialogDescription>
          </DialogHeader>
          
          <div className="mb-6">
            <div className="bg-amber-50 p-4 rounded-lg mb-4 border border-amber-200">
              <p className="text-amber-800 font-medium text-center text-lg mb-2">
                一群来自大南海北的小选带大家看不一样的延庆
              </p>
              <p className="text-amber-700 text-sm text-center">
                账号Slogan
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="intro" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 w-full mb-6">
              <TabsTrigger value="intro">项目介绍</TabsTrigger>
              <TabsTrigger value="posts">热门笔记</TabsTrigger>
              <TabsTrigger value="stats">数据驾驶舱</TabsTrigger>
              <TabsTrigger value="plan">内容计划</TabsTrigger>
            </TabsList>
            
            <TabsContent value="intro" className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-yanqingGreen">延庆区2022届选调生"小选与她的朋友们"泛生活化文旅种草项目</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">项目起因</h4>
                    <p className="text-gray-700">
                      为了更好地宣传延庆区的文化旅游资源，展示选调生团队的基层工作成果，同时为延庆区居民和游客提供优质的旅游咨询和文旅体验，我们创建了"小选与她的朋友们"小红书账号，致力于打造一个生动展现延庆风土人情和选调生工作的社交媒体平台。
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">项目经过</h4>
                    <p className="text-gray-700 mb-3">
                      团队成员分工合作，充分挖掘延庆区的文化旅游亮点，通过精心策划和制作高质量的图文和视频内容，定期更新在小红书平台上。我们采用项目化管理模式，将团队分为多个小组，每组负责不同主题的内容创作，确保内容的多样性和持续更新。
                    </p>
                    <p className="text-gray-700">
                      在运营过程中，我们注重选题的策划和内容质量��主打真诚体验派、活力年轻化、干货生活化的风格，深入挖掘延庆本地文化和风景特色，为读者提供真实的旅游攻略和文化体验。
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">项目成果</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-medium text-green-700 mb-2">用户增长</h5>
                        <p className="text-gray-700">
                          账号从创建至今已累计吸引超过18,000名粉丝，月均浏览量超过10万，单条笔记最高获得1万+阅读量，互动率高达4.8%，远超平台平均水平。
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h5 className="font-medium text-blue-700 mb-2">内容成果</h5>
                        <p className="text-gray-700">
                          已发布87篇优质笔记，覆盖延庆区的美食、景点、文化活动等多个方面，成功打造了多个系列内容，如"夜市合集"、"咖啡合集"、"四季风景"等，获得用户广泛好评。
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 md:col-span-2">
                        <h5 className="font-medium text-purple-700 mb-2">社会影响</h5>
                        <p className="text-gray-700">
                          通过平台影响力，成功推广了延庆区的旅游资源和文化活动，促进了当地旅游业的发展，同时展示了选调生团队的工作成果和基层风采，增强了公众对基层工作的了解和认同。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="posts" className="p-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {redBookPosts.map(post => <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">{post.title}</h4>
                      <div className="flex justify-between text-sm text-gray-500 mb-3">
                        <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> {post.likes}</span>
                        <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-1" /> {post.comments}</span>
                        <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> {post.views}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, idx) => <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            #{tag}
                          </span>)}
                      </div>
                    </div>
                  </div>)}
              </div>
            </TabsContent>
            
            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">粉丝数</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.followers}+</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">笔记数</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.posts}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">月浏览量</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.monthlyViews}+</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <h4 className="text-sm text-gray-500">互动率 (%)</h4>
                  <p className="text-2xl font-bold text-yanqingGreen">{stats.interaction}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-bold mb-4">粉丝增长趋势</h4>
                  <div className="h-60 w-full">
                    <div className="flex h-full items-end space-x-2">
                      {trendData.map((data, idx) => <div key={idx} className="relative flex-1 flex flex-col items-center">
                          <div className="w-full bg-gray-200 rounded-t-sm" style={{
                        height: `${data.followers / 20000 * 100}%`,
                        background: `linear-gradient(to top, #008066, #40a08c)`
                      }}></div>
                          <span className="text-xs mt-1 text-gray-600">{data.month}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-bold mb-4">账号定位</h4>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-medium w-20 shrink-0 text-center">投放渠道</div>
                      <div className="flex-1">小红书、抖音</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-medium w-20 shrink-0 text-center">账号定位</div>
                      <div className="flex-1">热爱家乡山水、大自然的一枚新晋打工仔（可扩展……）</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-medium w-20 shrink-0 text-center">热搜词</div>
                      <div className="flex-1">乡村振兴、农村小院、文旅、美丽乡村、京郊周边、旅游攻略等等</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-bold mb-4">目标用户画像</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="bg-yanqingGreen/20 text-yanqingGreen px-3 py-1 rounded-lg text-sm font-medium w-20 shrink-0 text-center">用户年龄</div>
                    <div className="flex-1">18-50岁</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-yanqingGreen/20 text-yanqingGreen px-3 py-1 rounded-lg text-sm font-medium w-20 shrink-0 text-center">用户地域</div>
                    <div className="flex-1">北京、河北等周边</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-yanqingGreen/20 text-yanqingGreen px-3 py-1 rounded-lg text-sm font-medium w-20 shrink-0 text-center">用户特征</div>
                    <div className="flex-1">北京地区周末短途出游、家庭亲子游、白领团建等</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="plan" className="space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-yanqingGreen" />
                  内容发布计划
                </h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>序列</TableHead>
                        <TableHead>发布时期</TableHead>
                        <TableHead>形式</TableHead>
                        <TableHead>主题及关键词</TableHead>
                        <TableHead>执行导演</TableHead>
                        <TableHead>组别</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[...contentPlanData, ...extendedPlanData].map(item => <TableRow key={item.seq}>
                          <TableCell>{item.seq}</TableCell>
                          <TableCell>{item.period}</TableCell>
                          <TableCell>{item.format}</TableCell>
                          <TableCell>
                            <div className="font-medium">{item.theme}</div>
                            <div className="text-xs text-gray-500">关键词: {item.keywords}</div>
                          </TableCell>
                          <TableCell>{item.executor}</TableCell>
                          <TableCell>{item.team}</TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yanqingGreen" />
                  主要运营内容及选题
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-yanqingGreen pl-4 py-1">
                    <h5 className="font-bold text-yanqingGreen mb-2">主旨</h5>
                    <p className="text-gray-700">
                      以延庆乡村为主要拍摄对象，深挖本地生活；吃喝玩乐游，延庆本地四季风景、美食小吃、人文故事。观察近处的生活趣事，以平易导常的通俗语言分享游玩、旅行的真实感受。
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yanqingGreen pl-4 py-1">
                    <h5 className="font-bold text-yanqingGreen mb-2">主要内容</h5>
                    <p className="text-gray-700 mb-2">
                      账号中可以提供旅游攻略、路线分享、出行注意事项等等方面的笔记，同一点位也可以多素材重复打磨。例如图文给出攻略、视频讲述当地文化故事。
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yanqingGreen pl-4 py-1">
                    <h5 className="font-bold text-yanqingGreen mb-2">形式</h5>
                    <p className="text-gray-700">
                      通过对旅行目的地的深入探索和细致分享，给读者提供资讯价值，并通过摄影配图、拍摄文化故事等，给读者提供情绪价值。
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yanqingGreen pl-4 py-1">
                    <h5 className="font-bold text-yanqingGreen mb-2">系列更新选题</h5>
                    <p className="text-gray-700">
                      "春夏秋冬"系列、野外徒步系列、周末出逃系列、赏花系列、钓鱼系列、美食测评系列等等
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-bold mb-4">后期运行</h4>
                <p className="text-gray-700">
                  执行导演（ED，相当于主要策划人），负责统筹安排整期全流程直至发布。形式若为视频，则由ED来撰写脚本，若为图文，由ED定整体的风格和文案，全组人员配合统筹，有需要大家一起再协调。若有特别想提前拍摄的内容及时沟通，调整计划。
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      
      <div 
        ref={animationRef} 
        className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-700 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6 relative">
          {/* Left content */}
          <div className="md:w-1/2 z-10">
            <h3 className="text-amber-500 text-3xl font-bold mb-4">小红书账号"小选和她的朋友们"</h3>
            
            <p className="text-gray-700 mb-6">
              打造延庆特色生活内容IP，通过优质的笔记展示延庆自然美景和风土人情。
              目前累计阅读量超过2万，是展示选调生工作和延庆生活的重要窗口。
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                #IP运营
              </span>
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                #内容创作
              </span>
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                #延庆宣传
              </span>
            </div>
            
            <button 
              onClick={handleDetailClick} 
              className="flex items-center text-amber-500 font-medium hover:text-amber-600 transition-all group"
            >
              <span>查看详情</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right content - Images Grid with Animation */}
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-3 gap-3 transform rotate-2 transition-all hover:rotate-0 duration-300">
              {/* Main image - Great Wall */}
              <div className="col-span-3 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-40 relative">
                <img 
                  src="/lovable-uploads/ec27b2ec-2da7-44b9-88b7-98e65c57bdd3.png" 
                  alt="长城风光" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              {/* Smaller redbook posts in a grid */}
              <div className="col-span-2 row-span-2 h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <Carousel className="w-full h-full">
                  <CarouselContent className="h-full">
                    {redBookPosts.slice(0, 3).map((post, idx) => (
                      <CarouselItem key={idx} className="h-full">
                        <div className="h-full relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-medium">{post.title}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute top-5 right-0 bg-white/95 rounded-lg shadow-lg p-4 transform -translate-y-6 translate-x-4 z-20 w-40 animate-float">
                <div className="flex flex-col items-center">
                  <div className="text-green-600 font-bold">
                    <div className="text-sm text-gray-500">小红书粉丝量</div>
                    <div className="text-2xl">20000+</div>
                  </div>
                  
                  <div className="mt-3 text-green-600 font-bold">
                    <div className="text-sm text-gray-500">文物古迹收录</div>
                    <div className="text-2xl">23处</div>
                  </div>
                </div>
              </div>
              
              {/* Additional small image */}
              <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center p-2">
                  <p className="text-xs text-gray-500">小红书1</p>
                </div>
              </div>
            </div>
            
            {/* Hot notes overlay */}
            <div className="absolute bottom-4 left-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
              <p className="font-bold">热门笔记瀑布流</p>
              <p className="text-xs text-white/80">浏览量累计 100,000+</p>
            </div>
          </div>
        </div>
        
        {/* Project Introduction - Mobile version */}
        <div className="mt-8 md:hidden">
          <Card className="bg-gradient-to-r from-amber-50 to-white border-amber-100">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-amber-600 mb-2">"小选和她的朋友们"——延庆文旅的青春故事</h4>
              <p className="text-gray-600 text-sm">
                在延庆的青山绿水间，蕴藏许多不为人知的美好角落。如何让这些美景、美食与人文故事被更多人看见？带着这样的初衷，"小选和她的朋友们"诞生了。这是一群选调生以青春之名，为延庆文旅书写的生动注脚。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RedBookProject;
