import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsThunk";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductsList(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { items, loading, error } = useSelector((state)=>state.products)
    console.log("check items",items)
    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    const handleProductClick = useCallback((id)=>{
        navigate(`/product/${id}`)
    },[navigate])

    if(loading) return <Loader/>
    if(error) return <p>Error: {error}</p>
    return(
        <div className="products-grid">
            { items.map((product) => (
                <ProductCard key={product.id}
                product={product}
                onClick={()=> handleProductClick(product.id)} 
                />
            ))}
            
        </div>
    )
}

export default ProductsList