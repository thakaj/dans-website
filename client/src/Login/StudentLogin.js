import React from "react";
import {Redirect, useHistory} from "react-router-dom"
import { useState} from 'react'

function StudentLogin({currentStudent, handleLogin}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

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
            .then(e => {
                console.log(e.errors)})
        }
    })
}
if (currentStudent){
    return <Redirect to="/" />
}

    return (
        <div>
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
             <div>Create your own account here: {<button type="submit" onClick={() => {history.push("/signup")}}>Register</button>}
            </div>
        </div>
    )
}
export default StudentLogin