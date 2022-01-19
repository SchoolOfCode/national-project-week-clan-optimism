import React, {useState} from 'react'
 

/*create 2-4 cards to display all events available(1 event per card)
-to get event, we need a fetch to our backend api 
-import usestate as a way to store details
-include event name, time, category, description, duration
-as further development, a link can connect each event to its own page 

*/

function DisplayAllEventsPage(){
    const [events, setEvents] = useState({});
    
    return (<div>    
    <h1>Come to our event</h1>
    <div className='card'> 
        <h3>event name</h3> 
        <p>time - duration</p> 
        <p>category</p> 
        <p>description</p> 
    </div>

    </div>
        );
}
export default DisplayAllEventsPage;