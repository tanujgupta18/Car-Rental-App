import imagekit from "../config/imageKit.js";
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
