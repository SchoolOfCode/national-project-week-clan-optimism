import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./calendar.css";

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <section className="calendar-section">
      <div>
        <Calendar className="calendar" onChange={onChange} value={value} />
      </div>
    </section>
  );
}
