import React from "react";

import DatenTime from "../DateNTime";
import MyCalendar from "../MyCalendar";
import "./mainContents.css";

export default function MainContents() {
  return (
    <section className="body">
      <h1>Clan Optimist's Event App</h1>
      <h2>next event</h2>
      <DatenTime />
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
