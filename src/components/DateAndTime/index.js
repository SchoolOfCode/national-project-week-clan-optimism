import React, { useState, useEffect } from "react";

export default function DateAndTime() {
  const [dateTime, setDateTime] = useState({});
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    var timer = setInterval(() => {
      today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTimeObj = { date: date, time: time };

      setDateTime(dateTimeObj);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
