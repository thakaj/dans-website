import React, {useState, useEffect} from "react";
import Select from 'react-select'

function LearnPageResources (){
    const [pdfInputs, setPdfInputs] = useState({pdfs:[]})
    const [selectedValue, setSelectedValue] = useState(null)

    

   
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
    const handleInstrumentChange = obj => {
        setSelectedValue(obj.value)
    }

    console.log(selectedValue)
    
    function pdfUpdate(e){
        setPdfInputs({...pdfInputs, pdfs: Array.from(e.target.files)})
    }

    function handleUpdate(e){
        e.preventDefault()
      
        const pdfForm = new FormData();
        for (const key in pdfInputs){
            if (key === "pdfs"){
                for (const pdf in pdfInputs.pdfs){
                    pdfForm.append("pdfs[]", pdfInputs.pdfs[pdf])
                }
            }
        }
        
        
        fetch(`/instruments/${selectedValue}`, {
            method: "PATCH",
            body: pdfForm
        })
        .then(r => {
            if (r.ok){
                r.json()
                .then(data => {
                    setPdfInputs([])
                    console.log(data)
                })
            } else {
                r.json()
                .then( data => console.log(data))
            }
        })
    }
  
    return (
        <div>
            <form onSubmit={handleUpdate} >
                    <label>Name </label>
                    <div style={{color: "black"}}>
                    <Select options={options}
                    value={options.find(x => x.value === selectedValue)}
                    onChange={handleInstrumentChange}
                    />
                    </div>
                    <label>PDF </label>
                    <input type="file" id="pdfs" name="pdfs"
                    onChange={pdfUpdate} multiple={true} accept="application/pdf"
                    />
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}
export default LearnPageResources