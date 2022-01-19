import express from "express";
import { getAllEvents, getUpcomingEvents, createEvent } from "../controllers/events.js";

const router = express.Router();

router.route("/").get(getAllEvents)
router.route("/host-event").post(createEvent);
router.route("/upcomingevents/:count").get(getUpcomingEvents);


export default router;
