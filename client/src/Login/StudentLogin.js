import React, {useState} from "react";
import {Redirect} from "react-router-dom"

function StudentLogin({currentStudent, handleLogin}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            student: {
                email,
                password
            }
        })
    })
    .then(r => {
        if (r.ok)
        r.json()
        .then(data=> {
            handleLogin(data)
            console.log(data)
            setEmail("")
            setPassword("")
        })
        else {
            r.json()
            .then(e => setErrors(e.errors))
        }
    })
}
if (currentStudent){
    return <Redirect to="/" />
}

    return (
        <div>
             {errors.length > 0 &&<h2 style={{ color: "black" }} >Error: {errors} please try again</h2>}
            <label>Login: </label>
             <form onSubmit={handleSubmit}>
             <label> Email: </label><br/>
               <input type="text"  id="email" 
               onChange={e => setEmail(e.target.value)}
               value={email}
               placeholder="Enter ..."
               /><br/>
               <label> Password: </label><br/>
               <input type="text" id="password" 
               onChange={e=> setPassword(e.target.value)}
               value={password}
               placeholder="Enter..."
               />
                <button type="submit">Submit!</button>
                <br/>
             </form>
        </div>
    )
}
export default StudentLogin