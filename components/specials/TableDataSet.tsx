"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Label } from "../ui/label"

const data: Payment[] = [
  {
    id: "u9t6f8a2",
    amount: 500,
    status: "success",
    email: "johnDoe@gmail.com",
  },
  {
    id: "p4qr7sv5",
    amount: 150,
    status: "success",
    email: "emmaJohnson@yahoo.com",
  },
  {
    id: "k3z6p1w8",
    amount: 400,
    status: "processing",
    email: "mikeSmith@hotmail.com",
  },
  {
    id: "x2v9j4c7",
    amount: 920,
    status: "success",
    email: "lucyWilliams@gmail.com",
  },
  {
    id: "s5f8e3h2",
    amount: 600,
    status: "failed",
    email: "davidBrown@gmail.com",
  },
  {
    id: "n1m8z5x7",
    amount: 780,
    status: "success",
    email: "sarahLee@hotmail.com",
  },
  {
    id: "g9b4d1f7",
    amount: 320,
    status: "success",
    email: "samuelAdams@yahoo.com",
  },
  {
    id: "r3t6y9u1",
    amount: 480,
    status: "processing",
    email: "oliviaClark@gmail.com",
  },
  {
    id: "q1w4e7r9",
    amount: 700,
    status: "success",
    email: "avaWilson@hotmail.com",
  },
  {
    id: "z8x5c2v4",
    amount: 890,
    status: "failed",
    email: "ethanMoore@gmail.com",
  },
  {
    id: "h7j3k6l9",
    amount: 250,
    status: "success",
    email: "miaRoberts@yahoo.com",
  },
  {
    id: "b2n5m8q3",
    amount: 380,
    status: "processing",
    email: "noahThompson@hotmail.com",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <>
  //        <Label
  //             htmlFor="emailFilter"
  //             className="flex flex-col "
  //           >
  //             {table.getIsAllRowsExpanded()}
  //             <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && "indeterminate")
  //         }
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //           </Label>


  //     </>
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status")

      return (
        <div
        aria-label={`Status: ${row.getValue("status")}`}
        tabIndex={0}

          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
            status === "success"
              ? "bg-green-100 text-green-800"
              : status === "processing"
              ? "bg-yellow-100 text-yellow-800"
              : status === "failed"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.getValue("status")}
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div tabIndex={0}  aria-label={`Email: ${row.getValue("email")}`} className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
     cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div  tabIndex={0}  aria-label={`Amount: ${formatted }`} className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: ({  }) => {
      return (
        <div tabIndex={0}  aria-label={`Actions`}>actions</div>
      )
    },
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu for email : {`${row.getValue("email")}`} </span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View More</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full" aria-label="Payments Table">
      <div className="flex items-center py-4">
              <Label
                htmlFor="emailFilter"
                className="flex flex-col pr-3"
              >
              Filter Email :

            </Label>
            <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
          id="emailFilter"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
