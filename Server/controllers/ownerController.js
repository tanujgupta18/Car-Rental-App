import imagekit from "../config/imageKit.js";
import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";

// API to change role
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to List Car
export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ success: false, message: "Image is required" });
    }

    // Upload Image to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.files.upload({
      file: fileBuffer.toString("base64"),
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    fs.unlinkSync(imageFile.path);
    const image = response.url;
    await Car.create({ ...car, owner: _id, image });

    res.json({ success: true, message: "Car Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to List Owner Cars
export const getOwnerCars = async (req, res) => {
  try {
    const { _id } = req.user;
    const cars = await Car.find({ owner: _id });
    res.json({ success: true, cars });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to Toggle Car Availability
export const toggleCarAvailability = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);

    if (!car) {
      return res.json({ success: false, message: "Car not found" });
    }

    if (car.owner.toString() !== _id.toString())
      return res.json({ success: false, message: "Unauthorised" });

    car.isAvailable = !car.isAvailable;
    await car.save();

    res.json({ success: true, message: "Availability Toggled" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to delete a car
export const deleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);
    if (car.owner.toString() !== _id.toString())
      return res.json({ success: false, message: "Unauthorised" });

    car.owner = null;
    car.isAvailable = false;
    await car.save();
    res.json({ success: true, message: "Car Removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to get Dashboard Data
export const getDashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;

    if (role !== "owner")
      return res.json({ success: false, message: "Unauthorised" });

    const cars = await Car.find({ owner: _id });

    const bookings = await Booking.find({ owner: _id })
      .populate("car")
      .sort({ createdAt: -1 });

    const pendingBookings = bookings.filter(
      (b) => b.status === "pending",
    ).length;

    const completedBookings = bookings.filter(
      (b) => b.status === "confirmed",
    ).length;

    const monthlyRevenue = bookings
      .filter((b) => b.status === "confirmed")
      .reduce((acc, b) => acc + b.price, 0);

    const dashboardData = {
      totalCars: cars.length,
      totalBookings: bookings.length,
      pendingBookings,
      completedBookings,
      recentBookings: bookings.slice(0, 3),
      monthlyRevenue,
    };

    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to update user Image
export const updateUserImage = async (req, res) => {
  try {
    const { _id } = req.user;

    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ success: false, message: "Image is required" });
    }

    // Upload Image to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.files.upload({
      file: fileBuffer.toString("base64"),
      fileName: imageFile.originalname,
      folder: "/users",
    });

    fs.unlinkSync(imageFile.path);
    const image = response.url;

    await User.findByIdAndUpdate(_id, { image });
    res.json({ success: true, message: "Image Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
