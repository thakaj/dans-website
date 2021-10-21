import React, {useState, useEffect} from "react";
import Select from 'react-select'

function TutoringForm(){
    const [remote, setRemote] = useState(false)
    const [location, setLocation] = useState("")
    const [time, setTime] = useState("")
    const [instruments, setInstruments] = useState([])
    const [pdfs, setPdfs] = useState([])
    const [name, setName] = useState("")
   
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
        
    const remoteOptions = [{value: 'true', label: 'Yes'},
                            {value: 'false', label: 'No'}]


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

  function handleUpdate(e){
      e.preventDefault()
        fetch('/instruments/', {
            method: "Patch",
            body: ({name,pdfs})
        })
        .then(r => {
            if (r.ok){
                r.json()
                    .then(data => {
                        setName("")
                        setPdfs([])
                        console.log(data)
                    })
            } else {
                r.json()
                    .then( data => console.log(data))
            }
        })
    
    }


    return (
        <div >
            <div>
                <form onSubmit={handleSubmit}>
                    <div style={{color: "black"}}>
                    <Select options={options}  />
                    </div>
                    <label>Remote: </label>
                    <div style={{color: "black"}}>
                    <Select options={remoteOptions}  />
                    </div>      
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default TutoringForm