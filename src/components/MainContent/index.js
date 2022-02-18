import React from "react";

import DateAndTime from "../DateAndTime";
import MyCalendar from "../MyCalendar";
import DisplayUpcomingEvents from "../DisplayUpcomingEvents";

import "./mainContent.css";
import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <section className="main-display">
      <h2>Clan Optimist's upcoming...</h2>
      <h5>please view the website in mobile view 482x842px</h5>
      <div id="upcoming-event">
        <Link to="all-events">
          <DisplayUpcomingEvents count="1" />
        </Link>
      </div>

      <DateAndTime />
      <section className="calendar-placement">
        <MyCalendar />
      </section>
      {/* <p>
        Bootcamp is no walk in the park. So let’s make it a little easier for
        you. Want to create an event to get together with your fellow
        bootcampers? Forgot when code club is? Let's help you!
      </p> */}
      <p>
        Optimist's Flexible, Social and Professional event manager. Never worry
        about missing a deadline.{" "}
      </p>
    </section>
  );
}
