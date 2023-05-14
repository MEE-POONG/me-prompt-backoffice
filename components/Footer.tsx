import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import { FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

interface FooterProps { }

const Footer: React.FC = () => {

  return (
    <footer className='bg-white'>
      <Container className="position-relative text-white-50 mt-5 py-5 px-4 px-lg-5">
        <Row className="g-5">
          <Col lg={4} className="pe-lg-5 text-backblue">
            <Link href="/" className="navbar-brand">
              <Image src="images/logo.png" alt="logo" className='logo w-100' />
            </Link>
          </Col>
          <Col lg={4} className="pe-lg-5 text-backblue">
            <p>บริหารโคราการ บริษัท ไพลิน แลนด์ แอนด์ ดีเวลลอปเมนท์ จำกัด</p>
            <p><FaMapMarkerAlt className="me-2" />46/4 ถนนราชนิกูล ตำบลในเมือง อำเภอเมือง จังหวัดนครราชสีมา 30310</p>
            <p><FaPhoneAlt className="me-2" />+012 345 67890</p>
            <p><FaEnvelope className="me-2" />info@example.com</p>
            <div className="d-flex justify-content-start mt-4">
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaTwitter /></Button>
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaFacebookF /></Button>
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaLinkedinIn /></Button>
              <Button variant="outline-primary" className="btn-square rounded-circle me-2" href="#"><FaInstagram /></Button>
            </div>
          </Col>
          <Col lg={4} className="ps-lg-5 text-backblue">
            <h4 className=" mb-4">Quick Links</h4>
            <Button variant="text-backblue" className="p-0 font-bold"><FaArrowRight /> About Us</Button><br />
            <Button variant="text-backblue" className="p-0 font-bold"><FaArrowRight /> Contact Us</Button><br />
            <Button variant="text-backblue" className="p-0 font-bold"><FaArrowRight /> Our Services</Button><br />
            <Button variant="text-backblue" className="p-0 font-bold"><FaArrowRight /> Terms & Condition</Button><br />
            <Button variant="text-backblue" className="p-0 font-bold"><FaArrowRight /> Terms & Condition</Button><br />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
