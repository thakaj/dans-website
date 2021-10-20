import React from "react";
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'

function TutoringCalender(){
    
    return(
        <div>
          <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth" />
        </div>    
    )
}
export default TutoringCalender