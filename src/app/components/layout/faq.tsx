import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including haircuts, beard trims, hot towel shaves, and hair styling. We also provide grooming advice tailored to each client's needs.",
  },
  {
    question: "Do I need to make an appointment?",
    answer:
      "While we do accept walk-ins, we recommend making an appointment to ensure you get the time slot that works best for you. You can book online or give us a call.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit cards, and mobile payment options like Apple Pay and Google Pay.",
  },
  {
    question: "Do you offer any loyalty programs or discounts?",
    answer:
      "Yes, we have a loyalty program where every 10th haircut is free. We also offer student and senior discounts. Ask about our referral program for additional benefits.",
  },
];

export function Faq() {
    return (
        <Card>
          <CardHeader>
            <CardTitle className="font-one">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="font-two">
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )
    }
