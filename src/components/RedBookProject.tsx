
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import RedBookDialog from './redbook/RedBookDialog';
import RedBookPreview from './redbook/RedBookPreview';
import { 
  redBookPosts, 
  contentPlanData, 
  extendedPlanData, 
  accountStats, 
  followerTrendData 
} from './redbook/data';

const RedBookProject = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("intro");
  const {
    ref: animationRef,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleDetailClick = () => {
    setOpen(true);
  };
  
  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <RedBookDialog
        open={open}
        setOpen={setOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        redBookPosts={redBookPosts}
        contentPlanData={contentPlanData}
        extendedPlanData={extendedPlanData}
        stats={accountStats}
        trendData={followerTrendData}
        openExternalLink={openExternalLink}
      />
      
      <div ref={animationRef}>
        <RedBookPreview 
          handleDetailClick={handleDetailClick} 
          inView={inView}
        />
      </div>
    </>
  );
};

export default RedBookProject;
