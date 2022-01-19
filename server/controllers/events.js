import selectData from "../db/scripts/selectData.js";
import query from "../db/index.js";

async function getAllEvents(req, res) {
  const events = await selectData();

  res.json({
    success: true,
    message: "all events",
    payload: events,
  });
}

// will have the rest of get queries here, use query() for sending SQL to db

async function getUpcomingEvents(req, res) {
  const data = await query("SELECT * FROM events LIMIT $1;", [
    Number(req.params.count),
  ]);
  console.log(req.params.count);
  res.json({
    success: true,
    message: "all events",
    payload: data,
  });
}

// will create en event

async function createEvent(req, res) {
  const data = await query(
    "INSERT INTO events (event_name, event_description, event_date, event_start, event_duration, event_category) VALUES ($1, $2, $3, $4, $5, $6); ",
    [
      req.body.event_name,
      req.body.event_description,
      req.body.event_date,
      req.body.event_start,
      req.body.event_duration,
      req.body.event_category,
    ]
  );
  res.json({
    success: true,
    message: "event added",
  });
}

// will delete an event by id

async function deleteEvent(req, res) {
  const data = await query(`DELETE FROM events WHERE id = $1`, [
    Number(req.params.id),
  ]);
  res.json({
    success: true,
    message: `event removed`,
  });
}

// will get an event by id

async function getEvent(req, res) {
  const data = await query(`SELECT * FROM events WHERE id = $1`, [
    Number(req.params.id),
  ]);
  res.json({
    success: true,
    message: `found event`,
    payload: data.rows,
  });
}

export { getAllEvents, getUpcomingEvents, createEvent, deleteEvent, getEvent };
