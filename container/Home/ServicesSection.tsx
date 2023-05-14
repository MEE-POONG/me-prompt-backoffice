import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface OurServicesProps { }

const ServicesSection: React.FC<OurServicesProps> = () => {
  return (
    <Container fluid className="container-xxl bg-light py-5 my-5">
      <Container className="py-5">
        <div className="text-center mx-auto mb-5 " style={{ maxWidth: '500px' }}>
          <p className="text-primary text-uppercase mb-2">Our Services</p>
          <h1 className="display-6 mb-4 text-backblue">We Provide Best Professional Services</h1>
        </div>
        <Row className="g-3">
          {['Hospitality', 'Clean a Room', 'Food', 'Association'].map((service, index) => (
            <Col key={index} lg={3} md={6} className={`${index % 2 !== 0 ? ' pt-lg-5' : ''}`} >
              <div className="service-item d-flex flex-column bg-white p-3 pb-0 active">
                <div className="position-relative">
                  <img className="img-fluid" src={`images/service-${index + 1}.jpg`} alt="" />
                </div>
                <div className="text-center p-4">
                  <h4>{service}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ServicesSection;
