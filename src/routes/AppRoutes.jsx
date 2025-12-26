import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

const Home = lazy(() => import('../pages/Home'))
const ProductDetails = lazy(() => import('../pages/ProductDetails'))
const CartPage = lazy(() => import('../pages/CartPage'))

function AppRoutes(){
    return(
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes;