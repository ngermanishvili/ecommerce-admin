import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET(
    req: Request,
    { params }: { params: { shipmentId: string } }
) {
    try {

        if (!params.shipmentId) {
            return new NextResponse("billboardId ID is required", { status: 400 })
        }
        const shipment = await prismadb.shipment.findUnique({
            where: {
                id: params.shipmentId,
            },
        });
        return NextResponse.json(shipment)

    } catch (error) {
        console.log('[SHIPMENT_GET]', error)
        return new NextResponse("Internal error", { status: 500 })

    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { storeId: string, shipmentId: string } }
) {
    try {
        const { userId } = auth();

        const body = await req.json();

        const { name, lastName, phoneNumber, address, city, brittle, price, markedByCourier } = body;


        if (!phoneNumber) {
            return new NextResponse("phoneNumber is required", { status: 400 })
        }

        if (!address) {
            return new NextResponse("address is required", { status: 400 })
        }

        if (!city) {
            return new NextResponse("city is required", { status: 400 })
        }

        if (!price) {
            return new NextResponse("price is required", { status: 400 })
        }

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }

        if (!name) {
            return new NextResponse("Label is required", { status: 400 })
        }

        if (!lastName) {
            return new NextResponse("Image URL is required", { status: 400 })
        }

        if (!params.shipmentId) {
            return new NextResponse("shipment ID is required", { status: 400 })
        }



        const shipment = await prismadb.shipment.updateMany({
            where: {
                id: params.shipmentId,
            },
            data: {
                phoneNumber,
                address,
                city,
                brittle,
                price,
                name,
                lastName,
                markedByCourier // Include this field in the update operation
            }
        });

        return NextResponse.json(shipment)

    } catch (error) {
        console.log('[SHIPMENT_PATCH]', error)
        return new NextResponse("Internal error", { status: 500 })

    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string, shipmentId: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }

        if (!params.shipmentId) {
            return new NextResponse("billboardId ID is required", { status: 400 })
        }



        const shipment = await prismadb.shipment.deleteMany({
            where: {
                id: params.shipmentId,
            },
        });

        return NextResponse.json(shipment)

    } catch (error) {
        console.log('[SHIPMENT_DELETE]', error)
        return new NextResponse("Internal error", { status: 500 })

    }
}