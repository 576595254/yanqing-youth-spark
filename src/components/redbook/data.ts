
import { RedBookPost } from './RedBookPostCard';
import { ContentPlanItem } from './RedBookPlanTab';

export const redBookPosts: RedBookPost[] = [
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

export const trendData = [
  { month: '1月', followers: 12500 },
  { month: '2月', followers: 13200 },
  { month: '3月', followers: 14800 },
  { month: '4月', followers: 16300 },
  { month: '5月', followers: 17600 },
  { month: '6月', followers: 18000 }
];

export const stats = {
  followers: 18000,
  posts: 87,
  monthlyViews: 100000,
  interaction: 4.8
};

export const contentPlanData: ContentPlanItem[] = [
  { seq: 1, period: "7月上旬", format: "图文", theme: "夜市合集（一）", keywords: "四海夜市、刘建堡夜市、康庄夜市等", executor: "李翊", team: "一组" },
  { seq: 2, period: "7月下旬", format: "图文", theme: "夜市合集（二）", keywords: "司家营夜市、恒王、延陵等", executor: "段非凡", team: "二组" },
  { seq: 3, period: "8月上旬", format: "图文", theme: "延庆区红色旅游景点", keywords: "骑行、滦河北路、雁栖铺子", executor: "黄蓉莉", team: "一组" },
  { seq: 4, period: "8月下旬", format: "视频", theme: "恒王市场、延陵公社", keywords: "恒王市场、延陵公社", executor: "王耀正", team: "二组" },
  { seq: 5, period: "9月上旬", format: "图文", theme: "咖啡合集（一）", keywords: "咖啡合集", executor: "罗浩", team: "一组" },
  { seq: 6, period: "9月下旬", format: "图文", theme: "咖啡合集（二）", keywords: "咖啡合集", executor: "张文怡", team: "三组" },
  { seq: 7, period: "10月上旬", format: "图文", theme: "秋日 晚霞 橙色", keywords: "秋日 晚霞 橙色", executor: "杨冰", team: "二组" },
  { seq: 8, period: "10月下旬", format: "图文", theme: "稻田成熟", keywords: "稻田成熟", executor: "徐文建", team: "三组" },
];
