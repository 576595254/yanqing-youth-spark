
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RedBookIntro from './RedBookIntro';
import RedBookPosts from './RedBookPosts';
import RedBookStats from './RedBookStats';
import RedBookPlan from './RedBookPlan';

interface Post {
  id: number;
  title: string;
  image: string;
  tags: string[];
  url: string;
}

interface PlanData {
  seq: number;
  period: string;
  format: string;
  theme: string;
  keywords: string;
  executor: string;
  team: string;
}

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  redBookPosts: Post[];
  contentPlanData: PlanData[];
  extendedPlanData: PlanData[];
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
  openExternalLink: (url: string) => void;
}

const RedBookDialog: React.FC<Props> = ({
  open, 
  setOpen, 
  activeTab, 
  setActiveTab, 
  redBookPosts, 
  contentPlanData,
  extendedPlanData,
  stats,
  trendData,
  openExternalLink
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">"小选和她的朋友们"泛生活化文旅种草项目</DialogTitle>
          <DialogDescription>延庆区选调生团队运营的社交媒体平台（小红书、抖音），分享延庆风土人情及自然风光</DialogDescription>
        </DialogHeader>
        
        <div className="mb-6">
          <div className="bg-amber-50 p-4 rounded-lg mb-4 border border-amber-200">
            <p className="text-amber-800 font-medium text-center mb-2 text-lg">📷来自天南海北的小选带大家看不一样的延庆</p>
            <p className="text-amber-700 text-center text-sm">— — 延庆文旅的青春叙事</p>
          </div>
        </div>
        
        <Tabs defaultValue="intro" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-6">
            <TabsTrigger value="intro" className="flex-1">项目介绍</TabsTrigger>
            <TabsTrigger value="posts" className="flex-1">热门笔记</TabsTrigger>
            <TabsTrigger value="stats" className="flex-1">账号统计</TabsTrigger>
            <TabsTrigger value="plan" className="flex-1">内容计划</TabsTrigger>
          </TabsList>
          
          <TabsContent value="intro">
            <RedBookIntro />
          </TabsContent>
          
          <TabsContent value="posts">
            <RedBookPosts posts={redBookPosts} openExternalLink={openExternalLink} />
          </TabsContent>
          
          <TabsContent value="stats">
            <RedBookStats stats={stats} trendData={trendData} />
          </TabsContent>
          
          <TabsContent value="plan">
            <RedBookPlan contentPlanData={contentPlanData} extendedPlanData={extendedPlanData} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default RedBookDialog;
