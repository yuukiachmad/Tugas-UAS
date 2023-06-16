import express from "express";
import cors from "cors";
import PembayaranRoute from "./routes/PembayaranRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(PembayaranRoute);

app.listen(300, ()=> console.log('Server up and running..'));