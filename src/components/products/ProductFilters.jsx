function ProductFilters({ minStock, sortOrder, onStockChange, onSortChange }) {
    return (
        <div className="product-filters">
            <div className="filter-group">
                <label htmlFor="minStock">Stock minimum :</label>
                <input
                    id="minStock"
                    type="number"
                    min={0}
                    value={minStock}
                    onChange={(e) => onStockChange(Number(e.target.value))}
                />
            </div>

            <div className="filter-group">
                <label htmlFor="sortOrder">Tri par prix :</label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="asc">Croissant ↑</option>
                    <option value="desc">Décroissant ↓</option>
                </select>
            </div>
        </div>
    );
}

export default ProductFilters;