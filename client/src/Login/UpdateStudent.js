import React from "react";
import {useHistory} from "react-router-dom"
import { useState} from 'react'

function UpdateStudent({currentStudent}){
    const [firstName, setFristName] = useState("")
    const [lastName, setLastName] = useState("")
    const history = useHistory()
    
    function handleSubmit(e){
        e.preventDefault()
        fetch(`/student/${currentStudent.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({first_name: firstName, last_name: lastName})
        })
        .then(r => {
            if (r.ok && (firstName.length > 0 || lastName.length > 0)){
                r.json()
                .then(data =>{
                    console.log(data)
                    setLastName("")
                    setFristName("")
                    history.push("/")
                })
            }else {
                r.json()
                .then(e =>{ 
                    alert(e.errors)
                })
            }
        })
    }


    return (
        <div>
             <form onSubmit={handleSubmit}>
             <label> Enter First Name: </label><br/>
              <input type="text"  name="firstName" 
               onChange={e => setFristName(e.target.value)}
               value={firstName}
               placeholder="Enter ..."
               /><br/>
                <label> Enter Last Name: </label><br/>
               <input type="text"  name="lastName" 
               onChange={e => setLastName(e.target.value)}
               value={lastName}
               placeholder="Enter ..."
               />
               <button type="submit">Submit!</button>
           </form>
        </div>
    )
}
export default UpdateStudent