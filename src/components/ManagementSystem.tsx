
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ManagementSystem = () => {
  const [activeTab, setActiveTab] = useState("method");
  return <section id="management" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-yanqingGreen/10 text-yanqingGreen px-4 py-2 rounded-full text-sm font-medium">
              规范管理
            </span>
          </div>
          
          <h2 className="text-3xl font-bold text-yanqingGreen mb-4 px-[5px] py-[25px] md:text-5xl">
            管理<span className="text-activeOrange">制度</span>
          </h2>
          
          <p className="text-gray-600 text-lg py-[16px] mx-[8px]">此部分展示延庆区选调生团队管理制度、工作方法等内容，以电子手册形式呈现</p>
        </div>
        
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center text-lg md:text-xl">
                延庆区 2022 届选调生基层锻炼小组工作管理办法
              </CardTitle>
              <CardDescription className="text-center">规范化管理文件</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 p-2 text-sm md:text-base">
                <div className="space-y-2">
                  <h3 className="font-bold">第一章 总则</h3>
                  <p className="text-gray-700 leading-relaxed">
                    第一条 为贯彻落实市委组织部《北京市选调生管理办法(试行)》和《关于进一步做好选调生到基层实践锻炼工作的通知》要求，规范选调生基层锻炼小组运行模式，激活调动选调生主动性、积极性，提升基层锻炼实效，结合本区工作实际，制定本办法。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    第二条 延庆区选调生基层锻炼小组由延庆区全体2022届选调生组成，组长、副组长由市委组织部根据工作需要确定，在区委组织部领导下开展工作。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    第三条 本办法适用于延庆区选调生在基层锻炼期间以小组形式开展的"每月一题"活动、班刊编撰、思想汇报、园情调研等工作。
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold">第二章 工作职责</h3>
                  <p className="text-gray-700 leading-relaxed">
                    第四条 选调生组长、副组长的工作职责：
                  </p>
                  <p className="text-gray-700 leading-relaxed pl-4">
                    （一）发挥好市、区组织部门与选调生之间的桥梁纽带作用，及时做到"上情下达"和"下情上传"，履行主题征集、组织对接、任务分解、信息上报职责，配合市区两级组织部门有效开展选调生基层锻炼工作。
                  </p>
                  <p className="text-gray-700 leading-relaxed pl-4">
                    （二）带头组织开展本区选调生"每月一题"交流活动，定期组织召开座谈会，积极探索创新跨区交流、跨届交流、沙龙座谈等多种活动形式，做好考勤工作，做好活动策划与总结。
                  </p>
                </div>
                
                <div className="text-center mt-8">
                  <span className="text-gray-500 text-sm">查看完整文档请下载电子手册</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* 新增的 "三个一" 工作法部分 */}
          <div className="my-12">
            <h3 className="text-center text-2xl font-bold text-yanqingGreen mb-8">
              选调生调查研究<span className="text-activeOrange">"三个一"</span>工作法
            </h3>
            
            <div className="space-y-8">
              {/* 一条主线 */}
              <Card className="border-l-4 border-l-yanqingGreen">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-yanqingGreen text-white px-3 py-1 rounded-full text-sm mr-3">01</span>
                    <span>一条主线——选准调研课题</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    聚焦"提升选调生调研能力和服务基层群众能力"工作主线，紧盯"小切口"助力"大发展"，突出问题导向和目标导向，围绕乡村振兴、"两山"转化、文旅融合、基层治理等主题，组织开展调查研究，在解民忧、纾民困、暖民心中"墩苗育才"。
                  </p>
                </CardContent>
              </Card>
              
              {/* 一个平台 */}
              <Card className="border-l-4 border-l-activeOrange">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-activeOrange text-white px-3 py-1 rounded-full text-sm mr-3">02</span>
                    <span>一个平台——提升调研能力</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    构建"周讨论选题—月座谈破题—季调研解题"的调研闭环机制，每月开展一次座谈交流，群策群力找问题、研方法、提经验，每季度完成一项主题调研。注重各届选调生上下贯通，加强与各区选调生横向联动，做实多部门、各乡镇协同配合。
                  </p>
                </CardContent>
              </Card>
              
              {/* 一篇文章 */}
              <Card className="border-l-4 border-l-yanqingGreen">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-yanqingGreen text-white px-3 py-1 rounded-full text-sm mr-3">03</span>
                    <span>一篇文章——深化调研成果</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    坚持"报告起草—集体研讨—精修完善"调研报告撰写机制，及时补充调研"回头看"，确保调研报告真实、客观、全面反映基层工作实际，集思广益提出合理性、可操作性的意见建议，对优秀调研成果及时上报，供区委决策参考。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ManagementSystem;
