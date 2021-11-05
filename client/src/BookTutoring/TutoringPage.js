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
                    {/* <div> Free Sheet Music
                        <LearnPage />
                    </div> */}
                </div>
                {currentStudent ? <div>
                <TutoringForm currentStudent={currentStudent} />
            </div> : 
                <div>
                   <div> Sign in to book private lessons with Dan Connolloy: 
                       <button onclick={history.push("/login")}> Sign In</button>
                   </div>
                </div> }
            
        </div>
    )
}
export default TutoringPage