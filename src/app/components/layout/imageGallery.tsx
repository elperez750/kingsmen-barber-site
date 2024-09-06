"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import galleryOne from "../../../../public/images/galleryone.jpg";
import galleryTwo from "../../../../public/images/gallerytwo.jpg";
import galleryThree from "../../../../public/images/gallerythree.jpg";
import galleryFour from "../../../../public/images/galleryfour.jpg";
import galleryFive from "../../../../public/images/galleryfive.jpg";
import gallerySix from "../../../../public/images/gallerysix.jpg";
import gallerySeven from "../../../../public/images/galleryseven.jpg";
import galleryEight from "../../../../public/images/galleryeight.jpg";
import type { StaticImageData } from 'next/image';

interface GalleryImage {
  src: StaticImageData;
  alt: string;
}

const images: GalleryImage[] = [
  { src: galleryOne, alt: "Gallery image 1" },
  { src: galleryTwo, alt: "Gallery image 2" },
  { src: galleryThree, alt: "Gallery image 3" },
  { src: galleryFour, alt: "Gallery image 4" },
  { src: galleryFive, alt: "Gallery image 5" },
  { src: gallerySix, alt: "Gallery image 6" },
  { src: gallerySeven, alt: "Gallery image 7" },
  { src: galleryEight, alt: "Gallery image 8" },
];

export default function EnhancedImageGallery(): JSX.Element {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">Our Gallery</h2>
      <p className="text-xl text-center text-gray-600 mb-12">Explore our latest styles and cuts</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={index % 2 === 0 ? 400 : 300}
              className="object-cover w-full h-full"
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </motion.div>
        ))}
      </div>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <Image
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}
    </div>
  );
}