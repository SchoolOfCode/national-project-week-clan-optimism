import React, { useEffect, useState } from "react";
import "./DisplayAllEventsPage.css";
import EditDataButton from "../EditDataButton/index";
import DeleteDataButton from "../DeleteDataButton/index";

/*create 2-4 cards to display all events available(1 event per card)
-to get event, we need a fetch to our backend api 
-import usestate as a way to store details
-include event name, time, category, description, duration
-possibly have useEffect to fetch all events on load and stash them into `events` state
*/

function DisplayAllEventsPage() {
  const [events, setEvents] = useState([]);

  // want all events to fetch from api on load and store in events state
  useEffect(() => {
    getAllEvents();
    // console.log("events page loaded");
  }, []);

  async function getAllEvents() {
    let res = await fetch("http://localhost:5500/api/v1/events/");
    let response = await res.json();

    setEvents(response.payload.rows);
  }

  return (
    <div>
      <h1>Optimistic Events</h1>
      <div className="flex-container">
        {events.map((event) => {
          return (
            <div className="card" key={event.id}>
              <h2>{event.event_name}</h2>
              <p className="time-text">
                {event.event_date}, {event.event_start} ({event.event_duration})
              </p>
              <p className="category-text">{event.event_category}</p>
              <p>{event.event_description}</p>
              <EditDataButton eventid={event.id} />
              <DeleteDataButton eventid={event.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayAllEventsPage;
