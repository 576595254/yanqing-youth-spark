import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
interface StatItemProps {
  title: string;
  value: string;
  suffix: string;
  isVisible: boolean;
  icon: React.ReactNode;
}
const StatItem: React.FC<StatItemProps> = ({
  title,
  value,
  suffix,
  isVisible,
  icon
}) => {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value);
  useEffect(() => {
    if (!isVisible) return;
    let startValue = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16);
    const timer = setInterval(() => {
      startValue += increment;
      if (startValue > targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, targetValue]);
  return <div className="stats-item group hover:bg-gradient-to-br hover:from-yanqingGreen/5 hover:to-activeOrange/5">
      <div className="text-yanqingGreen bg-green-50 w-10 h-10 rounded-full flex items-center justify-center mb-2 group-hover:bg-yanqingGreen group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-sm text-gray-600 mb-1">{title}</h4>
      <p className={`text-2xl font-bold text-yanqingGreen transition-all duration-500 ${isVisible ? 'animate-count' : 'opacity-0'}`}>
        {count}{suffix}
      </p>
    </div>;
};
const StatsSidebar = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const stats = [{
    title: "小红书浏览量",
    value: "20000",
    suffix: "+",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  }, {
    title: "文物古迹收录",
    value: "23",
    suffix: "处",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>
  }, {
    title: "零用工服务人数",
    value: "500",
    suffix: "+",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 6a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2Z"></path><path d="M6 10a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2Z"></path><path d="M14 18a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2Z"></path><path d="M22 10a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2Z"></path><path d="M6 14h4"></path><path d="M14 14h4"></path><path d="M10 6v8"></path><path d="M10 18v2"></path></svg>
  }, {
    title: "项目活动场次",
    value: "120",
    suffix: "场",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
  }];
  return <div ref={ref} className="fixed top-1/3 right-4 z-40 hidden lg:block transition-all duration-500">
      
      
      <div className="mt-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-100 animate-pulse-slow hidden">
        <div className="text-center">
          <button className="bg-activeOrange hover:bg-amber-600 text-white rounded-lg py-2 px-4 text-sm font-bold transition-all duration-300">
            联系我们
          </button>
        </div>
      </div>
    </div>;
};
export default StatsSidebar;