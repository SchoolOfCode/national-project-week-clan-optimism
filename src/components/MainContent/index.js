import React from "react";

import DateAndTime from "../DateAndTime";
import MyCalendar from "../MyCalendar";

import "./mainContent.css";

export default function MainContent() {
  return (
    <section className="main-display">
      <h1>Clan Optimist's Event App</h1>
      <h2>Next Event</h2>
      <DateAndTime />
      <section className="calendar-placement">
        <MyCalendar />
      </section>
      <p>
        Bootcamp is no walk in the park. So let’s make it a little easier for you. Want to
        create an event to get together with your fellow bootcampers? Forgot
        when code club is? Let's help you!
      </p>
    </section>
  );
}
