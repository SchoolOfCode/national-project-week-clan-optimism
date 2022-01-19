import selectData from "../db/scripts/selectData.js";
import query from "../db/index.js";

async function getAllEvents(req, res) {
  const events = await selectData();

  res.json({
    success: true, 
    message: "all events",
    payload: events
  });
}

// will have the rest of get queries here, use query() for sending SQL to db

async function getUpcomingEvents(req, res) {
  const data = await query('SELECT * FROM events LIMIT $1;', [Number(req.params.count)]);

  res.json({
    success: true, 
    message: "all events",
    payload: data
  });
}

export { getAllEvents, getUpcomingEvents };
