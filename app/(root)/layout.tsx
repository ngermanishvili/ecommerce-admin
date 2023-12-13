import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children
}: {
    children: React.ReactNode
}) {
    // const { userId } = auth();

    // if (!userId) {
    //     redirect('/sign-in')
    // }



    return (
        <>
            {children}
        </>
    )
}
