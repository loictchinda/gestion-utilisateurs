function ProductCard({ product }) {
    const isOutOfStock = product.stock === 0;

    return (
        <li className={`product-card ${isOutOfStock ? "out-of-stock" : ""}`}>
            <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price} €</span>
            </div>
            <div className="product-stock">
                {isOutOfStock ? (
                    <span className="stock-badge out">Rupture de stock</span>
                ) : (
                    <span className="stock-badge in">{product.stock} en stock</span>
                )}
            </div>
        </li>
    );
}

export default ProductCard;