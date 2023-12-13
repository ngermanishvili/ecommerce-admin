import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";

export async function POST(
    req: Request,
) {
    try {
        const body = await req.json()

        const { name } = body;



        if (!name) {
            return new NextResponse("Name is required", { status: 400 })
        }

        // const store = await prismadb.shipment.create({
        //     data: {
        //         name,

        //     }
        // });

        // return NextResponse.json(store)

    } catch (error) {
        console.log('[STORES_POST]', error)
        return new NextResponse("Internal error BROJ", { status: 500 })
    }
}