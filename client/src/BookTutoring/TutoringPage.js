import React from "react";
import TutoringCalender from "./TutoringCalender";
import TutoringForm from "./TutoringForm";

function TutoringPage(){
//purpose of this component is to render all the tutoring documents 
    

    return (
        <div>Hello tutoring page

            <div>
            <TutoringCalender />
            </div>
            <div>
            <TutoringForm />
            </div>
        </div>
    )
}
export default TutoringPage