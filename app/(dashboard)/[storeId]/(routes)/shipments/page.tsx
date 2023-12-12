
import prismadb from "@/lib/prismadb";
import { format } from 'date-fns'

import { ShipmentClientlient } from "./components/client";
import { ShipmentColumn } from "./components/columns";

const ShipmentPage = async ({
    params
}: {
    params: {
        storeId: string;
    }

}) => {

    const shipments = await prismadb.shipment.findMany({
        where: {
            storeId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    const formattedShipments: ShipmentColumn[] = shipments.map((item) => ({
        id: item.id,
        name: item.name,
        lastName: item.lastName,
        city: item.city,
        brittle: item.brittle,
        price: item.price,
        phoneNumber: item.phoneNumber,
        address: item.address,


        createdAt: format(item.createdAt, 'MMMM do, yyyy')

    }))

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ShipmentClientlient data={formattedShipments} />
            </div>
        </div>
    )
}

export default ShipmentPage;