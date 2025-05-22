import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useInView } from 'react-intersection-observer';

interface ResearchReport {
  id: number;
  title: string;
  description: string;
  image: string;
}

const researchReports: ResearchReport[] = [
  {
    id: 1,
    title: '"电商直播+"拓展乡村振兴新路径',
    description: "探索电商直播如何为乡村振兴注入新活力，分析实际案例和有效模式",
    image: "/lovable-uploads/3d821d5b-32a3-4472-8e1c-68778331731a.png"
  },
  {
    id: 2,
    title: '"两山"转化助推农村集体经济发展的思考与研究',
    description: "研究绿水青山向金山银山转化的实践路径，提出促进农村集体经济发展的策略建议",
    image: "/lovable-uploads/bf3197b2-8ee5-4df1-bd1a-ccc2cdee721e.png"
  },
  {
    id: 3,
    title: '聚焦"育管用"抓实抓细选调生培养管理',
    description: '分析选调生培养管理体系的优化路径，提出"育管用"一体化培养模式的实践思考',
    image: "/lovable-uploads/a1ccc8ba-fcc1-4152-9198-8344e4a17b3e.png"
  }
];

const ResearchGallery = () => {
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoplayIntervalRef = useRef<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Handle autoplay
  useEffect(() => {
    if (inView && autoplay) {
      autoplayIntervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % researchReports.length);
      }, 5000); // Change slide every 5 seconds
    } else if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [autoplay, inView]);

  // Carousel API reference to programmatically control the carousel
  const [api, setApi] = useState<any>(null);
  
  // Sync the carousel with the current slide state
  useEffect(() => {
    if (!api) return;
    api.scrollTo(currentSlide);
  }, [api, currentSlide]);
  
  // Update current slide when carousel scrolls
  const handleSelect = () => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!api) return;
    
    api.on('select', handleSelect);
    
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <div 
      ref={ref}
      className={`w-full transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <Carousel 
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {researchReports.map((report) => (
            <CarouselItem key={report.id} className="md:basis-2/3 lg:basis-1/2 relative">
              <div className="p-2">
                <Card className="overflow-hidden border-yanqingGreen/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img 
                      src={report.image} 
                      alt={report.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://placeholder.pics/svg/400x200/DEDEDE/555555/研究报告";
                      }}
                    />
                    <div className="absolute top-0 left-0 m-3">
                      <Badge className="bg-yanqingGreen text-white border-none">调研报告</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg md:text-xl font-bold text-yanqingGreen line-clamp-2 mb-2">
                      {report.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {report.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-0 md:-left-12 bg-white/70 hover:bg-white border-yanqingGreen text-yanqingGreen" />
        <CarouselNext className="right-0 md:-right-12 bg-white/70 hover:bg-white border-yanqingGreen text-yanqingGreen" />
      </Carousel>
      
      <div className="flex justify-center mt-4 gap-2">
        {researchReports.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              if (api) api.scrollTo(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-yanqingGreen w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchGallery;
