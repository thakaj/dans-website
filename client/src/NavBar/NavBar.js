import React from "react";
import {Link} from "react-router-dom"

function NavBar({handleLogout, currentStudent}){
    function handleDelete(){
        fetch("/logout", {
            method: "DELETE" 
        })
        .then(r => r.json())
        .then(() => {
            console.log("logout was sucessful")
            handleLogout()
        })

    }

    return (
        <header>
            <nav > 
                <Link className="navbar" to="/">Home Page</Link>
                {currentStudent ? (<Link className="navBar" to="/" onClick={handleDelete}>Logout</Link>) : (<Link className="navbar"to="/login">Login</Link>)}
                <Link className="navbar" to="/tutoring">Book Tutoring</Link>
                <Link className="navbar" to="/social">Social Media</Link>
            </nav>
        </header>
    )
}
export default NavBar