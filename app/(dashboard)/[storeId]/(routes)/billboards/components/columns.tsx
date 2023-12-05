"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type BillboardColumn = {
    id: string
    label: string
    createdAt: string
    address: string
    name: string
    lastName: string
    phoneNumber: string
}

export const columns: ColumnDef<BillboardColumn>[] = [

    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "lastName",
        header: "lastName",
    },
    {
        accessorKey: "phoneNumber",
        header: "phoneNumber",
    },
    {
        accessorKey: "label",
        header: "Label",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        accessorKey: "address",
        header: "Adress",
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
]
