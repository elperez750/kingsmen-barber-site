import Image from "next/image";
import { ImageType } from "./uiTypes";

export const ImageCard = ({ image }: ImageType) => {
    return (
        <div className="relative overflow-hidden rounded-lg w-[600px] h-[600px]">
            <Image src={image} alt="main" fill style={{objectFit: "cover"}}/>
        </div>
    )
}
