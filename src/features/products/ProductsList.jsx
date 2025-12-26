import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsThunk";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDebounce } from "../../hooks/useDebounce";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";

function ProductsList(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { items, loading, error } = useSelector((state)=>state.products)
    console.log("check items",items)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')

    const debouncedSearch = useDebounce(search)

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    const filteredProducts = useMemo(()=>{
        let products = [...items]
        // Search 
        if(debouncedSearch) {
            products = products.filter((p)=>
                p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
            )
        }

        // Category
        if (category) {
            products = products.filter((p)=> p.category === category)
        }

        // Sort
        if(sort === 'low'){
            products.sort((a,b) => a.price - b.price)
        }
        if(sort === 'high'){
            products.sort((a,b) => b.price - a.price)
        }
        return products
    },[items, debouncedSearch, category, sort])
    const handleProductClick = useCallback((id)=>{
        navigate(`/product/${id}`)
    },[navigate])

    if(loading) return <Loader/>
    if(error) return <p>Error: {error}</p>
    return(
        <>
        <SearchBar value={search} onChange={setSearch}/>
        <Filters
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        />
        <div className="products-grid">
            { filteredProducts.map((product) => (
                <ProductCard key={product.id}
                product={product}
                onClick={()=> navigate(`/product/${product.id}`)} 
                />
            ))}
            
        </div>
        </>
    )
}

export default ProductsList