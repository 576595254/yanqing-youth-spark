
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RedBookPostsTab from './RedBookPostsTab';
import RedBookStatsTab from './RedBookStatsTab';
import RedBookPlanTab from './RedBookPlanTab';
import { RedBookPost } from './RedBookPostCard';
import { ContentPlanItem } from './RedBookPlanTab';

interface RedBookDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  redBookPosts: RedBookPost[];
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
  contentPlanData: ContentPlanItem[];
}

const RedBookDialog: React.FC<RedBookDialogProps> = ({ 
  open, 
  setOpen, 
  activeTab, 
  setActiveTab, 
  redBookPosts,
  stats,
  trendData,
  contentPlanData
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl">
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
        
        <Tabs defaultValue="posts" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-6">
            <TabsTrigger value="posts">热门笔记</TabsTrigger>
            <TabsTrigger value="stats">数据驾驶舱</TabsTrigger>
            <TabsTrigger value="plan">内容计划</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="p-1">
            <RedBookPostsTab posts={redBookPosts} />
          </TabsContent>
          
          <TabsContent value="stats" className="space-y-6">
            <RedBookStatsTab stats={stats} trendData={trendData} />
          </TabsContent>
          
          <TabsContent value="plan" className="space-y-6">
            <RedBookPlanTab contentPlanData={contentPlanData} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default RedBookDialog;
