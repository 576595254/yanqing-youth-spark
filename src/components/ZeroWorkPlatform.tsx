import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
const ZeroWorkPlatform = () => {
  const [open, setOpen] = useState(false);
  const stats = {
    registeredUsers: 647,
    solvedCases: 512,
    employmentRate: 79,
    avgWage: 3600
  };
  const industries = [{
    name: "农业种植",
    percentage: 34,
    color: "#008066"
  }, {
    name: "家政服务",
    percentage: 28,
    color: "#FFA500"
  }, {
    name: "手工制作",
    percentage: 17,
    color: "#A45ee5"
  }, {
    name: "园艺绿化",
    percentage: 12,
    color: "#4CAF50"
  }, {
    name: "其他",
    percentage: 9,
    color: "#9E9E9E"
  }];
  const cases = [{
    village: "康庄村",
    user: "张大叔",
    job: "农田管理",
    status: "已结算",
    wage: 3800
  }, {
    village: "大榆树村",
    user: "王奶奶",
    job: "家庭保洁",
    status: "进行中",
    wage: 2500
  }, {
    village: "四海镇",
    user: "李师傅",
    job: "木工修缮",
    status: "已结算",
    wage: 4200
  }, {
    village: "古城村",
    user: "赵大姐",
    job: "农产品加工",
    status: "已结算",
    wage: 3400
  }];
  return <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">零用工平台</DialogTitle>
            <DialogDescription>
              连接乡村劳动力与用工需求，促进灵活就业与增收
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold mb-6 text-center">平台运作流程</h3>
              
              <div className="relative">
                {/* Flow chart - in a real application this would be a more interactive/animated visualization */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <div className="bg-white rounded-lg p-4 shadow-sm text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-yanqingGreen rounded-full flex items-center justify-center mb-4 text-white">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h4 className="font-bold mb-2">村民发布需求</h4>
                    <p className="text-sm text-gray-600">通过手机APP或线下服务站提交用工请求</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-yanqingGreen rounded-full flex items-center justify-center mb-4 text-white">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h4 className="font-bold mb-2">平台智能匹配</h4>
                    <p className="text-sm text-gray-600">根据技能、距离、时间等因素匹配最适合的劳动者</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-yanqingGreen rounded-full flex items-center justify-center mb-4 text-white">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h4 className="font-bold mb-2">企业接单完成</h4>
                    <p className="text-sm text-gray-600">接单方完成工作后，平台结算工资并收集反馈</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4">行业分布</h3>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex flex-col space-y-4">
                    {industries.map(industry => <div key={industry.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{industry.name}</span>
                          <span className="font-medium">{industry.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="h-2.5 rounded-full" style={{
                        width: `${industry.percentage}%`,
                        backgroundColor: industry.color
                      }}></div>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">近期用工案例</h3>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">村/镇</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用工者</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">工作</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cases.map((caseItem, idx) => <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm">{caseItem.village}</td>
                          <td className="px-4 py-3 text-sm">{caseItem.user}</td>
                          <td className="px-4 py-3 text-sm">{caseItem.job}</td>
                          <td className="px-4 py-3 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${caseItem.status === "已结算" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                              {caseItem.status}
                            </span>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <h4 className="text-sm text-gray-500">平台注册用户</h4>
                <p className="text-2xl font-bold text-yanqingGreen">{stats.registeredUsers}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <h4 className="text-sm text-gray-500">已解决用工</h4>
                <p className="text-2xl font-bold text-yanqingGreen">{stats.solvedCases}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <h4 className="text-sm text-gray-500">就业率 (%)</h4>
                <p className="text-2xl font-bold text-yanqingGreen">{stats.employmentRate}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <h4 className="text-sm text-gray-500">平均月收入 (元)</h4>
                <p className="text-2xl font-bold text-yanqingGreen">{stats.avgWage}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="cursor-pointer group" onClick={() => setOpen(true)}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              <img alt="零用工平台Logo" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" src="/lovable-uploads/891d6bbe-0b48-4bf8-b2c1-791cbfa8b1da.jpg" />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold text-yanqingGreen mb-4 group-hover:text-activeOrange transition-colors">
              零用工平台
            </h3>
            <p className="text-gray-600 mb-4">旨在助力解决延庆区农村劳动力&quot;就业难&quot;与企业&quot;用工难&quot;的双重问题，智能匹配乡村闲置劳动力与用工需求，与零工市场对接。</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #灵活就业
              </span>
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #资源对接
              </span>
              <span className="bg-gray-100 text-yanqingGreen px-3 py-1 rounded-full text-sm">
                #乡村振兴
              </span>
            </div>
            
            
          </div>
        </div>
      </div>
    </>;
};
export default ZeroWorkPlatform;