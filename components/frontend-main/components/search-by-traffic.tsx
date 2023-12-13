import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

function SearchTrackingComponent(props: any) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2.5 mt-10 px-4 max-w-[1200px] mx-auto bg-black">
      <div className="relative w-full max-w-[800px]">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59756517bbfb5efff65a29726624f2bb3ff9819eebcc9a7a92a5593e0c8b334f?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4"
          alt="Description of the image"
          width={800} // Specify the width of the image
          height={600} // Specify the height of the image
          className="absolute h-full w-full object-cover object-center inset-0"
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-[474px]">
        <div className="text-white text-center text-2xl font-bold">
          TRACKING CODE
        </div>
        <Input
          className="w-full text-stone-300 text-xl leading-8 bg-white pl-11 pr-16 py-5 rounded-xl mb-2"
          placeholder="SEARCH TRACKING"
        />

      </div>
    </div>
  );
}

export default SearchTrackingComponent;
