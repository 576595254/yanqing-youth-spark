
import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface PlanData {
  seq: number;
  period: string;
  format: string;
  theme: string;
  keywords: string;
  executor: string;
  team: string;
}

interface PlanProps {
  contentPlanData: PlanData[];
  extendedPlanData: PlanData[];
}

const RedBookPlan: React.FC<PlanProps> = ({ contentPlanData, extendedPlanData }) => {
  return (
    <div className="space-y-6 mx-auto max-w-4xl">
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
              {[...contentPlanData, ...extendedPlanData].map(item => (
                <TableRow key={item.seq}>
                  <TableCell>{item.seq}</TableCell>
                  <TableCell>{item.period}</TableCell>
                  <TableCell>{item.format}</TableCell>
                  <TableCell>
                    <div className="font-medium">{item.theme}</div>
                    <div className="text-xs text-gray-500">关键词: {item.keywords}</div>
                  </TableCell>
                  <TableCell>{item.executor}</TableCell>
                  <TableCell>{item.team}</TableCell>
                </TableRow>
              ))}
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
    </div>
  );
};

export default RedBookPlan;
