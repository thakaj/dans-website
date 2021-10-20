import React, {useState, useEffect} from "react";
import Select from 'react-select'

function TutoringForm(){
    const [remote, setRemote] = useState(false)
    const [location, setLocation] = useState("")
    const [time, setTime] = useState("")
    const [instruments, setInstruments] = useState("")
    useEffect(()=> {
        fetch("/instruments")
        .then(r => r.json())
        .then(r => {
            console.log(r)
            setInstruments(r)})
        },[])
        
        const options = instruments.map(i => ({
            "value": i.id,
            "label": i.name
        }))   
        

    // [
        


    //     // { value: 'chocolate', label: 'Chocolate' },
    //     // { value: 'strawberry', label: 'Strawberry' },
    //     // { value: 'vanilla', label: 'Vanilla' }
    //   ]

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/appointments`,{
            method: "POST",
            headers: {
                "Content-Type": "applcation/json",
                "Accepts": "applcation/json"
            },
            body: JSON.stringify({remote,location,time})
        })
        .then(r => {
            if (r.ok){
                r.json()
                    .then(data => {
                        setLocation("")
                        setRemote(false)

                    })
            } else {
                r.json()
                .then(data=> console.log(data))
            }
        })
  }

    return (
        <div >
            <div>
                <form onSubmit={handleSubmit}>
                <label>Remote: </label>
                    <input type="text" id="remote" name="remote"
                    // onChange={e=> setLocation(e.target.value)}
                    // value={}
                    />
                    <label>Location: </label>
                    <input type="text" id="location" name="location"
                    onChange={e=> setLocation(e.target.value)}
                    value={location}
                    placeholder="Enter Location"
                    />
                    <label>Time: </label>
                    <input type="text" id="time" name="time"
                    // onChange={}
                    // value={}
                    placeholder="Enter Time"
                    />
                    <label>Instrument: </label>
                    <input type="text" id="instrument" name="instrument"
                    // onChange={}
                    // value={}
                    placeholder="Enter Instrument"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default TutoringForm