import React from 'react'
import Headshot from '../Images/Headshot.jpg'
import DanPlayingBass from '../Images/DanPlayingBass.jpg'
import DanAndTheKillerShrimp from '../Images/DanAndTheKillerShrimp.jpg'

function ImagesComponent(){

    return (

        <div className="image-block" style={{ display: "block", float: "left"}}>
            
            <img src={Headshot} alt="coverPhoto" className="dansPicks" style= {{width: 200,  float: "left", paddingBottom: 20, paddingRight: 20}}/>
            
            <div className="aboutMePhotoDiv" >
            
            <img src={DanPlayingBass} alt="DanPlayingBass"  className="dansPicks" style= {{width: 200,  float: "left", paddingBottom: 20}}/>
            
            </div>
            
            <div >
            
            <img src={DanAndTheKillerShrimp} alt="DanPlayingBass"  style= {{width: 200, float: "left"}}/>
            
            </div>

        </div>
    )
}
export default ImagesComponent