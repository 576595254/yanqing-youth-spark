
import React from 'react';
import RedBookPostCard, { RedBookPost } from './RedBookPostCard';

interface RedBookPostsTabProps {
  posts: RedBookPost[];
}

const RedBookPostsTab: React.FC<RedBookPostsTabProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <RedBookPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RedBookPostsTab;
