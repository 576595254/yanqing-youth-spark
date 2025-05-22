
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const researchData = [
  {
    id: 1,
    title: "电商直播+",
    description: "探索电商直播助力乡村振兴的新路径，促进农产品销售与地方经济发展",
    image: "/lovable-uploads/891d6bbe-0b48-4bf8-b2c1-791cbfa8b1da.jpg"
  },
  {
    id: 2,
    title: ""两山"转化助推农村集体经济发展",
    description: "关于"绿水青山就是金山银山"理念在农村经济发展中的落实与实践研究",
    image: "/lovable-uploads/95177ee8-a812-4aa3-9af2-0388dd6443b3.jpg"
  },
  {
    id: 3,
    title: ""育管用"选调生培养管理",
    description: "聚焦"育才、管事、用人"全链条，探索基层选调生培养与管理的有效机制",
    image: "/lovable-uploads/c06e49bb-ff25-4276-9a4c-35b20236e53a.jpg"
  }
];

const ResearchGallery: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    // 自动轮播功能，每5秒切换一次
    const startAutoplay = () => {
      if (intervalRef.current) return;
      
      intervalRef.current = window.setInterval(() => {
        if (carouselRef.current) {
          const nextButton = carouselRef.current.querySelector('[data-carousel-next]');
          if (nextButton instanceof HTMLElement) {
            nextButton.click();
          }
        }
      }, 5000);
    };

    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoplay();

    // 当用户交互时停止自动轮播
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);
    }

    return () => {
      stopAutoplay();
      if (carousel) {
        carousel.removeEventListener('mouseenter', stopAutoplay);
        carousel.removeEventListener('mouseleave', startAutoplay);
      }
    };
  }, []);

  return (
    <div ref={carouselRef} className="w-full max-w-4xl mx-auto px-4">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {researchData.map((item) => (
            <CarouselItem key={item.id} className="md:basis-2/3 lg:basis-1/2">
              <div className="p-2">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={`${item.image}?v=${Date.now()}`} 
                      alt={item.title} 
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-yanqingGreen/80 hover:bg-yanqingGreen text-white">
                      研究报告
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-yanqingGreen">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious data-carousel-prev className="relative static translate-y-0 left-0" />
          <CarouselNext data-carousel-next className="relative static translate-y-0 right-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default ResearchGallery;
