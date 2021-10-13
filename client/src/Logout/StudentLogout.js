import React from "react";

function StudentLogout({handleLogout}){
    
    function handleDelete(){
        fetch("/logout", {
            method: "DELETE" 
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            handleLogout()
        })

    }
    

    return (

        <button onClick={handleDelete}>Logout</button>
    )
}
export default StudentLogout