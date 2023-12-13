import Image from "next/image";
import React from "react";

export function BannerSection(prop: any) {
    return (
        <header className="flex-col text-red-400 text-3xl font-bold relative whitespace-nowrap overflow-hidden self-stretch min-h-[357px] w-full justify-center items-center mt-9 pt-36 pb-40 px-16 max-md:max-w-full max-md:px-5 max-md:py-10 rounded-sm">
            <Image
                loading="lazy"
                src="https://png.pngtree.com/thumb_back/fw800/background/20231124/pngtree-delivery-man-with-boxes-and-clipboard-on-pink-background-christmas-concept-image_15277292.jpg"
                alt="Description of the image goes here" // Provide a meaningful alt text
                className="absolute h-full w-full object-cover object-center inset-0"
                width={800}
                height={600}
            />
            <p>D2D GROUP</p>
        </header>
    );
}

export default BannerSection;
