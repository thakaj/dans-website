import React from 'react'
import { useState} from 'react'
import {useHistory} from "react-router-dom"

function StudentSignUp({currentStudent, handleLogin}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        fetch("/signup", {
            method: "Post",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student: {
                    email,
                    password,
                    password_confirmation: passwordConfirmation
                }
            })
        })
        .then(r => {
            if (r.ok){
                r.json()
                    .then(data => {
                        handleLogin(data)
                        setEmail("")
                        setPassword("")
                        setPasswordConfirmation("")
                        history.push("/update")
            })
            }else {
                r.json()
                .then(e => console.log(e))
            }
        })
    }
    

    
    return (
        <div>
            <label>Sign Up: </label>
             <form onSubmit={handleSubmit}>
             <label> Enter Email: </label><br/>
               <input type="text"  id="email-input" 
               onChange={e => setEmail(e.target.value)}
               value={email}
               placeholder="Enter ..."
               /><br/>
               <label> Create Password: </label><br/>
               <input type="text" id="password-input" 
               onChange={e=> setPassword(e.target.value)}
               value={password}
               placeholder="Enter..."
               /><br/>
               <label> Confirm Password </label><br/>
               <input type="text" id="passwordConirmation-input" 
               onChange={e=> setPasswordConfirmation(e.target.value)}
               value={passwordConfirmation}
               placeholder="Enter..."
               />
               <button type="submit">Submit!</button>
           </form>
        </div>
    )
}
export default StudentSignUp