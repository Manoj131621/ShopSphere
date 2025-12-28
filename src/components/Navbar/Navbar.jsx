import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useSelector } from 'react-redux'

function Navbar(){
    const totalQty = useSelector(state =>
         state.cart.items.reduce((sum,item) => sum+item.quantity,0));
    return(
        <nav className='navbar'>
            <Link to="/" className="navbar__logo">
            ShopSphere
            </Link>
            <div className='navbar__links'>
                <Link to="/cart" className='cart-link'>
                Cart { totalQty > 0 && (<span className='cart-badge'>{totalQty}</span>)}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar