import React from "react";
import { Form, Button,Card,Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ width: "500px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Book an Appointment</h3>
    <Formik
      initialValues={{ name: "", email: "", date: "", time: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        date: Yup.string().required("Required"),
        time: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        axios.post("http://localhost:5000/api/appointments", { ...values, doctorId: id }).then(() => {
          navigate("/confirmation");
        });
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Field name="name" className="form-control" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Field name="email" type="email" className="form-control" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Field name="date" type="date" className="form-control" />
            </Form.Group>
           <Form.Group className="mb-3">
                  <Form.Label>Time</Form.Label>
                  <Field name="time" type="time" className="form-control" />
            </Form.Group>
           <Button type="submit" className="mt-3">Book</Button>
        </Form>
      )}
    </Formik>
    </Card.Body>
    </Card>
    </Container>
  );
};

export default BookingForm;
