
import React from 'react';
import { Heart, MessageSquare, Eye } from 'lucide-react';

export interface RedBookPost {
  id: number;
  title: string;
  image: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
}

interface RedBookPostCardProps {
  post: RedBookPost;
}

const RedBookPostCard: React.FC<RedBookPostCardProps> = ({ post }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2">{post.title}</h4>
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> {post.likes}</span>
          <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-1" /> {post.comments}</span>
          <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> {post.views}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RedBookPostCard;
