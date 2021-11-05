import React from "react";
import LearnPage from "../Learn/LearnPage";
import TutoringCalender from "./TutoringCalender";
import TutoringDetails from "./TutoringDetails";
import TutoringForm from "./TutoringForm";
import {useHistory} from "react-router-dom"

function TutoringPage({currentStudent}){
    const history = useHistory()

    return (
        <div>
            <div>
                <TutoringDetails />
            </div>
                <div>
                    <h4>  Free Sheet Music</h4>
                    <div>
                        <LearnPage />
                    </div>
                </div>
                <br>
                </br>

                {currentStudent ? <div>
                 <h3>Book private lessons with Dan Connolloy: </h3>
                <TutoringForm currentStudent={currentStudent} />
            </div> : 
                <div>
                   <div> 
                       <button onclick={history.push("/login")}> Sign In</button>
                   </div>
                </div> }
            
        </div>
    )
}
export default TutoringPage