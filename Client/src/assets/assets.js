import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import menu_icon from "./menu_icon.svg";
import main_car from "./main_car.png";
import car_image1 from "./car_image1.png";
import car_image2 from "./car_image2.png";
import car_image3 from "./car_image3.png";
import car_image4 from "./car_image4.png";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import banner_car_image from "./banner_car_image.png";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";
import star_icon from "./star_icon.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";

export const assets = {
  logo,
  search_icon,
  close_icon,
  menu_icon,
  main_car,
  car_image1,
  car_image2,
  car_image3,
  car_image4,
  users_icon,
  car_icon,
  location_icon,
  fuel_icon,
  arrow_icon,
  banner_car_image,
  testimonial_image_1,
  testimonial_image_2,
  star_icon,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
};

export const cityList = ["New York", "Los Angeles", "Houston", "Chicago"];

export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "My Bookings", path: "/my-bookings" },
];

export const dummyCarData = [
  {
    _id: "67ff5bc069c03d4e45f30b77",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "BMW",
    model: "X5",
    image: car_image1,
    year: 2006,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Semi-Automatic",
    pricePerDay: 300,
    location: "New York",
    description:
      "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
    isAvaliable: true,
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: "67ff6b758f1b3684286a2a65",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Toyota",
    model: "Corolla",
    image: car_image2,
    year: 2021,
    category: "Sedan",
    seating_capacity: 4,
    fuel_type: "Diesel",
    transmission: "Manual",
    pricePerDay: 130,
    location: "Chicago",
    description:
      "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    _id: "67ff6b9f8f1b3684286a2a68",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Jeep ",
    model: "Wrangler",
    image: car_image3,
    year: 2023,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 200,
    location: "Los Angeles",
    description:
      "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
    isAvaliable: true,
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e34",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Ford",
    model: "Neo 6",
    image: car_image4,
    year: 2022,
    category: "Sedan",
    seating_capacity: 2,
    fuel_type: "Diesel",
    transmission: "Semi-Automatic",
    pricePerDay: 209,
    location: "Houston",
    description:
      "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    isAvaliable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
];

export const testimonialsData = [
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: assets.testimonial_image_1,
    testimonial:
      "I've rented cars from various companies, but the experience with CarRental was exceptional.",
  },
  {
    name: "John Smith",
    location: "New York, USA",
    image: assets.testimonial_image_2,
    testimonial:
      "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!",
  },
  {
    name: "Ava Johnson",
    location: "Sydney, Australia",
    image: assets.testimonial_image_1,
    testimonial:
      "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service.",
  },
];
