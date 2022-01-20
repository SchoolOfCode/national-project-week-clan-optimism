import express from "express";
import {
  getAllEvents,
  getUpcomingEvents,
  createEvent,
  deleteEvent,
  getEvent,
  updateEvent,
} from "../controllers/events.js";

const router = express.Router();

router.route("/").get(getAllEvents);
router.route("/host-event").post(createEvent);
router.route("/upcomingevents/:count").get(getUpcomingEvents);
router.route("/:id").delete(deleteEvent).get(getEvent).patch(updateEvent);



export default router;
