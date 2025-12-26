import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar(){
    return(
        <nav className='navbar'>
            <Link to="/" className="navbar__logo">
            ShopSphere
            </Link>
            <div className='navbar__links'>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar