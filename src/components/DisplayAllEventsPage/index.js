import React, { useEffect, useState } from "react";
import "./DisplayAllEventsPage.css";

/*create 2-4 cards to display all events available(1 event per card)
-to get event, we need a fetch to our backend api 
-import usestate as a way to store details
-include event name, time, category, description, duration
-possibly have useEffect to fetch all events on load and stash them into `events` state
*/

function DisplayAllEventsPage() {
  const [events, setEvents] = useState();

  // want all events to fetch from api on load and store in events state
  useEffect(() => {
    getAllEvents();
    // console.log("events page loaded");
  }, []);

  async function getAllEvents() {
    let res = await fetch("http://localhost:5500/api/v1/events/");
    let response = await res.json();

    console.log(response.payload.rows);
    setEvents(response.payload.rows);
  }

  

  return (
    <div>
      <h1>Optimistic Events</h1>
      <div className="flex-container">
        <div className="card">
          <h2>Event name</h2>
          <p className="time-text">Time Duration</p>
          <p className="category-text">Category</p>
          <p>Description</p>
        </div>

        <div className="card">
          <h2>Event name</h2>
          <p className="time-text">Time Duration</p>
          <p className="category-text">Category</p>
          <p>Description</p>
        </div>

        <div className="card">
          <h2>Event name</h2>
          <p className="time-text">Time Duration</p>
          <p className="category-text">Category</p>
          <p>Description</p>
        </div>

        <div className="card">
          <h2>Event name</h2>
          <p className="time-text">Time Duration</p>
          <p className="category-text">Category</p>
          <p>Description</p>
        </div>

        <div className="card">
          <h2>Event name</h2>
          <p className="time-text">Time Duration</p>
          <p className="category-text">Category</p>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayAllEventsPage;
