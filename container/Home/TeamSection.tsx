import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface OurTeamProps {}

const TeamSection: React.FC<OurTeamProps> = () => {
  const teamMembers = [
    {
      name: 'Lucifer Jhones',
      role: 'Photographer',
      img: 'images/team-1.jpg',
      delay: '0.1s',
      reverseOnSm: false,
      reverseOnLg: false,
    },
    {
      name: 'Jesse Joslin',
      role: 'Videographer',
      img: 'images/team-2.jpg',
      delay: '0.3s',
      reverseOnSm: true,
      reverseOnLg: false,
    },
    {
      name: 'Richard Archer',
      role: 'Retoucher',
      img: 'images/team-3.jpg',
      delay: '0.1s',
      reverseOnSm: false,
      reverseOnLg: true,
    },
    {
      name: 'April Ryan',
      role: 'Editor',
      img: 'images/team-4.jpg',
      delay: '0.3s',
      reverseOnSm: true,
      reverseOnLg: true,
    },
  ];

  return (
    <Container fluid className="container-xxl px-0 py-5">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
        <p className="text-primary text-uppercase mb-2">Our Team</p>
        <h1 className="display-6 mb-0">Creative Photograher And Videographer</h1>
      </div>
      <Row className="g-0">
        {teamMembers.map((member) => (
          <Col key={member.name} lg={6} className={`wow fadeIn ${member.reverseOnLg ? 'flex-lg-row-reverse' : ''}`} data-wow-delay={member.delay}>
            <Row className={`g-0 ${member.reverseOnSm ? 'flex-sm-row-reverse' : 'flex-sm-row'}`}>
              <Col sm={6}>
                <div className="team-img position-relative">
                  <img className="img-fluid" src={member.img} alt={member.name} />
                </div>
              </Col>
              <Col sm={6}>
                <div className="h-100 p-5 d-flex flex-column justify-content-between">
                  <div className="mb-3">
                    <h4>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                  <p>
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                  </p>
                  <div className="d-flex">
                    <Link className="btn btn-square btn-outline-primary rounded-circle me-2" href="/"><i className="fab fa-facebook-f"></i></Link>
                    <Link className="btn btn-square btn-outline-primary rounded-circle me-2" href="/"><i className="fab fa-twitter"></i></Link>
                    <Link className="btn btn-square btn-outline-primary rounded-circle me-2" href="/"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamSection;
