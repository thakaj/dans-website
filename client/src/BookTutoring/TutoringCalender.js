import React, {useState} from "react";
import FullCalendar, {formatDate} from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";



function TutoringCalender(){
    const [catchTime, setCatchTime] = useState(null)



    return(
        <div className='demo-app'>
          <div className='demo-app-main' style={{marginTop: 30}}>
          <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek'
          }}
          // eventClick={}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          
          />
          </div>
        </div>    
    )
}
export default TutoringCalender