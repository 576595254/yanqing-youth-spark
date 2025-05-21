
import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { researchReports } from './data';

const ResearchGallery = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (carouselRef.current) {
          const nextButton = carouselRef.current.querySelector('button[aria-label="Next slide"]');
          if (nextButton) {
            (nextButton as HTMLButtonElement).click();
          }
        }
      }, 6000); // Change slides every 6 seconds
    };
    
    startAutoScroll();
    
    // Pause auto-scroll when hovering
    const handleMouseEnter = () => {
      if (interval) clearInterval(interval);
    };
    
    const handleMouseLeave = () => {
      if (interval) clearInterval(interval);
      startAutoScroll();
    };
    
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={carouselRef} className="w-full max-w-5xl mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {researchReports.map((report, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full">
                <Card className="h-full border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={report.coverImage} 
                      alt={report.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yanqingGreen text-white hover:bg-yanqingGreen/90">
                        {report.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="px-4 py-4 pb-0 flex-grow">
                    <CardTitle className="text-lg font-bold text-yanqingGreen line-clamp-2">
                      {report.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm text-gray-600">
                      {report.author} · {report.date}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="px-4 py-2">
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {report.summary}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="px-4 py-4 pt-0 flex flex-wrap gap-2">
                    {report.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex items-center justify-center mt-8 gap-4">
          <CarouselPrevious 
            className={cn(
              "relative inset-auto left-0 right-0 translate-y-0 rounded-full",
              "bg-yanqingGreen text-white hover:bg-yanqingGreen/90 hover:text-white"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </CarouselPrevious>
          <div className="flex gap-1.5">
            {researchReports.map((_, index) => (
              <button
                key={index}
                className="w-2.5 h-2.5 rounded-full bg-gray-300 focus:outline-none transition-all duration-300"
                onClick={() => {
                  // Handle manual navigation to specific slide (would require more complex implementation)
                }}
              />
            ))}
          </div>
          <CarouselNext 
            className={cn(
              "relative inset-auto left-0 right-0 translate-y-0 rounded-full",
              "bg-yanqingGreen text-white hover:bg-yanqingGreen/90 hover:text-white"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default ResearchGallery;
