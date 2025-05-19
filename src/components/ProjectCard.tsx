
import React from 'react';

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
  return (
    <div 
      className="project-card cursor-pointer" 
      onClick={onClick}
      style={{ 
        opacity: 0,
        animation: 'fadeIn 0.5s forwards',
        animationDelay: `${delay}ms`
      }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="project-card-image"
          onError={(e) => {
            e.currentTarget.src = "https://placeholder.pics/svg/400x200/DEDEDE/555555/项目图片";
          }}
        />
        <div className="absolute top-0 left-0 bg-yanqingGreen text-white p-2 rounded-br-lg flex items-center">
          {icon}
          <span className="ml-1 text-sm font-medium">项目展示</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-yanqingGreen mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex justify-end">
          <button className="text-activeOrange hover:text-amber-600 font-bold flex items-center transition-all duration-300">
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
