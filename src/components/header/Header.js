import {Link} from "react-router-dom";

function Header(){
    return (
        <div className="MenuBar">
            <ul className="navbar">
                <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                <li><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></li>
                <li><Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>Register</Link></li>
                <li><Link to="/add-product" style={{ textDecoration: 'none', color: 'black' }}>Product</Link></li>
            </ul>
        </div>
    )
}

export default Header