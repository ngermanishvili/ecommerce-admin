import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";

export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const body = await req.json()

        const { name, lastName, phoneNumber, address, city, brittle, price, markedByCourier } = body;



        if (!phoneNumber) {
            return new NextResponse("Phone number is required", { status: 400 })
        }
        if (!address) {
            return new NextResponse("Address is required", { status: 400 })
        }

        if (!city) {
            return new NextResponse("City is required", { status: 400 })
        }

        if (!price) {
            return new NextResponse("Price is required", { status: 400 })
        }


        if (!name) {
            return new NextResponse("Label is required", { status: 400 })
        }

        if (!lastName) {
            return new NextResponse("Image URL is required", { status: 400 })
        }

        if (!params.storeId) {
            return new NextResponse("Store ID is required", { status: 400 })
        }

        const shipment = await prismadb.shipment.create({
            data: {

                name,
                lastName,
                phoneNumber,
                address,
                city,
                brittle,
                price,
                markedByCourier,
                storeId: params.storeId
            }
        });

        return NextResponse.json(shipment)

    } catch (error) {
        console.log('[SHIPMENT_POST]', error)
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


        const shipment = await prismadb.shipment.findMany({
            where: {
                storeId: params.storeId

            }
        });

        return NextResponse.json(shipment)

    } catch (error) {
        console.log('[SHIPMENT_GET]', error)
        return new NextResponse("Internal error BROJ", { status: 500 })
    }
}