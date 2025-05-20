import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
          
          <p className="text-gray-600 text-lg py-[16px] mx-[8px]">
            此部分展示延庆区选调生团队管理制度、考核办法等内容，以电子手册形式呈现
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <Tabs defaultValue="method" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="method">工作管理办法</TabsTrigger>
              <TabsTrigger value="arrangement">工作分工安排</TabsTrigger>
            </TabsList>
            
            <TabsContent value="method" className="space-y-8">
              <Card>
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
            </TabsContent>
            
            <TabsContent value="arrangement" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-lg md:text-xl">
                    2022 届延庆区市区两级选调生工作分工安排
                  </CardTitle>
                  <CardDescription className="text-center">工作安排与分组</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 p-2 text-sm md:text-base">
                    <p className="text-gray-700 leading-relaxed">
                      大家好，按照市委组织部的要求，为了最大限度上能让每一位选调生都有机会参与组织活动，编辑班刊等工作，现采取分小组形式组织"每月一题"活动，以形成团队人人出力的良好局面。
                    </p>
                    
                    <div className="space-y-2">
                      <h3 className="font-bold">一、"每月一题"活动</h3>
                      <p className="text-gray-700 leading-relaxed">
                        按照每个月一个小组负责制，完成"每月一题"活动组织及附属工作，依次顺延，例如：一组负责9月，则二组负责10月，三组负责11月，按顺序顺延。
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        "每月一题"活动工作内容主要包括：
                      </p>
                      <p className="text-gray-700 leading-relaxed pl-4">
                        (一) 活动策划及组织，要求每月20号之前完成活动，组织活动原则上需提前出方案（可出多套方案），并征求大家意见及活动组织时间，同时也需上报区委组织部征求意见（发给手机即可）。活动时间确定后，需出发3-4天前联系区委组织部（高天浩）预订车辆（需根据前期预估参加人数订车）。
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-bold">二、班刊编辑</h3>
                      <p className="text-gray-700 leading-relaxed">
                        基于目前的班刊编辑工作安排，预计本组会承担1-2期班刊编辑工作，考虑到需撰稿、收集、整理全市各个选调生小组的信息，工作量较大，由黄露莉和刘华宇统筹协调全组成员，分工协作，互相配合，共同完成此项工作。
                      </p>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <h3 className="font-bold">各小组成员如下：</h3>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>第一组</TableHead>
                              <TableHead>第二组</TableHead>
                              <TableHead>第三组</TableHead>
                              <TableHead>第四组</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>王文彬</TableCell>
                              <TableCell>黄露莉</TableCell>
                              <TableCell>汤博文</TableCell>
                              <TableCell>段非凡</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>范一森</TableCell>
                              <TableCell>李钊</TableCell>
                              <TableCell>刘柄</TableCell>
                              <TableCell>王耀正</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>张晓文</TableCell>
                              <TableCell>马玉杰</TableCell>
                              <TableCell>李彬</TableCell>
                              <TableCell>董昊</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>刘华宇</TableCell>
                              <TableCell>张又榕</TableCell>
                              <TableCell>谢丽蒙</TableCell>
                              <TableCell>董昊</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>※备注：</p>
                        <p>（1）个于当前小组人数较多，便于及时了解全体成员情况，参加活动如有问题需请假，请找黄露莉和刘华宇请假。</p>
                        <p>（2）"每月一题"活动由于任务量较大，由各小组推选出各小组组长，统筹安排组内分工，按时保质保量完成每月任务。</p>
                        <p>（3）此方案将纳入2022届延庆区选调生管理办法。</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>;
};
export default ManagementSystem;