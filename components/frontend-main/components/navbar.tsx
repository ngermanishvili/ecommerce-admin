import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header(props: any) {
    return (
        <header className="self-stretch flex w-full justify-between gap-5 pr-16 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div className="flex items-stretch gap-1 mt-1">
                <div className="text-red-400 text-3xl font-bold">D2D.</div>
                <div className="text-zinc-800 text-3xl font-bold whitespace-nowrap self-start">GE</div>
            </div>
            <nav className="flex items-start justify-between gap-5 mt-3.5 max-md:justify-center">
                <a href="#" className="text-red-400 text-base font-medium self-start">MAIN</a>
                <a href="#" className="text-neutral-300 text-base font-medium self-stretch">ABOUT</a>
                <a href="#" className="text-neutral-300 text-base font-medium self-start">CONTACT</a>
                <a href="#" className="text-neutral-300 text-base font-medium whitespace-nowrap self-start">SERVICES</a>
            </nav>
            <div className="flex items-start justify-between gap-2.5 max-md:justify-center">
                <div className="text-zinc-800 text-base font-medium self-center whitespace-nowrap my-auto">
                    <Button>
                        <Link href='/main'>
                            AUTHORIZATION
                        </Link>
                    </Button>
                </div>
                {/* <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fdb66bdc52cc8e4aa1b4ba9c6d328e8e2ec4913a6f1a19b4d01771ab5235f18?apiKey=51bfafa4352f47b3b624fa2aa0dc0ef4&"
                    alt="Support Image"
                    className="aspect-[3.77] object-contain object-center w-[98px] overflow-hidden self-stretch shrink-0 max-w-full"
                    width={98}
                    height={10}
                /> */}
                <div className="text-zinc-800 text-base font-medium self-center my-auto">GE</div>

            </div>
        </header>
    );
}

export default function App() {
    return (
        <div>
            <Header />
        </div>
    );
}
