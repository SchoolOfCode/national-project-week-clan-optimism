import express from "express";

import { getAllEvents } from "../controllers/events.js";

const router = express.Router();
router.route("/").get(getAllEvents);
// router.route("/:count").get(getUpcomingEvents);

export default router;
