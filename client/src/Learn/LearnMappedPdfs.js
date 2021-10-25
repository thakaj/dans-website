import React, {useEffect, useState} from "react";

function LearnMappedPdfs(){
    const [instruments, setInstruments] = useState([])
    const isDisplayed = false

    useEffect( () => {
        fetch("/instruments")
        .then(r => r.json())
        .then(data=> {
            setInstruments(data)})
    },[])

    function handleClick(){
        
    }

    function handleDownload(id){
        

    }

   


    return (
        <div>
            <div>
                {instruments.map((i, index) => {
                    return (
                        <div key={index}>
                            <div style={{display: "flex"}}>
                            <h4>{i.name}</h4>
                            <button onclick={()=> {}}></button>
                                    </div>
                        {i.pdfs.map((p, i)=> (
                            <article key={i}>
                                <h6>{p.filename}</h6>
                                <button >Download Pdf</button>
                            </article>
                        ))}
                   </div>
                    )
                })}
            </div>
        </div>
    )
}
export default LearnMappedPdfs