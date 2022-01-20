import React from "react";

import DateAndTime from "../DateAndTime";
import MyCalendar from "../MyCalendar";

import "./mainContent.css";

export default function MainContent() {
  return (
    <section className="main-display">
      <h1>Clan Optimist's Event App</h1>
      <h2>next event</h2>
      <DateAndTime />
      <section className="calendar-placement">
        <MyCalendar />
      </section>
      <h4>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printe
      </h4>
    </section>
  );
}
