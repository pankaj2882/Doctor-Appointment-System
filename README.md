Creating a doctor appointment system using react.js


DoctorAppointmentSystem/
│── backend/
│ │── server.js # Main NodeJS Express Server
│ │── routes/
│ │ ├── doctorRoutes.js # API Endpoints for fetching doctors
│ │ ├── appointmentRoutes.js # API Endpoints for booking appointments
│ │── models/
│ │ ├── doctorModel.js # Doctor schema
│ │ ├── appointmentModel.js # Appointment schema
│ └── data/
│ ├── doctors.json # Sample doctors dataset
│── frontend/
│ │── src/
│ │ ├── components/
│ │ │ ├── DoctorList.js # Display doctor list
│ │ │ ├── BookingForm.js # Appointment form
│ │ │ ├── Confirmation.js # Confirmation page
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── Booking.js
│ │ │ ├── Confirmation.js
│ │ ├── App.js
│ │ ├── index.js
│ │── package.json
│ └── .env


Sample doctors.json (Mock Data)
[
{
"id": 1,
"name": "Dr. Aditi Sharma",
"specialty": "Cardiologist",
"availableSlots": ["10:00 AM", "12:30 PM", "3:00 PM"]
},
{
"id": 2,
"name": "Dr. Rajesh Kapoor",
"specialty": "Dermatologist",
"availableSlots": ["9:00 AM", "11:30 AM", "2:30 PM"]
}
]



Functionality Criteria Rating
(0-2)
Doctor Listing Page
(US-1)
Doctors are fetched via API and displayed correctly
Data is rendered dynamically, not hardcoded
Book Appointment
(US-2)
Clicking “Book” correctly navigates to the booking
form
Selected doctor's details persist on the form page
Form Validation
(US-3) Form includes name, email, date & time fields
Inputs validate correctly using Formik & Yup
Submission is prevented for incorrect inputs
Confirmation Page
(US-4)
Appointment details are displayed after submission
Confirmation page is well-structured and styled
Navigation & Routing
(US-5)
Navigation works between Home, Booking, and
Confirmation pages
Users cannot directly access the confirmation page
without booking
