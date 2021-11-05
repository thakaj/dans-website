import React, {useEffect, useState} from 'react'

  
function DanResume(){
    
    const [pdf, setPdf] = useState([{
        filename: "",
        id: ""
    }])

    useEffect(()=> {
        fetch("/instruments/6")
        .then(r => r.json())
        .then(data=> {
            setPdf(data.pdfs)
        console.log(data.pdfs)})
      },[])
    
   
    
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
                            <div> Dan's Professional Resume
                                {pdf.map((doc)=> (
                                    <div key={doc.id}>
                                        <h6>{doc.filename}</h6>
                                        <button onClick={() => handleDownload(`instruments/6/pdfs/${doc.id}`, doc)}>Download</button>
                                    </div>
                                ))}
                               
                            </div>




            </div>
        </div>
    )
}
export default DanResume