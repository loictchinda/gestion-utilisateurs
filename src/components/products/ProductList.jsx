import { useState } from "react";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

const PRODUCTS = [
    { id: 1, name: "Chaise", price: 49, stock: 5 },
    { id: 2, name: "Table", price: 99, stock: 0 },
    { id: 3, name: "Lampe", price: 20, stock: 10 },
    { id: 4, name: "Canapé", price: 399, stock: 2 },
];

function ProductList() {
    const [minStock, setMinStock] = useState(0);
    const [sortOrder, setSortOrder] = useState("asc");

    const filteredProducts = useFilteredProducts(PRODUCTS, minStock, sortOrder);

    return (
        <div className="product-list-manager">
            <h2>Catalogue Produits</h2>

            <ProductFilters
                minStock={minStock}
                sortOrder={sortOrder}
                onStockChange={setMinStock}
                onSortChange={setSortOrder}
            />

            <p className="product-count">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé
                {filteredProducts.length > 1 ? "s" : ""}
            </p>

            {filteredProducts.length === 0 ? (
                <p className="no-users">Aucun produit ne correspond aux critères.</p>
            ) : (
                <ul className="product-items">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductList;