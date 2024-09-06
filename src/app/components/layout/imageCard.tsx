import Image from "next/image";
import { ImageType } from "../UI/uiTypes";

export const ImageCard = ({ image }: ImageType) => {
    return (
        <div className="relative w-full h-full"> {/* Ensure parent container has defined dimensions */}
            <Image src={image} alt="Displayed Image" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
    );
}
