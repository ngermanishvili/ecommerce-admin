import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";
import ClientOnly from "@/app/components/ClientOnly";


export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { storeId: string }
}) {

    // const { userId } = auth();

    // if (!userId) {
    //     redirect('/sign-in')
    // }

    return (
        <>
            <div>
                <Navbar />
                {children}
            </div>
        </>
    )

}
