import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';

const businessHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 7:00 PM" },
  { day: "Friday", hours: "11:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including haircuts, beard trims, hot towel shaves, and hair styling. We also provide grooming advice tailored to each client's needs."
  },
  {
    question: "Do I need to make an appointment?",
    answer: "While we do accept walk-ins, we recommend making an appointment to ensure you get the time slot that works best for you. You can book online or give us a call."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, and mobile payment options like Apple Pay and Google Pay."
  },
  {
    question: "Do you offer any loyalty programs or discounts?",
    answer: "Yes, we have a loyalty program where every 10th haircut is free. We also offer student and senior discounts. Ask about our referral program for additional benefits."
  }
];

const FAQMapAndHours = () => {
  const currentDay = new Date().toLocaleString('en-us', {weekday: 'long'});

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ, Location & Hours</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3872573184267!2d-121.98579842393819!3d47.85225717098206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa71fe70422f7%3A0xa4f4513162827b6d!2sKingsmen%20Barber%20Studio!5e1!3m2!1sen!2sus!4v1725587440524!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                    <p>909 W Main St STE 105, Monroe, WA 98272</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-gray-500" />
                    <p>(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-500 to-gray-600 text-white">
                <CardTitle className="text-2xl font-bold flex items-center justify-center">
                  <Clock className="mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {businessHours.map((item) => (
                    <li 
                      key={item.day} 
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                        item.day === currentDay ? 'bg-blue-100' : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <Calendar className="mr-3" />
                        <span className="font-medium">{item.day}</span>
                      </div>
                      <span className={`text-sm ${item.hours === 'Closed' ? 'text-red-500 font-medium' : 'text-gray-600'}`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQMapAndHours;