import { useSelector } from "react-redux"
import ProductsList from "../features/products/ProductsList"

function Home() {
    
    return(
        <>
        <h1>ShopSphere</h1>
        <ProductsList/>
        </>
    )
}

export default Home