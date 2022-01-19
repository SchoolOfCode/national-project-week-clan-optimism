import express from "express";
import eventRoutes from "./routes/events.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Events App");
});

app.use("/api/v1/events", eventRoutes);

// app.get('/api/v1/events')             - get all upcoming events
// app.get('/api/v1/events/:count')     - get next events

// app.patch('/api/v1/tasks/:id')   - edit card
// app.delete('/api/v1/tasks/:id')  - delete task
// // app.post('/api/v1/events')        - create a new events

const PORT = 5000;

app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
