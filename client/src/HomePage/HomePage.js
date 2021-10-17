import React from "react";
import AboutMe from "./AboutMe";
import ImagesComponent from "./ImagesComponent";


function HomePage(){

    return (
        <div>
            hello home page
            <div>
                <ImagesComponent />
                <AboutMe />
            </div>
        </div>
    )
}
export default HomePage