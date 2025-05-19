
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RedBookPost } from './RedBookPostCard';

interface RedBookProjectPreviewProps {
  redBookPosts: RedBookPost[];
  handleDetailClick: () => void;
}

const RedBookProjectPreview: React.FC<RedBookProjectPreviewProps> = ({ redBookPosts, handleDetailClick }) => {
  return (
    <div className="cursor-pointer group">
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
          <button
            onClick={handleDetailClick}
            className="flex items-center text-activeOrange font-medium group-hover:translate-x-1 transition-transform"
          >
            <span>查看详情</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
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
  );
};

export default RedBookProjectPreview;
