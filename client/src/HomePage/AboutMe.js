import React from "react";
import ImagesComponent from "./ImagesComponent";

function AboutMe(){

    return (
        <div style={{display: "block", alignContent: "space-between"}}>
            <ImagesComponent />
            
            <h1>DAN CONOLLOY</h1>
            <h2> Electric Bass, Upright Bass, Guitar, Piano, Drums</h2>
            
            <div >
                <article >
                    <p className= "aboutMe">
                    Central New Jersey musician Dan Connolly has been studying music and honing his craft for 17 years. Born in 1996, Dan started playing piano at a very early age and has gradually moved on to study the electric and bass guitars, drums, and cello. While playing the piano laid the framework for his love of music, this talented and multi-faceted musician is most passionate about developing his skills with the electric and upright bass. 
                    </p>
                </article>
                    <article>
                        <p className= "aboutMe">
                        Connolly was educated at Rutgers University, obtaining a degree in Music Education. This has allowed him to expand on his love of music while giving him the tools needed to mentor and train others with similar passions. His preferred style of music is Jazz and is currently studying with legendary jazz bassist Kenneth Davies who is the lead double bassist for the New York Philharmonic Orchestra. Connolly has also finished his degree in Jazz Studies, further expanding on his talent and education through his passion for music.  
                        </p>
                    </article>
                        <article>
                            <p className= "aboutMe">
                            Dan Conolly is currently a Music Educator working at The Piano Workshop in Chester, New Jersey teaching Guitar, Bass, Piano, and Drums to young students. Outside of work Conolly is a private tutor who gives extensive lessons to students looking for a more personalized and unscripted music lesson. As well as being a private tutor Conolly is a musician in various bands as well as a song writer and music transcriber.
                            </p>
                    </article>
            </div>
        </div>
    )
}
export default AboutMe