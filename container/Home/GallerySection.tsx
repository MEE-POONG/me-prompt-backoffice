import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface OurGalleryProps { }

const Galleryection: React.FC<OurGalleryProps> = () => {
  const projects = [
    ['Memory', 5],
    ['Wedding', 2],
    ['Portrait', 1],
    ['Travel', 6],
    ['Wedding', 7],
    ['Memory', 3],
    ['Fashion', 4],
    ['Portrait', 8],
  ];

  return (
    <Container fluid className="container-xxl py-5 gallery-list">
      <Container>
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="text-primary text-uppercase mb-2">Our Gallery</p>
          <h1 className="display-6 mb-0 text-backblue">Discover Our Unique And Creative Photoshoot</h1>
        </div>
        <Row className="g-3">
          {[0, 2, 4, 6].map((startIndex, index) => (
            <Col key={index} lg={3} md={6} className="wow fadeInUp" data-wow-delay={`${0.1 + 0.2 * index}s`}>
              <Row className="g-3">
                {projects.slice(startIndex, startIndex + 2).map(([title, imgIndex], projectIndex) => (
                  <Col key={projectIndex} xs={12}>
                    <div className="project-item">
                      <img className="img-fluid" src={`images/project-${imgIndex}.jpg`} alt="" />
                      {/* <Link className="project-title h5 mb-0" href={`images/project-${imgIndex}.jpg`} data-lightbox="project">
                        {title}
                      </Link> */}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Galleryection;
