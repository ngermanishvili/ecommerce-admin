"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header(props: any) {
    return (
        <div className="bg-black">
            <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center gap-5 px-4 py-4 max-md:flex-wrap">
                <div className="flex items-center gap-1">
                    <div className="text-red-400 text-3xl font-bold">D2D.</div>
                    <div className="text-zinc-800 text-3xl font-bold whitespace-nowrap self-start">GE</div>
                </div>
                <nav className="flex items-center justify-between gap-5 max-md:justify-center">
                    <a href="#" className="text-red-400 text-base font-medium self-start">MAIN</a>
                    <a href="#" className="text-neutral-300 text-base font-medium self-stretch">ABOUT</a>
                    <a href="#" className="text-neutral-300 text-base font-medium self-start">CONTACT</a>
                    <a href="#" className="text-neutral-300 text-base font-medium whitespace-nowrap self-start">SERVICES</a>
                </nav>
                <div className="flex items-center justify-between gap-2.5 max-md:justify-center">
                    <div className="text-zinc-800 text-base font-medium self-center whitespace-nowrap my-auto">
                        <Button>
                            <Link className="text-red-400" href="/main">AUTHORIZATION</Link>
                        </Button>
                    </div>
                    <div className="text-zinc-800 text-base font-medium self-center my-auto">GE</div>
                </div>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <Header />
        </div>
    );
}
