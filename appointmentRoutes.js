const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const appointmentsFile = path.join(__dirname, "../data/appointments.json");

// Ensure the file exists
if (!fs.existsSync(appointmentsFile)) {
  fs.writeFileSync(appointmentsFile, "[]");
}

// Book Appointment Route
router.post("/", async (req, res) => {
  try {
    const { doctorId, name, email, date, time } = req.body;

    // Validate input
    if (!doctorId || !name || !email || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Read existing appointments
    const appointments = JSON.parse(fs.readFileSync(appointmentsFile, "utf-8"));

    // Add new appointment
    const newAppointment = { id: appointments.length + 1, doctorId, name, email, date, time };
    appointments.push(newAppointment);

    // Save updated appointments
    fs.writeFileSync(appointmentsFile, JSON.stringify(appointments, null, 2));

    console.log("New Appointment Booked:", newAppointment);
    res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
  } catch (error) {
    console.error("Error booking appointment:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
