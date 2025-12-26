import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsThunk";
import Loader from "../../components/Loader/Loader";

function ProductsList(){
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector((state)=>state.products)
    console.log("check items",items)
    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])
    if(loading) return <Loader/>
    if(error) return <p>Error: {error}</p>
    return(
        <div>
            { items.map((product) => (
                <div key={product.id}>{product.title}</div>
            ))}
            
        </div>
    )
}

export default ProductsList