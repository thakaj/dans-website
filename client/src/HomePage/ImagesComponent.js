import React from 'react'
import DansCovershot from '../Images/DansCovershot.jpg'

function ImagesComponent(){

    return (

        <div>
            <img src={DansCovershot} alt="coverPhoto" height={300} width={300} />
        </div>
    )
}
export default ImagesComponent