import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';
import { Parallax } from 'react-parallax';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (

    <Parallax
      bgImage="./images/hero-1.jpg"
      strength={-500}
      className='hero-header'
    >
      <div className='bg-filter' />
      <Container fluid className='py-5'>
        <Container className="py-5 score">
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <p className="text-white text-uppercase mb-2 animated slideInDown">Bellettini Residence</p>
              <h1 className="display-4 mb-3 animated slideInDown text-white">Bellettini Residence</h1>
              <p className="animated slideInDown text-white">
                An unprecedented approach, bellettiniresidence glass façade has been cut in a playful rhythm around the building to create a captivating visual point in the skyline with a multitude of open spaces for uninterrupted views of the natural surroundings.
              </p>
              <div className="d-flex align-items-center pt-4 animated slideInDown">
                <Button variant="outline-light" className="btn-play" onClick={handleShowModal}>
                  <span></span>
                </Button>
                <h5 className="ms-4 mb-0 d-none d-sm-block text-white">Play Video</h5>
              </div>
            </Col>
            <Col lg={6} className="animated fadeIn">
              <Row className="g-3">
                <Col xs={6} className="text-end">
                  <Image className="img-fluid bg-white p-3 w-100 mb-3" src="images/hero-1.jpg" alt="" />
                  <img className="img-fluid bg-white p-3 w-100" src="images/hero-2.jpg" alt="" />
                </Col>
                <Col xs={6}>
                  <img className="img-fluid bg-white p-3 w-100 mb-3" src="images/hero-4.jpg" alt="" />
                  <img className="img-fluid bg-white p-3 w-100" src="images/hero-3.jpg" alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body className="p-0">
          <iframe
            title="Video"
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/w9x95BR8aX0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "5px 5px 0 0" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-primary py-2 px-2" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Parallax>


  );
};

export default HeroSection;
