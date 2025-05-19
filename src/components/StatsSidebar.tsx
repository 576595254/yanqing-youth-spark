
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  title: string;
  value: string;
  suffix: string;
  isVisible: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ title, value, suffix, isVisible }) => {
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

  return (
    <div className="stats-item">
      <h4 className="text-sm text-gray-600 mb-1">{title}</h4>
      <p className={`text-2xl font-bold text-yanqingGreen transition-all duration-500 ${isVisible ? 'animate-count' : 'opacity-0'}`}>
        {count}{suffix}
      </p>
    </div>
  );
};

const StatsSidebar = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const stats = [
    { title: "小红书粉丝量", value: "18000", suffix: "+" },
    { title: "文物古迹收录", value: "45", suffix: "处" },
    { title: "零用工服务人数", value: "500", suffix: "+" },
    { title: "项目活动场次", value: "120", suffix: "场" }
  ];

  return (
    <div ref={ref} className="fixed top-1/3 right-4 z-40 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-gray-100">
        <h3 className="text-center text-xs font-bold text-yanqingGreen mb-2 px-2">项目成果</h3>
        
        <div className="space-y-3 w-32">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSidebar;
