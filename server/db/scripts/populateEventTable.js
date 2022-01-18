import query from "../index.js";
import dummyData from "./dummyData.js";

async function populateEventTable(dummyData) {
  const data = await query(
    "INSERT INTO events (event_name, event_description, event_date, event_start, event_duration, event_category) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      dummyData.name,
      dummyData.description,
      dummyData.date,
      dummyData.start,
      dummyData.duration,
      dummyData.category,
    ]
  );

    console.log(data);
}

populateEventTable(dummyData);
