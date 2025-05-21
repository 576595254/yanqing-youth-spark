
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  image: string;
  tags: string[];
  url: string;
}

interface PostsProps {
  posts: Post[];
  openExternalLink: (url: string) => void;
}

const RedBookPosts: React.FC<PostsProps> = ({ posts, openExternalLink }) => {
  return (
    <div className="p-1 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div 
            key={post.id} 
            onClick={() => openExternalLink(post.url)} 
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 bg-white cursor-pointer group"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full transition-transform group-hover:scale-105 duration-500 object-cover" 
              />
              <div className="absolute top-3 right-3 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-4 group-hover:text-amber-500 transition-colors">{post.title}</h4>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedBookPosts;
