import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try {

        if (!params.categoryId) {
            return new NextResponse("Category ID is required", { status: 400 })
        }
        const category = await prismadb.category.findUnique({
            where: {
                id: params.categoryId,
            },
        });
        return NextResponse.json(category)

    } catch (error) {
        console.log('[CATEGORY_GET]', error)
        return new NextResponse("Internal error", { status: 500 })

    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { storeId: string, categoryId: string } }
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name, billboardId, markedByCourier } = body;

        if (markedByCourier) {
            return new NextResponse("Unautheticated", { status: 401 })
        }

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }

        if (!name) {
            return new NextResponse("Name is required", { status: 400 })
        }

        if (!billboardId) {
            return new NextResponse("billboard ID is required", { status: 400 })
        }

        if (!params.categoryId) {
            return new NextResponse("category ID is required", { status: 400 })
        }

        const storeByUserId = await prismadb.billboard.findFirst({
            where: {
                id: params.storeId,

            }
        })

        if (!storeByUserId) {
            return new NextResponse("Unaothorized", { status: 403 })
        }

        const category = await prismadb.category.updateMany({
            where: {
                id: params.categoryId,
            },
            data: {
                markedByCourier,
                name,
                billboardId
            }
        });

        return NextResponse.json(category)

    } catch (error) {
        console.log('[CATEGORY_PATCH]', error)
        return new NextResponse("Internal error", { status: 500 })

    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string, categoryId: string } }
) {
    try {
        const { userId } = auth();


        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }

        if (!params.categoryId) {
            return new NextResponse("category ID is required", { status: 400 })
        }



        const storeByUserId = await prismadb.category.findFirst({
            where: {
                id: params.categoryId,

            }
        })

        if (!storeByUserId) {
            return new NextResponse("Unaothorized", { status: 403 })
        }

        const category = await prismadb.category.deleteMany({
            where: {
                id: params.categoryId,
            },
        });

        return NextResponse.json(category)

    } catch (error) {
        console.log('[CATEGORY_DELETED]', error)
        return new NextResponse("Internal error", { status: 500 })

    }
}