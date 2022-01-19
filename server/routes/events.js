import express from "express";
import { getAllEvents, getUpcomingEvents } from "../controllers/events.js";

const router = express.Router();

router.route("/").get(getAllEvents);
router.route("/upcomingevents/:count").get(getUpcomingEvents);


export default router;
