import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  checkAvailabilityOfCar,
  createBooking,
  getUserBookings,
} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityOfCar);
bookingRouter.post("/create", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);

export default bookingRouter;
