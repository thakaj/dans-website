import React from "react";
import {Link} from "react-router-dom"

function NavBar({handleLogout}){
    

    return (
        <header>
            <nav > 
                <Link className="navbar" to="/">Home Page</Link>
                <Link className="navbar"to="/login">Login</Link>
                <Link className="navbar" to="/tutoring">Book Tutoring</Link>
                <Link className="navbar" to="/learn">Learn</Link>
                <Link className="navbar" to="/social">Social Media</Link>
                <Link className="navbar" to= "/contact">Contact</Link>
            </nav>
        </header>
    )
}
export default NavBar