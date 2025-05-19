
import React, { useState } from 'react';
import RedBookDialog from './redbook/RedBookDialog';
import RedBookProjectPreview from './redbook/RedBookProjectPreview';
import { redBookPosts, stats, trendData, contentPlanData } from './redbook/data';

const RedBookProject = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const handleDetailClick = () => {
    setOpen(true);
  };

  return (
    <>
      <RedBookDialog 
        open={open}
        setOpen={setOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        redBookPosts={redBookPosts}
        stats={stats}
        trendData={trendData}
        contentPlanData={contentPlanData}
      />
      
      <RedBookProjectPreview 
        redBookPosts={redBookPosts}
        handleDetailClick={handleDetailClick}
      />
    </>
  );
};

export default RedBookProject;
