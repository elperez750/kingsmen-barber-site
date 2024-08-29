import React from "react";
import { ImageCard } from "../components/UI/imageCard";
import Elliott from "../../../public/images/elliott.jpg";
import SocialMedia from "../components/UI/socialMedia";
import Facebook from "../../../public/images/facebook.png";
import Instagram from "../../../public/images/instagram.png";
import Tiktok from "../../../public/images/tiktok.png";

const socialMediaIcons = [
  { image: Facebook },
  { image: Instagram },
  { image: Tiktok },
];

export default function Intro() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Welcome to Kingsmen Barber</h1>
        <ImageCard image={Elliott.src} />
        <h2>Est. 2023</h2>
      </div>
      <div className="flex justify-center space-x-4"> {/* Adjusted part */}
        {socialMediaIcons.map((icon, index) => (
          <SocialMedia key={index} image={icon.image.src} />
        ))}
      </div>
    </div>
  );
}
