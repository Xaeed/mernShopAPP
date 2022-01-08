
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2> Mern Shopping cart </h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to={"/cart"}>Cart <span className="cartlogo__badge">0</span></Link>
                </li>
                <li>
                    <Link to={"/"}>Shop</Link>
                </li>
            </ul>
            <div className="cartlogo__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar