import Image from "next/image";
import Elliott from "../../../public/images/elliott.jpg";
import { Scissors, Clock, Star, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-100 font-two" id="about">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-2 font-one">
          About Kingsmen Barber
        </h1>
        <p className="text-xl text-center mb-12">
          Dedicated to crafting the best barber experience.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold font-one">Meet Kevin Lopez</h2>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src={Elliott}
                alt="Kevin Lopez"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              Kevin Lopez brings over a decade of barbering experience to Kingsmen
              Barber. His dedication to excellence and passion for the craft is
              evident in every haircut. Kevin's approach combines traditional
              techniques with modern styling, ensuring that each client leaves
              feeling refreshed and confident.
            </p>
            <p className="text-lg">
              His meticulous attention to detail and ability to tailor styles to
              individual preferences make him a standout in the industry. Whether
              you're looking for a classic cut or a contemporary style, Kevin's
              expertise and warm, welcoming demeanor ensure a premium grooming
              experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 font-one">Our History</h2>
            <p className="text-lg">
              Established in 2023, Kingsmen Barber began as a modest shop nestled
              in the heart of downtown. Over the years, it has evolved into a
              cornerstone of the community, offering top-notch services in a
              welcoming environment. Known for its commitment to excellence and
              community engagement, Kingsmen Barber has expanded its services to
              include advanced styling techniques and exclusive grooming products,
              attracting a loyal clientele. Its presence has revitalized the local
              area, contributing to the vibrant, dynamic character of the
              neighborhood and making it a local favorite for residents and
              visitors alike.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 font-one">Our Mission</h2>
            <p className="text-lg">
              To provide exceptional barber services in a friendly atmosphere
              while pushing the boundaries of styling and grooming, Kingsmen
              Barber is dedicated to mastering the art of male grooming. Our
              mission goes beyond simple haircuts; we strive to be pioneers in the
              industry, constantly innovating with the latest trends and
              techniques. We aim to empower our clients by enhancing their
              personal style and confidence. Our barbers are not only skilled in
              traditional techniques but are also adept at contemporary styles,
              ensuring that every client leaves our shop looking their best and
              feeling truly valued. We foster a community spirit, welcoming all
              who step through our doors into a space where they can relax,
              rejuvenate, and enjoy the camaraderie of fellow patrons and staff
              alike.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Scissors className="mx-auto mb-4 h-12 w-12 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2 font-one">Expert Barber</h3>
            <p>Skilled professional with years of experience</p>
          </div>
         
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="mx-auto mb-4 h-12 w-12 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2 font-one">Top-Rated Service</h3>
            <p>Consistently high ratings from satisfied clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="mx-auto mb-4 h-12 w-12 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2 font-one">Community Focus</h3>
            <p>Building relationships beyond the barbershop</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 font-one">Awards & Recognition</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <Award className="mx-auto mb-4 h-16 w-16 text-yellow-500" />
              <p className="font-semibold font-one">Best in the PNW</p>
              <p className="text-sm text-gray-600">Seattle Times</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}