import React, { useState } from "react";

export default function DateAndTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const [dateTime, setDateTime] = useState({});

  setInterval(() => {
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let datetimee = { date: date, time: time };
    setDateTime(datetimee);
  }, 1000);

  return (
    <section>
      <h4>
        {dateTime.date}
        <br />
        {dateTime.time}
      </h4>
    </section>
  );
}
