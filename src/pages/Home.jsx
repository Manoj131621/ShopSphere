import { useSelector } from "react-redux"

function Home() {
    const products = useSelector((state) => state.products.items)
    return(
        <>
        <h1>Products Count: {products.length}</h1>
        </>
    )
}

export default Home