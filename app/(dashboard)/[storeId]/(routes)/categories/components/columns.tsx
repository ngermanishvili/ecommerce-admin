"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type CategoryColumn = {
    id: string
    name: string
    billboardLabel: string
    createdAt: string
}

export const columns: ColumnDef<CategoryColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "billboard",
        header: "Billboard",
        // this cell is for the billboard label for example "Billboard 1" or "Billboard 2" etc. 
        cell: ({ row }) => row.original.billboardLabel
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        accessorKey: "id",
        header: "id",
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
]
