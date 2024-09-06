import React from 'react';
import Image from "next/image";
import { ImageType } from './uiTypes';

export default function SocialMedia({image}: ImageType) {
  return (
    <div className="flex items-center bg-gray-200 rounded-md p-2 hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
        <Image src={image} alt="main" width={30} height={20}/>
    </div>
  );
}
