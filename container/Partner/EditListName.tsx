import React, { useState } from "react";
import { Button, Card, FloatingLabel, Form, InputGroup, Modal } from "react-bootstrap";
import { FaPen, FaSearch } from "react-icons/fa";

const EditListName: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    setValidated(true);

  };
  return (
    <>
      <Button className="ms-2 btn" bsPrefix="icon" onClick={handleShow}>
        <FaPen />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>แก้ไขสมาชิก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="password" />
            </FloatingLabel>
            <FloatingLabel controlId="firstName" label="First Name" className="mb-3">
              <Form.Control required type="text" placeholder="First name" />
            </FloatingLabel>

            <FloatingLabel controlId="lastName" label="Last Name" className="mb-3">
              <Form.Control required type="text" placeholder="Last name" />
            </FloatingLabel>

            <FloatingLabel controlId="bankAccountNumber" label="Bank Account Number" className="mb-3">
              <Form.Control required type="text" placeholder="Bank account number" />
            </FloatingLabel>

            <FloatingLabel controlId="bankName" label="Bank Name" className="mb-3">
              <Form.Control required type="text" placeholder="Bank name" />
            </FloatingLabel>

            <FloatingLabel controlId="phoneNumber" label="Phone Number" className="mb-3">
              <Form.Control required pattern="\d*" type="text" placeholder="Phone number" />
            </FloatingLabel>

            <FloatingLabel controlId="lineId" label="Line ID" className="mb-3">
              <Form.Control required type="text" placeholder="Line ID" />
            </FloatingLabel>

            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="Email (optional)" />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditListName;