import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserNurse } from "react-icons/fa";
import { Parallax } from 'react-parallax';

interface GoodResponseUsProps { }

const GoodResponseSection: React.FC<GoodResponseUsProps> = () => {
  return (
    <div className='good-response-page'>
      <Parallax
        bgImage="./images/hero-4.jpg"
        strength={500}
      >
        <div className='bg-filter' />
        <div className='score py-5'>
          <Container>
            <Row className="g-3">
              <Col lg={3} md={6}  >
                <div className="fact-item text-center h-100 p-5">
                  <h1 className="display-6 text-white mb-3">
                    <FaUserNurse />
                    <br />
                    165,489
                  </h1>
                  <h4 className="mb-3 text-white">Support Given</h4>
                </div>
              </Col>
              <Col lg={3} md={6} >
                <div className="fact-item text-center h-100 p-5">
                  <h1 className="display-6 text-white mb-3">
                    <FaUserNurse />
                    <br />
                    254 +
                  </h1>
                  <h4 className="mb-3 text-white">Clients Rating</h4>
                </div>
              </Col>
              <Col lg={3} md={6} data-wow-delay="0.5s">
                <div className="fact-item text-center h-100 p-5">
                  <h1 className="display-6 text-white mb-3">
                    <FaUserNurse />
                    <br />
                    2 M+
                  </h1>
                  <h4 className="mb-3 text-white">Money Saved</h4>
                </div>
              </Col>
              <Col lg={3} md={6} data-wow-delay="0.5s">
                <div className="fact-item text-center h-100 p-5">
                  <h1 className="display-6 text-white mb-3">
                    <FaUserNurse />
                    <br />
                    578
                  </h1>
                  <h4 className="mb-3 text-white">Awards won</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  );
};

export default GoodResponseSection;
