import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import myHotelRoutes from "./routes/my-hotels";
const connectToDb = require("./config/connectToDb");
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connection to DB
connectToDb();

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configure CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Your client URL
    credentials: true, // Allow cookies and other credentials
  })
);

app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../Frontend/dist/index.html"));
});

app.listen(7000, () => {
  console.log("Server Running on Localhost:7000");
});
