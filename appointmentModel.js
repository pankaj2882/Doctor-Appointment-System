const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  doctorId: Number,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = { Appointment };
