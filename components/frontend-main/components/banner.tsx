"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { fetchBillboardImageUrl } from "@/utils/banner-api"; // Adjust the import path

export function BannerSection() {
    const [imageUrl, setImageUrl] = useState("");
    const [label, setLabel] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await fetchBillboardImageUrl();
            if (data) {
                setImageUrl(data.imageUrl);
                setLabel(data.label);
            }
        }
        fetchData();
    }, []);

    return (
        <>

            <header className="flex-col text-red-400 text-3xl font-bold relative whitespace-nowrap overflow-hidden self-stretch min-h-[357px] w-full justify-center items-center mt-9 pt-36 pb-40 px-16 max-md:max-w-full max-md:px-5 max-md:py-10 rounded-sm">
                <Image
                    loading="lazy"
                    src={imageUrl}
                    alt="Description of the image goes here" // Provide a meaningful alt text
                    className="absolute h-full w-full object-cover object-center inset-0"
                    width={800}
                    height={600}
                />
            </header>
            <h2>
                ES ARIS BILLBORDIS LABEL MODIS PANELIDAN DA BILLBOARDS QVIA
                <br />
                {label}
            </h2>
        </>
    );
}

export default BannerSection;
