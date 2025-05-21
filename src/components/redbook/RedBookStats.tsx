
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface StatsProps {
  stats: {
    followers: number;
    posts: number;
    monthlyViews: number;
    interaction: number;
  };
  trendData: {
    month: string;
    followers: number;
  }[];
}

const RedBookStats: React.FC<StatsProps> = ({ stats, trendData }) => {
  return (
    <div className="space-y-6 mx-auto max-w-4xl">
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
              {trendData.map((data, idx) => (
                <div key={idx} className="relative flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gray-200 rounded-t-sm" 
                    style={{
                      height: `${data.followers / 20000 * 100}%`,
                      background: `linear-gradient(to top, #008066, #40a08c)`
                    }}
                  ></div>
                  <span className="text-xs mt-1 text-gray-600">{data.month}</span>
                </div>
              ))}
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
    </div>
  );
};

export default RedBookStats;
