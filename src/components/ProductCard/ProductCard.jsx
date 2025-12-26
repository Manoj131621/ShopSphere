import React from "react";
import './ProductCard.scss'

function ProductCard({product, onClick}){
    return(
        <div className="product-card" onClick={onClick}>
            <img
            src={product.image}
            alt={product.title}
            className="product-card__image"
            />
            <div className="product-card_info">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__price">${product.price}</p>
            </div>
        </div>
    )
}

export default React.memo(ProductCard);