import React, {useEffect, useState} from "react";

function LearnMappedPdfs(){
    const [instruments, setInstruments] = useState([])

    useEffect( () => {
        fetch("/instruments")
        .then(r => r.json())
        .then(data=> {
            setInstruments(data)})
    },[])

    return (
        <div>
            <div>
                {instruments.map((i, index) => {
                    return (
                        <div key={index}>
                       <h4>{i.name}</h4>
                        {i.pdfs.map((p, i)=> (
                            <article key={i}>
                                <h6>{p.filename}</h6>
                                <a href={p.url}> Download</a>
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