import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import prismadb from "@/lib/prismadb";

export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth();
        const body = await req.json()

        const { label, imageUrl, address, name, lastName, phoneNumber } = body;


        if (!name) {
            return new NextResponse("Name is required", { status: 400 })
        }

        if (!lastName) {
            return new NextResponse("Last name is required", { status: 400 })
        }

        if (!phoneNumber) {
            return new NextResponse("Phone number is required", { status: 400 })
        }

        if (!address) {
            return new NextResponse("Address is required", { status: 400 })
        }

        if (!userId) {
            return new NextResponse("Unautheticated", { status: 401 })
        }

        if (!label) {
            return new NextResponse("Label is required", { status: 400 })
        }

        if (!imageUrl) {
            return new NextResponse("Image URL is required", { status: 400 })
        }

        if (!params.storeId) {
            return new NextResponse("Store ID is required", { status: 400 })
        }

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
        })

        const billboard = await prismadb.billboard.create({
            data: {
                address,
                label,
                imageUrl,
                storeId: params.storeId,
                name: name,
                lastName,
                phoneNumber,
            }
        });

        return NextResponse.json(billboard)

    } catch (error) {
        console.log('[BILLBOARDS_POST]', error)
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


        const billboards = await prismadb.billboard.findMany({
            where: {
                storeId: params.storeId

            }
        });

        return NextResponse.json(billboards)

    } catch (error) {
        console.log('[BILLBOARDS_GET]', error)
        return new NextResponse("Internal error BROJ", { status: 500 })
    }
}