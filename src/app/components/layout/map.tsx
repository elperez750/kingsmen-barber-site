import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from 'lucide-react';


export function Map () {
    return (
        <Card>
          <CardHeader>
            <CardTitle className="font-one">Find Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3872573184267!2d-121.98579842393819!3d47.85225717098206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa71fe70422f7%3A0xa4f4513162827b6d!2sKingsmen%20Barber%20Studio!5e1!3m2!1sen!2sus!4v1725595635550!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-2 font-two">
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
      )
    }