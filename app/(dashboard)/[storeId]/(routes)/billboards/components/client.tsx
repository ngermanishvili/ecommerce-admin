"use client"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { Billboard } from "@prisma/client"


import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

interface BillBoardClientProps {
    data: Billboard[];

}

export const BillBoardClient: React.FC<BillBoardClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboards(${data.length})`}
                    description="manage your billboards"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4 " />
                    Add New
                </Button>
            </div>
            <Separator />
        </>
    )
}