import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
interface Props {
  handleDetailClick: () => void;
  inView: boolean;
}
const RedBookPreview: React.FC<Props> = ({
  handleDetailClick,
  inView
}) => {
  return <div className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Left content */}
        <div className="md:w-1/2 z-10 px-0">
          <h3 className="text-amber-500 text-3xl font-bold mb-4">"小选和她的朋友们"泛生活化文旅种草项目</h3>
          
          <p className="text-gray-700 mb-6">在小红书、抖音打造延庆特色生活内容IP，通过优质的笔记展示延庆自然美景和风土人情。 目前累计阅读量超过2万，是展示选调生面貌和延庆生活的重要窗口。</p>
          
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
              <img alt="长城风光" className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" src="/lovable-uploads/45199c7e-f65a-4d73-9de3-b367f056aaae.png" />
            </div>
            
            {/* RedBook screenshots in a grid */}
            <div className="col-span-3 h-64 relative animate-float">
              <img alt="夜市合集" className="h-full w-full object-cover rounded-lg shadow-lg" src="/lovable-uploads/e5dd07b6-77a5-41ea-afba-cbef1a85bf58.png" />
            </div>
            
            <div className="col-span-3 h-64 relative translate-y-4 animate-float" style={{
            animationDelay: "1s"
          }}>
              <img alt="徒步路线" className="h-full w-full object-cover rounded-lg shadow-lg" src="/lovable-uploads/bfb8f9de-45c4-4357-a14b-c67742997086.png" />
            </div>
            
            <div className="col-span-2 h-48 absolute right-0 -bottom-12 animate-float" style={{
            animationDelay: "1.5s"
          }}>
              <img alt="九眼楼" className="h-full w-full object-cover rounded-lg shadow-lg" src="/lovable-uploads/9a27ad53-5c48-4e1e-9acb-63274d50e5d3.jpg" />
            </div>
            
            <div className="col-span-2 h-44 absolute -left-4 bottom-16 animate-float" style={{
            animationDelay: "0.5s"
          }}>
              <img alt="评论区" className="h-full w-full object-cover rounded-lg shadow-lg" src="/lovable-uploads/4c2ee652-3013-46ac-b1d5-8e0766f04be0.jpg" />
            </div>
          </div>
          
          {/* Hot notes overlay */}
          <div className="absolute bottom-4 left-6 bg-black/70 text-white px-4 py-2 rounded-lg text-sm z-20">
            <p className="font-bold">热门笔记瀑布流</p>
            <p className="text-xs text-white/80">浏览量累计 50,000+</p>
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
    </div>;
};
export default RedBookPreview;