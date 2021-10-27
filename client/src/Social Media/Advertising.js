import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faInstagram,
    faYoutube,
    faBandcamp,
    faSpotify,
    faApple,
    faSoundcloud
  } from "@fortawesome/free-brands-svg-icons";

function Advertising(){
    
    return(
        <div>
            <article>
                <h1>Dan Conolloy's Social Media Pages</h1>
                    <div class="social-container">
                            <a href="https://www.facebook.com/dan.connolly.71"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.linkedin.com/in/dan-connolly-b13969203/?fbclid=IwAR32dJhI6cZjVUoxDrA5mEf1TvHm0DGoxFgO5tfNg4J7Ct-VK4m313AOe8c"
                                className="linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/skeevywonder/?utm_medium=copy_link"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                    </div>
            </article>
            <article>
                <h2>Performances and Appearances</h2>
                <ul>
                    <li>
                    Dan Connolly Quartet
                        <a href="https://www.youtube.com/watch?v=SYxjs_kr04c&ab_channel=StrikingWebSolutions"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </li>
                    <li>
                    Professor Caveman
                        <a href="https://www.youtube.com/channel/UCBw76picr1ivZJxUUmYQnpg"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=FEbYnVDCg4Y&ab_channel=BushwickSounds"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCBw76picr1ivZJxUUmYQnpg"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=jTCG2RLjsj0&ab_channel=ARAWAXRECS"
                        className="spotify social">
                        <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://music.apple.com/us/artist/professor-caveman/1075799070"
                        className="apple social">
                        <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                       
                    </li>
                    <li>
                    Killer Shrimp
                        <a href="https://www.facebook.com/RealKillrShrimp/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a> 
                        
                        <a href="https://killashramp.bandcamp.com/album/killer-shrimp?fbclid=IwAR3N2viRX59cuzSJPg6P_ogBG3QQOp90KoO2pWyt-xDSBig35WqxeML4QT8"
                        className="bandCamp social">
                        <FontAwesomeIcon icon={faBandcamp} size="2x" />
                        </a> 
                        <a href="https://www.youtube.com/watch?v=5Ar9f8dYFiA&t=11s&ab_channel=OmarElshafi"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    <li>
                    The Alligator 
                    <a href="https://soundcloud.com/the-alligator"
                        className="soundcloud social">
                    <FontAwesomeIcon icon={faSoundcloud} size="2x" />
                    </a>
                    </li>
                    <li>
                    Hong Kong Graffiti
                    <a href="https://open.spotify.com/artist/6pqLq8HJe2LWfvnkIMGUdP?si=U86p91icTmCgM3Vtnm7siA"
                        className="spotify social">
                        <FontAwesomeIcon icon={faSpotify} size="2x" />
                    </a>
                    </li>
                    <li>
                    Picnic
                    <a href="https://picnicnj.bandcamp.com/releases"
                        className="bandCamp social">
                        <FontAwesomeIcon icon={faBandcamp} size="2x" />
                        </a> 
                    </li>
                    </li>
                </ul>

            </article>
        </div>
    )
}
export default Advertising