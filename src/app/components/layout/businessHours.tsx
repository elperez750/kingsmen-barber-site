import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Calendar } from "lucide-react";

const businessHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "11:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 7:00 PM" },
  { day: "Friday", hours: "11:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const Hours = () => {
  const currentDay = new Date().toLocaleString("en-us", { weekday: "long" });

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-gradient-to-r from-gray-500 to-gray-600 text-white">
        <CardTitle className="text-2xl font-bold flex items-center justify-center font-one">
          <Clock className="mr-2 " />
          Business Hours
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-4 font-two">
          {businessHours.map((item) => (
            <li
              key={item.day}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                item.day === currentDay ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                <Calendar className="mr-3" />
                <span className="font-medium">{item.day}</span>
              </div>
              <span
                className={`text-sm ${
                  item.hours === "Closed"
                    ? "text-red-500 font-medium"
                    : "text-gray-600"
                }`}
              >
                {item.hours}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
