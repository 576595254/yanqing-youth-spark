
export interface ResearchReport {
  title: string;
  coverImage: string;
  summary: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  url?: string;
}

export const researchReports: ResearchReport[] = [
  {
    title: "\"电商直播+\"拓展乡村振兴新路径",
    coverImage: "/lovable-uploads/7d931bb3-fe53-4aea-b6d1-6fa271fa1bc3.jpg",
    summary: "本研究探讨了电商直播如何成为拓展乡村振兴的新路径，通过分析电商直播带动农产品销售的成功案例，总结出可复制推广的经验和方法，为打造乡村振兴新模式提供实践参考。",
    author: "延庆区选调生调研组",
    date: "2024-03-15",
    category: "产业振兴",
    tags: ["电商直播", "乡村振兴", "农产品营销", "产业发展"]
  },
  {
    title: "\"两山\"转化助推农村集体经济发展的思考与研究",
    coverImage: "/lovable-uploads/95177ee8-a812-4aa3-9af2-0388dd6443b3.jpg",
    summary: "基于\"绿水青山就是金山银山\"理念，本研究分析了如何将生态环境优势转化为经济发展优势，探索农村集体经济绿色发展新路径，提出了构建可持续发展模式的政策建议。",
    author: "延庆区农村经济研究组",
    date: "2024-02-10",
    category: "生态经济",
    tags: ["两山理论", "集体经济", "绿色发展", "生态保护"]
  },
  {
    title: "聚焦\"育管用\"抓实抓细选调生培养管理",
    coverImage: "/lovable-uploads/4c2ee652-3013-46ac-b1d5-8e0766f04be0.jpg",
    summary: "本报告通过问卷调查和深度访谈，分析了当前选调生培养管理中存在的问题，提出了以\"育、管、用\"为核心的系统培养模式，为完善选调生制度提供了理论依据和实践指导。",
    author: "延庆区人才管理课题组",
    date: "2024-04-25",
    category: "人才培养",
    tags: ["选调生", "人才管理", "基层治理", "制度建设"]
  }
];
