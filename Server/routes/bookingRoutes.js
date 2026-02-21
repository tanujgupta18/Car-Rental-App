import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  checkAvailabilityOfCar,
  createBooking,
} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityOfCar);
bookingRouter.post("/create", protect, createBooking);

export default bookingRouter;
