import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactUsForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here, e.g. submit to a backend API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <Container className='text-backblue'>
      <h1>Belletti-Niresidence</h1>
      <Row>
        <Col  >
          <p><FaMapMarkerAlt className="me-2" />46/4 ถนนราชนิกูล ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา 30310</p>
          <p><FaPhoneAlt className="me-2" />+012 345 67890</p>
          <p><FaEnvelope className="me-2" />info@example.com</p>
        </Col>
        <Col>
          <form className="contact-form text-backblue" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className='display-6'>Contact</label>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
            <button type="submit" className='font-bold'>Send</button>
          </form>
        </Col>
      </Row>
    </Container>

  );
};

export default ContactUsForm;
