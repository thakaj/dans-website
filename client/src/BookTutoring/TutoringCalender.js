import React from "react";
import FullCalendar, {formatDate} from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/daygrid/main.css";

function TutoringCalender(){
 
  let str = formatDate('2018-09-01', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZoneName: 'short',
    timeZone: 'UTC',
    locale: 'es'
  })

    return(
        <div>
          <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
          />
        </div>    
    )
}
export default TutoringCalender