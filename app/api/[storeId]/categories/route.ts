import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prismadb from "@/lib/prismadb";

export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name, billboardId, markedByCourier } = body;

        if (markedByCourier) {
            return new NextResponse("Unautheticated", { status: 401 })
        }

        if (!userId) {
            return new NextResponse("Unautheticated", { status: 401 })
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400 })
        }

        if (!billboardId) {
            return new NextResponse("billboard ID  is required", { status: 400 })
        }

        if (!params.storeId) {
            return new NextResponse("Store ID is required", { status: 400 })
        }



        const categories = await prismadb.category.create({
            data: {
                markedByCourier,
                name,
                billboardId,
                storeId: params.storeId
            }
        });

        return NextResponse.json(categories)

    } catch (error) {
        console.log('[CATEGORIES_POST]', error)
        return new NextResponse("Internal error BROJ", { status: 500 })
    }
}

export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
) {

    try {
        if (!params.storeId) {
            return new NextResponse("Store ID is required", { status: 400 })
        }


        const categories = await prismadb.category.findMany({
            where: {
                storeId: params.storeId

            }
        });

        return NextResponse.json(categories)

    } catch (error) {
        console.log('[BILLBOARDS_GET]', error)
        return new NextResponse("Internal error BROJ", { status: 500 })
    }
}