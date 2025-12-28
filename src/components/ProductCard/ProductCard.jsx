import React from "react";
import './ProductCard.scss'
import { useDispatch } from "react-redux";
import { addToCart, calculateTotals } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ product }){
    const dispatch = useDispatch()

    const handleAdd = () =>{
        dispatch(addToCart(product))
        dispatch(calculateTotals())
    }
    return(
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
            <img
            src={product.image}
            alt={product.title}
            className="product-card__image"
            />
            <h4 className="product-card__title">{product.title}</h4>
            </Link>
            
                <p className="product-card__price">${product.price}</p>
                <button onClick={handleAdd}>Add to Cart</button>
            
        </div>
    )
}

export default React.memo(ProductCard);