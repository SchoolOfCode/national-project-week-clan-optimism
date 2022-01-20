import React from "react";

import DateAndTime from "../DateAndTime";
import MyCalendar from "../MyCalendar";
import DisplayUpcomingEvents from "../DisplayUpcomingEvents";

import "./mainContent.css";

export default function MainContent() {
  return (
    <section className="main-display">
      <h1>Clan Optimist's Event App</h1>
      <h2>Upcoming events</h2>
      <DisplayUpcomingEvents count='2' />
      <DateAndTime />
      <section className="calendar-placement">
        <MyCalendar />
      </section>
      <p>
        The reminder/calendar solution you will absolutely love. Bootcamp is no
        walk in the park. So let’s make it a little easier for you. Want to
        create an event to get together with your fellow bootcampers? Or forgot
        when code club is? You need the Optimistic event reminder!
      </p>
    </section>
  );
}
