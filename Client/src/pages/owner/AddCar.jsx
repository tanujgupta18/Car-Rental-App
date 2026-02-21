import React, { useContext, useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddCar = () => {
  const { currency, axios } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: "",
    location: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    if (isLoading) return null;
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("carData", JSON.stringify(car));

      const { data } = await axios.post("/api/owner/add-car", formData);
      if (data.success) {
        toast.success(data.message);
        setImage(null);
        setCar({
          brand: "",
          model: "",
          year: "",
          pricePerDay: "",
          category: "",
          transmission: "",
          fuel_type: "",
          seating_capacity: "",
          location: "",
          description: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title={"Add New Car"}
        subTitle={
          "Fill in details to list a new car for booking, including pricing, availability, and car specifications."
        }
      />

      <form
        onSubmit={onsubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* Car Upload Image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              className="h-14 rounded cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="car-image"
              accept="image/*"
              hidden
            />
          </label>
          <p className="text-sm text-gray-500">Upload a picture of your car</p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand Name */}
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              type="text"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
              placeholder="e.g. BMW, Mercedes, Audi..."
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            />
          </div>

          {/* Model */}
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              type="text"
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
              placeholder="e.g. X5, E-Class, M4..."
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Year*/}
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              type="number"
              value={car.year}
              onChange={(e) => setCar({ ...car, year: Number(e.target.value) })}
              placeholder="2025"
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            />
          </div>

          {/* Daily Price */}
          <div className="flex flex-col w-full">
            <label>Daily Price ({currency})</label>
            <input
              type="number"
              value={car.pricePerDay}
              onChange={(e) =>
                setCar({ ...car, pricePerDay: Number(e.target.value) })
              }
              placeholder="100"
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            >
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Transmission */}
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              value={car.transmission}
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            >
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              value={car.fuel_type}
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            >
              <option value="">Select a fuel type</option>
              <option value="Gas">Gas</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Seating Capacity */}
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              type="number"
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: Number(e.target.value) })
              }
              placeholder="5"
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              required
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select
            value={car.location}
            onChange={(e) => setCar({ ...car, location: e.target.value })}
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            required
          >
            <option value="">Select a location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            rows={5}
            value={car.description}
            onChange={(e) => setCar({ ...car, description: e.target.value })}
            placeholder="Describe your car, its condition, and any notable details..."
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            required
          ></textarea>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
          <img className="" src={assets.tick_icon} alt="tick-icon" />
          {isLoading ? "Listing..." : "List Your Car"}
        </button>
      </form>
    </div>
  );
};

export default AddCar;
