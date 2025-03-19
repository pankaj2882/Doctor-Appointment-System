import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctors").then((response) => {
      setDoctors(response.data);
    });
  }, []);

  return (
    <div className=" p-3 container mt-4  mx-7">
      <h2 className="text-primary fw-bold text-center mb-4">Available Doctors</h2>
      <div className="row ">
        {doctors.map((doctor) => (
               <div className="col-md-6" >
            <div className="card shadow-sm p-4 mt-4">
            <div key={doctor.id} className="col-md-7">
            <Card className="mb-4 shadow-lg border-2 rounded-4">
            <Card.Body className="text-center">
            <Card.Title className="fw-bold text-primary mb-4">{doctor.name}</Card.Title>
            <Card.Subtitle className="text-muted fw-bold mb-4">{doctor.specialty}</Card.Subtitle>
      
      <Button 
        onClick={() => navigate(`/booking/${doctor.id}`)} 
        className="btn btn-primary w-10 rounded-pill"
      >
        Book Appointment
      </Button>
        </Card.Body>
        </Card>
           </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default DoctorList;
