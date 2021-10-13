import React from "react";

function TutoringForm(){

    return (
        <div>
            <form onSubmit={}>
            <label>Remote: </label>
                <input type="text" id="remote" name="remote"
                onChange={}
                value={}
                />
                <label>Location: </label>
                <input type="text" id="location" name="location"
                onChange={}
                value={}
                placeholder="Enter Location"
                />
                <label>Time: </label>
                <input type="text" id="time" name="time"
                onChange={}
                value={}
                placeholder="Enter Time"
                />
                 <label>Instrument: </label>
                <input type="text" id="instrument" name="instrument"
                onChange={}
                value={}
                placeholder="Enter Instrument"
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
export default TutoringForm