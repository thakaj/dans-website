import React from "react";
import {Link} from "react-router-dom"

function NavBar({handleLogout}){
    

    return (
        <header>
            <nav> 
                <Link to="/">Home Page</Link>
                <Link to="/login">Login</Link>
                <Link to="/tutoring">Book Tutoring</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/social">Social Media</Link>
                <Link to= "/contact">Contact</Link>
            </nav>
        </header>
    )
}
export default NavBar