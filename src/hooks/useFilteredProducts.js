import { useMemo } from "react";

export function useFilteredProducts(products, minStock, sortOrder) {
    return useMemo(() => {
        console.log("🔄 Recalcul du filtrage produits...");

        const filtered = products.filter((p) => p.stock >= minStock);

        const sorted = [...filtered].sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );

        return sorted;
    }, [products, minStock, sortOrder]);
}