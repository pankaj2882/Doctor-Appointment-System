require("dotenv").config();
const express = require("express");
const cors = require("cors");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
