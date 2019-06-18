import React from 'react';
import { Link } from 'react-router-dom';


 const Navbar = () => {
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo"> Skate-Shoppe </Link>
                    <ul className="right">
                        <li><Link to="/shop"> Shop </Link></li>
                        <li><Link to="/register"> Sign Up </Link></li>
                        <li><Link to="/login"> Log In </Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    );
};

export default Navbar;