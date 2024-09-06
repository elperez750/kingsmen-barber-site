import React from "react";
import ImageGallery from "../components/layout/imageGallery";
import TestimonialCard from "../components/layout/testimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  fullName: string;
  rating: number;
  description: string;
}

export default function Gallery() {
  const testimonialList: Testimonial[] = [
    {
      fullName: "Oliver Soto",
      rating: 5,
      description:
        "I enjoyed the scenery and vibe that kingsmen barber studio gave off. And i absolutely loved how friendly and respectful the owner/barber was and honestly he's just a cool and well rounded guy. And the service that he provides is so diverse that u cant help but just appreciate. and i really enjoy that private aspect of it. will for sure 100% come back again!",
    },
    {
      fullName: "Michelle Gallo",
      rating: 5,
      description:
        "this barber does well with everyone especially kids I only take my son to him 10 out of 10 in my book. I recommend him to adults kids he even cut my teenager girls hair try him out and he will not disappoint you. Support  kingsmen barber studio. Kevin is for his community.",
    },
    {
      fullName: "Elliott Perez",
      rating: 5,
      description:
        "This was my first time with Kevin and I was very satisfied by the service provided. He is very friendly and will make you feel at home with drinks and snacks as well as a clean studio. If you are looking for a barber that will go above and beyond, book an appointment with Kevin!!",
    },
  ];

  return (
    <div className="bg-gray-100 mt-20 mb-20">
      <div className="container mx-auto px-4">
      
        <ImageGallery />
        
        <h2 className="text-3xl font-bold text-center mt-16 mb-8 font-one">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          <Carousel opts={{loop: true}}>
            <CarouselContent>
              {testimonialList.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 font-twoa">
                    <TestimonialCard
                      fullName={testimonial.fullName}
                      rating={testimonial.rating}
                      description={testimonial.description}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mr-2" />
              <CarouselNext className="ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}