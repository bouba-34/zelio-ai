"use client"
import React, {useState} from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, ArrowUpDown } from "lucide-react"

interface Product {
    id: string
    name: string
    price: number
    status: "live" | "draft"
    created: string
}

const initialProducts: Product[] = [
    {
        id: "1",
        name: "Prodigies University",
        price: 77,
        status: "live",
        created: "24 Apr 2024",
    },
]


const Products = () => {
    const [products] = useState(initialProducts)
    const [sortConfig, setSortConfig] = useState<{
        key: keyof Product
        direction: "asc" | "desc"
    } | null>(null)

    const sortedProducts = [...products].sort((a, b) => {
        if (!sortConfig) return 0

        const { key, direction } = sortConfig
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1
        return 0
    })

    const requestSort = (key: keyof Product) => {
        setSortConfig((current) => {
            if (!current || current.key !== key) {
                return { key, direction: "asc" }
            }
            return {
                key,
                direction: current.direction === "asc" ? "desc" : "asc",
            }
        })
    }

    return (
        <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20" />
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-xl font-semibold text-white">Products</CardTitle>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Search products..."
                                    className="pl-9 bg-gray-800/50 border-gray-700/20 text-white w-[200px]
                           placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                                />
                            </div>
                            <Button
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700
                         hover:to-cyan-700 text-white"
                            >
                                <Plus className="h-4 w-4 mr-2" />
                                Add Product
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-lg border border-gray-700/50 overflow-hidden">
                            <Table>
                                <TableHeader className="bg-gray-800/50">
                                    <TableRow className="hover:bg-gray-800/50 border-gray-700/50">
                                        <TableHead className="text-gray-400">
                                            <Button
                                                variant="ghost"
                                                onClick={() => requestSort("name")}
                                                className="text-gray-400 hover:text-white"
                                            >
                                                Name
                                                <ArrowUpDown className="ml-2 h-4 w-4" />
                                            </Button>
                                        </TableHead>
                                        <TableHead className="text-gray-400">
                                            <Button
                                                variant="ghost"
                                                onClick={() => requestSort("price")}
                                                className="text-gray-400 hover:text-white"
                                            >
                                                Price
                                                <ArrowUpDown className="ml-2 h-4 w-4" />
                                            </Button>
                                        </TableHead>
                                        <TableHead className="text-gray-400">Status</TableHead>
                                        <TableHead className="text-gray-400">
                                            <Button
                                                variant="ghost"
                                                onClick={() => requestSort("created")}
                                                className="text-gray-400 hover:text-white"
                                            >
                                                Created
                                                <ArrowUpDown className="ml-2 h-4 w-4" />
                                            </Button>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sortedProducts.map((product) => (
                                        <TableRow key={product.id} className="hover:bg-gray-800/50 border-gray-700/50">
                                            <TableCell className="font-medium text-white">{product.name}</TableCell>
                                            <TableCell className="text-gray-300">${product.price}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={product.status === "live" ? "success" : "secondary"}
                                                    className={
                                                        product.status === "live"
                                                            ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                                                            : "bg-gray-500/10 text-gray-400 hover:bg-gray-500/20"
                                                    }
                                                >
                                                    {product.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-300">{product.created}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
export default Products
