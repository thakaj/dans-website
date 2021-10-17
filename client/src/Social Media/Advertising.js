import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faInstagram,
    faYoutube,
    faBandcamp,
    faSpotify,
    faApple
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
                        <a href="https://open.spotify.com/artist/43v0qrDTLSQ2hYBlM5kmHZ?si=MzPS5zhKRwGJ8SJcisUdlw"
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
                        </a> Album on BandCamp
                        <a href="https://killashramp.bandcamp.com/album/killer-shrimp?fbclid=IwAR3N2viRX59cuzSJPg6P_ogBG3QQOp90KoO2pWyt-xDSBig35WqxeML4QT8"
                        className="bandCamp social">
                        <FontAwesomeIcon icon={faBandcamp} size="2x" />
                        </a> 
                    </li>
                </ul>
            </article>
            <article>
                Current Projects
                
                    <p>
                        Bands I am apart of:
                        Work I am composing: Albums/books
                    </p>
            </article>
        </div>
    )
}
export default Advertising