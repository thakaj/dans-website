import React, {useState} from "react";
import Select from 'react-select'

function LearnMappedPdfs(){

    const [instruments, setInstruments] = useState([])
    const [pdf, setPdf] = useState([{
        filename: "",
        id: ""
    }])

    
    const [show, setShow] = useState(null)
    const [selectedValue, setSelectedValue] = useState("")

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
    function handleInstrumentChange(obj){
        setSelectedValue(obj.value)
        fetch(`instruments/${obj.value}`)
        .then(r => r.json())
        .then(data=> {
            setPdf(data.pdfs)
            setInstruments(data)})
        setShow(true)
    }
    
    function handleDownload(url,doc){
        fetch(url, {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token")
        }})
        .then((response) => response.blob())
        .then((blob)=>  {
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                doc.filename
            );
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        })
    }

    return (
        <div>
                <div>
                    <label>Name </label>
                        <div style={{color: "black"}}>
                            <Select options={options}
                            value={options.find(x => x.value === selectedValue)}
                            onChange={handleInstrumentChange}
                            />
                        </div>
                            <div>
                                {show ? pdf.map((doc)=> (
                                    <div key={doc.id}>
                                        <h6>{doc.filename}</h6>
                                        <button onClick={() => handleDownload(`instruments/${selectedValue}/pdfs/${doc.id}`, doc)}>Download</button>
                                    </div>
                                )): null}
                            </div>




            </div>
        </div>
    )
}
export default LearnMappedPdfs