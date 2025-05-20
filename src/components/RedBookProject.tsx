import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, Heart, MessageSquare, Eye, Award } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from 'react-intersection-observer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const redBookPosts = [{
  id: 1,
  title: "探访延庆世园会遗址公园",
  image: "/lovable-uploads/992f8713-6679-4558-a19c-69c64d05185e.png",
  likes: 328,
  comments: 42,
  views: 12580,
  tags: ["延庆风光", "世园会", "旅游推荐"]
}, {
  id: 2,
  title: "零用工平台入户调研实录",
  image: "/lovable-uploads/c35f183a-d9f1-44bf-b911-54d049f4aac6.png",
  likes: 256,
  comments: 37,
  views: 9650,
  tags: ["乡村振兴", "零用工", "基层工作"]
}, {
  id: 3,
  title: "延庆非遗面人技艺传承人专访",
  image: "/lovable-uploads/5ec1b8d6-523c-47a0-a427-67d2f394cd41.png",
  likes: 412,
  comments: 67,
  views: 15320,
  tags: ["非物质文化遗产", "传统技艺", "延庆文化"]
}, {
  id: 4,
  title: "北京延庆夜市合集",
  image: "/lovable-uploads/de705909-cce1-48d6-a9e4-29c35f0fe7d0.png",
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
  const {
    ref: animationRef,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.1
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
  return <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">"小选和她的朋友们"泛生活化文旅种草项目</DialogTitle>
            <DialogDescription>延庆区选调生团队运营的社交媒体平台，分享延庆风土人情及自然风光</DialogDescription>
          </DialogHeader>
          
          <div className="mb-6">
            <div className="bg-amber-50 p-4 rounded-lg mb-4 border border-amber-200">
              <p className="text-amber-800 font-medium text-center text-lg mb-2">
                一群来自大南海北的小选带大家看不一样的延庆
              </p>
              <p className="text-amber-700 text-sm text-center">— — 延庆文旅的青春叙事</p>
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
                <article className="space-y-6">
                  <div className="relative pl-5 border-l-4 border-amber-400">
                    <p className="text-gray-700 leading-relaxed">
                      在延庆的青山绿水间，藏着许多不为人知的美好角落。如何让这些美景、美食与人文故事被更多人看见？带着这样的初衷，"小选和她的朋友们" 诞生了。这是一群选调生以青春之名，为延庆文旅书写的生动注脚。
                    </p>
                  </div>
                  
                  <div className="bg-teal-50/50 p-5 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="h-8 w-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-2">1</span>
                      缘起： "拉力" 与 "推力" 下的应运而生
                    </h4>
                    
                    <div className="pl-10 mb-4">
                      <h5 className="font-medium text-teal-700 mb-2">组织 "拉力"：项目化培养的契机</h5>
                      <p className="text-gray-700 leading-relaxed">
                        组织部门在选调生群体培养中，提出 "项目化" 要求，鼓励我们落地实际项目，以此提升实践能力与创造力。这一要求如同强劲的拉力，牵引着我们在基层探索创新，寻找能将所学与实践紧密结合的方向，为 "小选和她的朋友们" 的诞生提供了土壤与契机。
                      </p>
                    </div>
                    
                    <div className="pl-10">
                      <h5 className="font-medium text-teal-700 mb-2">个人 "推力"：热爱与优势的驱动</h5>
                      <p className="text-gray-700 leading-relaxed">
                        延庆有着四季如画的风景、充满烟火气的夜市、小众却迷人的徒步路线。但这些美好，却少了一个年轻视角的讲述者。我们想，为何不用新媒体的方式，让延庆的文旅魅力触达更多人？于是，"小选和她的朋友们" 应运而生，以小红书、抖音为窗口，用图文和视频记录在延庆生活的点点滴滴。加之我们自身具备拍摄、记录等兴趣优势，这份用镜头和文字展现延庆独特魅力的愿望，如同有力的推力，促使我们行动起来，以新媒体为媒介，开启了 "小选和她的朋友们" 这一项目。
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 p-5 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mr-2">2</span>
                      意义：搭建文旅与年轻群体的桥梁
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      在快节奏的都市生活中，人们渴望周末能有一处放松之地。"小选和她的朋友们" 专注于挖掘延庆的泛生活化文旅场景，无论是夜市里的烟火气，还是长城脚下的徒步秘境，都以真诚体验派的风格呈现。我们希望通过这种年轻化、干货生活化的表达，让更多人发现延庆的魅力，为乡村旅游注入新活力，也为延庆文旅在新媒体时代的传播探索新路径。
                    </p>
                  </div>
                  
                  <div className="bg-teal-50/50 p-5 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <span className="h-8 w-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-2">3</span>
                      成果：用青春笔触绘就文旅新篇
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      如今，"小选和她的朋友们" 已成为展示延庆的一张新名片。发布的夜市合集、徒步路线等内容，吸引了众多用户的关注与互动。从 "夜市 City 不 City" 的热闹，到 "长城脚下的秘境之地" 的宁静，每一篇笔记都带着对这片土地的热爱。账号阅读量不断突破，互动量持续增长，越来越多的人因为这些分享，开始走进延庆，感受它的独特魅力。这不仅是一个账号的成长，也成为了选调生们独一无二的成长印记。
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                      <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
                        <div className="font-bold text-center text-yanqingGreen text-2xl">20,000+</div>
                        <div className="text-center text-gray-600 text-sm">粉丝数量</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
                        <div className="font-bold text-center text-yanqingGreen text-2xl">87</div>
                        <div className="text-center text-gray-600 text-sm">发布笔记</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
                        <div className="font-bold text-center text-yanqingGreen text-2xl">10万+</div>
                        <div className="text-center text-gray-600 text-sm">月均浏览量</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-white to-amber-50/30 p-5 rounded-lg border border-amber-100/50">
                    <p className="text-gray-700 leading-relaxed italic border-l-4 border-amber-300 pl-4">
                      未来，"小选和她的朋友们" 将继续以脚步丈量延庆的美好，用镜头和文字讲述更多故事，让这片土地的魅力被更多人看见，为延庆文旅的发展贡献青春力量。
                    </p>
                  </div>
                </article>
              </div>
            </TabsContent>
            
            <TabsContent value="posts" className="p-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {redBookPosts.map(post => <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full transition-transform hover:scale-105 duration-300 object-cover" />
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
      
      <div ref={animationRef} className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row gap-6 relative">
          {/* Left content */}
          <div className="md:w-1/2 z-10 px-0">
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
            
            <button onClick={handleDetailClick} className="flex items-center text-amber-500 font-medium hover:text-amber-600 transition-all group">
              <span>查看详情</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right content - Real RedBook Screenshots with Animation */}
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-6 gap-3">
              {/* Main image - Great Wall */}
              <div className="col-span-6 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-40 relative">
                <img alt="长城风光" src="/lovable-uploads/367cd307-0da7-46af-a650-4dd62767ad99.jpg" className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" />
              </div>
              
              {/* RedBook screenshots in a grid */}
              <div className="col-span-3 h-64 relative animate-float">
                <img src="/lovable-uploads/c35f183a-d9f1-44bf-b911-54d049f4aac6.png" alt="夜市合集" className="h-full w-full object-cover rounded-lg shadow-lg" />
              </div>
              
              <div className="col-span-3 h-64 relative translate-y-4 animate-float" style={{
              animationDelay: "1s"
            }}>
                <img src="/lovable-uploads/992f8713-6679-4558-a19c-69c64d05185e.png" alt="徒步路线" className="h-full w-full object-cover rounded-lg shadow-lg" />
              </div>
              
              <div className="col-span-2 h-48 absolute right-0 -bottom-12 animate-float" style={{
              animationDelay: "1.5s"
            }}>
                <img src="/lovable-uploads/ccb6dbce-175a-4df3-9130-333395b40c03.png" alt="九眼楼" className="h-full w-full object-cover rounded-lg shadow-lg" />
              </div>
              
              <div className="col-span-2 h-44 absolute -left-4 bottom-16 animate-float" style={{
              animationDelay: "0.5s"
            }}>
                <img src="/lovable-uploads/5ec1b8d6-523c-47a0-a427-67d2f394cd41.png" alt="评论区" className="h-full w-full object-cover rounded-lg shadow-lg" />
              </div>
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
            
            {/* Hot notes overlay */}
            <div className="absolute bottom-4 left-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm z-20">
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
    </>;
};
export default RedBookProject;