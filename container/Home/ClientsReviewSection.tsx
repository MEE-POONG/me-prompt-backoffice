import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface ClientsReviewProps {}

const ClientsReview: React.FC<ClientsReviewProps> = () => {
  const testimonials = [
    {
      img: 'images/testimonial-1.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      img: 'images/testimonial-2.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      img: 'images/testimonial-3.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
    {
      img: 'images/testimonial-4.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
    },
  ];

  return (
    <Container fluid className="container-xxl py-5">
      <Container>
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="text-primary text-uppercase mb-2">Client's Review</p>
          <h1 className="display-6 mb-0">More Than 20000+ Customers Trusted Us</h1>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          {testimonials.map((testimonial) => (
            <div key={testimonial.img} className="testimonial-item bg-white p-4">
              <div className="d-flex align-items-center mb-4">
                <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial.img} alt={testimonial.name} />
                <div className="ms-4">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <span>{testimonial.profession}</span>
                </div>
              </div>
              <p className="mb-0">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default ClientsReview;
