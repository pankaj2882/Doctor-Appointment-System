import React from "react";

const Confirmation = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg p-5 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-success">Appointment Confirmed!</h2>
        <p>We have received your appointment details.</p>
        <a href="/" className="btn btn-outline-primary mt-3">
          Go Back
        </a>
      </div>
    </div>
  );
};
export default Confirmation;
