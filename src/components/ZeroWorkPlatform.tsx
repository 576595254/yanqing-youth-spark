import React from 'react';
const ZeroWorkPlatform = () => {
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
  return <div className="group">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
            <img alt="零用工平台Logo" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" src="/lovable-uploads/f10da036-718c-4def-91ee-06a6713666d9.jpg" />
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold text-yanqingGreen mb-4 group-hover:text-activeOrange transition-colors">
            零用工平台
          </h3>
          <p className="text-gray-600 mb-4">项目设想旨在助力解决延庆区农村劳动力"就业难"与企业"用工难"的双重问题，智能匹配乡村闲置劳动力与用工需求，与零工市场对接。目前在前期策划中。</p>
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
    </div>;
};
export default ZeroWorkPlatform;