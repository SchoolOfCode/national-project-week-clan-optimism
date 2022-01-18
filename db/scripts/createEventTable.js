import query from "..";

function createEventTable() {
  return query(
    "CREATE TABLE IF NOT EXIST events (id SERIAL PRIMARY KEY, event_name TEXT, event_description TEXT,event_date TEXT, event_start TEXT, event_duration TEXT, event_category TEXT)"
  );
}

createEventTable();
