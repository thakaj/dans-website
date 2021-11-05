import React, {useState, useEffect} from "react";
import Select from 'react-select'

function TutoringForm({currentStudent}){
    const [remote, setRemote] = useState(null)
    const [location, setLocation] = useState("")
    const [instrument, setInstrument] = useState([])
    

    function handleInstrumentChange(obj){
        fetch(`instruments/${obj.value}`)
        .then(r => r.json())
        .then(data=> {
            setInstrument(data)})
    }

    // function handleRemoteChange(remote){
    //     setRemote(remote)
    // }
    // const options = selectedOptions.map(i => ({
    //     "value": i.id,
    //     "label": i.name
    // }))   
  
    const options = [
        {
          "value": 1,
          "label": "Bass"
        },
        {
          "value": 2,
          "label": "Upright Bass"
        },
        {
          "value": 3,
          "label": "Guitar"
        },
        {
            "value": 4,
            "label": "Piano"
        },
        {
            "value": 5,
            "label": "Drums"
        }
    ]

    const remoteOptions = [{value: 'true', label: 'Yes'},
                            {value: 'false', label: 'No'}]


    function handleSubmit(e){
        e.preventDefault()
        fetch(`/appointments`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({remote: remote, location: location, instrument_id: instrument.id})
        })
        .then(r => {
            if (r.ok){
                r.json()
                    .then(data => {
                        setLocation("")
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
                    <div style={{color: "black"}}>
                    <Select options={options} 
                    value={options.find(x => x.value === instrument)}
                    onChange={handleInstrumentChange}
                    />
                    </div>
                    <label>Remote: </label>
                    <div style={{color: "black"}}>
                    <select name="remote" id="remote" onChange={e=> setRemote(e.target.value)}>
                        <option>True</option>
                        <option>False</option>
                    </select>
                    </div>      
                    <label>Location: </label>
                    <input type="text" id="location" name="location"
                    onChange={e=> setLocation(e.target.value)}
                    value={location}
                    placeholder="Enter Location"
                    />             
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default TutoringForm