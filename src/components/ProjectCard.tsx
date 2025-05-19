
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  onClick: () => void;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  icon, 
  image,
  onClick,
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <div 
      ref={ref}
      className={`project-card cursor-pointer transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="project-card-image group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = "https://placeholder.pics/svg/400x200/DEDEDE/555555/项目图片";
          }}
        />
        <div className="absolute top-0 left-0 bg-yanqingGreen text-white p-2 rounded-br-lg flex items-center">
          <span className="mr-1.5">{icon}</span>
          <span className="text-sm font-medium">项目展示</span>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 bg-white border-b border-l border-r border-gray-100 rounded-b-lg">
        <h3 className="text-xl font-bold text-yanqingGreen mb-3 group-hover:text-activeOrange transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex justify-end">
          <button className="text-activeOrange hover:text-amber-600 font-bold flex items-center transition-all duration-300 group">
            探索详情
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
