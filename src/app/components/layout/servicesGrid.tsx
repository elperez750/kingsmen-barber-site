// ServicesGrid.jsx
import React from 'react';
import ServiceCard from './serviceCard';

const services = [
  { service: "Haircut", price: 50, description: "A custom haircut designed by your stylist to fit your individual style and preferences.", eta: 30 },
  { service: "Kids Haircut", price: 45, description: "Stylish cuts for kids, making haircut day a fun experience.", eta: 30 },
  { service: "Eyebrows", price: 10, description: "Quick trim and tidy for clean, neat eyebrows.", eta: 15 },
  { service: "Beard and Goatee", price: 30, description: "Trim and shape your beard and goatee, tailored to your face shape.", eta: 25 },
  { service: "Haircut, Beard and Goatee", price: 70, description: "A full grooming package for ultimate refinement.", eta: 60},
  { service: "Line Up", price: 25, description: "Precise edges and clean lines for a polished look.", eta: 20 },
  { service: "Haircut, Eyebrows, Beard and Goatee", price: 80, description: "The complete package for a total refresh.", eta: 75 }
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
