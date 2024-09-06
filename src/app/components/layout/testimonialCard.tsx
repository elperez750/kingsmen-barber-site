import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialType {
  fullName: string;
  rating: number;
  description: string;
}

const TestimonialCard: React.FC<TestimonialType> = ({
  fullName,
  rating,
  description,
}) => {
  return (
    <div className="">
      <Card className="w-full max-w-md mx-auto overflow-hidden bg-white text-black shadow-lg dark:bg-gray-800 dark:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{fullName}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < rating
                      ? "text-yellow-500 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <blockquote className="relative text-lg font-light">
            <span className="text-4xl text-gray-300 absolute -left-2 -top-2 leading-none">
              "
            </span>
            <p className="relative z-10 italic">{description}</p>
            <span className="text-4xl text-gray-300 absolute -right-2 -bottom-2 leading-none">
              "
            </span>
          </blockquote>
        </CardContent>
        <CardFooter className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Verified Customer
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestimonialCard;
