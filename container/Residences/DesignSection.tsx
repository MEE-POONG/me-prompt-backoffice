import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

interface OurGalleryProps { }

const DesignSection: React.FC<OurGalleryProps> = () => {

  return (
    <div className=" design-section">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h1 className="display-6 mb-0 text-backblue">GREAT DESIGN IS IN THE DETAILS</h1>
        </div>
      </Container>
      <Row className='mx-0'>
        <Col lg={7} className='px-0'>
          <Image className="w-100" src='images/hero-6.jpg' alt="" />
        </Col>
        <Col lg={5} className='p-5 '>
          <h3 className='text-backblue'>THE RESIDENCES</h3>
          <p>
            An unprecedented approach, bellettiniresidence glass façade has been cut in a playful rhythm around the building to create a captivating visual point in the skyline with a multitude of open spaces for uninterrupted views of the natural surroundings.
          </p>
        </Col>
        <Col lg={5} className='p-5'>
          <h3 className='text-backblue'>THE RESIDENCES</h3>
          <p>
            An unprecedented approach, bellettiniresidence glass façade has been cut in a playful rhythm around the building to create a captivating visual point in the skyline with a multitude of open spaces for uninterrupted views of the natural surroundings.
          </p>
        </Col>
        <Col lg={7} className=''>
          <Image className="w-100" src='images/hero-6.jpg' alt="" />
        </Col>
        <Col lg={7} className=''>
          <Image className="w-100" src='images/hero-6.jpg' alt="" />
        </Col>
        <Col lg={5} className='p-5'>
          <h3 className='text-backblue'>THE RESIDENCES</h3>
          <p>
            An unprecedented approach, bellettiniresidence glass façade has been cut in a playful rhythm around the building to create a captivating visual point in the skyline with a multitude of open spaces for uninterrupted views of the natural surroundings.
          </p>
        </Col>
        <Col lg={12} className='bg-white p-5'>
          <h3 className='text-backblue text-center'>THE RESIDENCES</h3>
          <p>
            An unprecedented approach, bellettiniresidence glass façade has been cut in a playful rhythm around the building to create a captivating visual point in the skyline with a multitude of open spaces for uninterrupted views of the natural surroundings.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default DesignSection;
