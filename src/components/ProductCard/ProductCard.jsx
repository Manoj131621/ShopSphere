import React from "react";
import './ProductCard.scss'
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, calculateTotals, decreaseQty, increaseQty } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ product }){
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const cartItem = cartItems.find(item => item.id === product.id)

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
            <div className="product-card__actions">
            {
                !cartItem ? (
                    <button
                    className="add-btn" 
                    onClick={()=> {
                        dispatch(addToCart(product))
                        toast.success("Added to cart")
                        }}>
                        Add to Cart
                        </button>
                ) : (
                    <div className="qty-controls">
                        <button onClick={()=> dispatch(decreaseQty(product.id))}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={()=>dispatch(increaseQty(product.id))}>+</button>
                        </div>
                )
            }
            </div>
        </div>
    )
}

export default React.memo(ProductCard);