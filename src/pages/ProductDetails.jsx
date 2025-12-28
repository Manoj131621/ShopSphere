import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../features/products/productsThunk'
import Loader from '../components/Loader/Loader'
import { useEffect } from 'react'

function ProductDetails(){
    const { id } = useParams()
    const dispatch = useDispatch()

    const { selectedProduct, loading, error } = useSelector((state) => state.products)
    
    useEffect(()=>{
        dispatch(getProductById(id))
    },[dispatch,id])

    if(loading) return <Loader />
    if(error) return <p>{error}</p>
    if(!selectedProduct) return <p>No Product found</p>;
    return(
        <div className='product-details'>
            <img src={selectedProduct.image} alt={selectedProduct.title}/>
            <div>
                <h2>{selectedProduct.title}</h2>
                <p>{selectedProduct.description}</p>
                <h3>${selectedProduct.price}</h3>
            </div>
        </div>
    )
}

export default ProductDetails