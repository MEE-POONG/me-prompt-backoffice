import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Carousel, Badge } from 'react-bootstrap';
import Image from 'next/image';

const MenuSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="Recommend section-padding">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="text-center mb-lg-5 mb-4">Recommend</h2>
          </Col>
          {[
            { title: 'Morning Fresh', img: '/images/other/1.png', tag: 'Breakfast' },
            { title: 'Tooplate Soup', img: '/images/other/2.jpg', tag: 'Lunch' },
            { title: 'Premium Steak', img: '/images/other/3.jpg', tag: 'Dinner' },
            { title: 'Seafood Set', img: '/images/other/4.jpg', tag: 'Dinner' },
            { title: 'Burger Set', img: '/images/other/5.jpg', tag: 'Breakfast' },
            { title: 'Healthy Soup', img: '/images/other/6.jpg', tag: 'Lunch' },
          ].map((item, index) => (
            <Col lg={4} md={6} xs={12} key={index}>
              <div className="menu-thumb">
                <div className="menu-image-wrap">
                  <Image src={item?.img} className="menu-image" alt="" width={100} height={100}/>
                  <Badge className="menu-tag bg-warning">{item.tag}</Badge>
                </div>
                <div className="menu-info d-flex flex-wrap align-items-center">
                  <h4 className="mb-0">{item.title}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;
