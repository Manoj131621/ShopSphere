import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotals, decreaseQty, increaseQty, removeFromCart } from "../features/cart/cartSlice"

function CartPage(){
    const dispatch = useDispatch()
    const { items, totalPrice } = useSelector(state=> state.cart)

    useEffect(()=>{
        dispatch(calculateTotals())
    },[items,dispatch])
    if(items.length === 0) return <h2>Cart is Empty</h2>

    return(
        <div className="cart-page">
            {
                items.map(item=> (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title}/>
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                            <button onClick={()=> dispatch(decreaseQty(item.id))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=> dispatch(increaseQty(item.id))}>+</button>
                            <button onClick={()=> dispatch(removeFromCart(item.id))}>
                                Remove 
                            </button>
                        </div>
                     </div>   
                ))
            }
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    )
}

export default CartPage