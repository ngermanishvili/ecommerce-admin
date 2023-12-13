import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { Button } from "antd";

function SearchTrackingComponent(props: any) {
  const router = useRouter();
  const [trackingId, setTrackingId] = useState("");

  const handleSearch = () => {
    if (trackingId.trim() !== "") {
      const route = `/main/shipments/${trackingId}`;
      router.push(route);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2.5 mt-10 px-4 max-w-[1200px] mx-auto bg-black">
      <div className="relative w-full max-w-[800px]">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59756517bbfb5efff65a29726624f2bb3ff9819eebcc9a7a92a5593e0c8b334f?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4"
          alt="Description of the image"
          width={800}
          height={600}
          className="absolute h-full w-full object-cover object-center inset-0"
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-[474px]">
        <div className="text-white text-center text-2xl font-bold">
          TRACKING CODE
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            className="w-full text-stone-300 text-xl leading-8 bg-white pl-11 pr-16 py-5 rounded-xl mb-2"
            placeholder="SEARCH BY ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
        </form>
        <div className="bg-red-400 rounded-sm mt-4 mb-4">
          <button type="submit" className="btn-primary text-black-400 uppercase text-2xl mr-4">Search</button>
        </div>
      </div>

    </div>
  );
}

export default SearchTrackingComponent;
