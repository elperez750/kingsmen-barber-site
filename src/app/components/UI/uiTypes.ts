export type ImageType = {
    image: string;
}


export type ButtonType = {
    text: string;
    buttonStatus: "primary" | "secondary"
    onClick?: () => void;
    className?: string;
}