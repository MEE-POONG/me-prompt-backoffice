import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import { Alert, Card, Col, Row } from "react-bootstrap";


const HomePage: React.FC = () => {

  const [srcollBG, setSrcollBG] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setSrcollBG(0 - (document.documentElement.scrollTop / 10));

  };

  return (
    <LayOut>
      <Head>
        <title>Wellcome | MePrompt-BackOffice</title>
        <meta
          name="description"
          content="T ACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-page h-100'>
        <Card className="title">
          <Card.Header>
            <h2 className="display-6 text-center">Welcome</h2>
          </Card.Header>
        </Card>
        <Row className="warn">
          <Col lg="4" className="h-100">
            <Card className="h-100">
              <Card.Header>
                <h4 className="text-center">คิวงานบอท</h4>
              </Card.Header>
              <Card.Body className="y-scroll">
                {Array.from({ length: 15 }, (_, index) => (
                  <Alert key={index} variant='success'>
                    <b>เติมเครดิต 9,000</b>
                    <b>ยูส ufh27oa14</b>
                    <b>14.00</b>
                  </Alert>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="h-100">
            <Card className="h-100">
              <Card.Header>
                <h4 className="text-center">จัดการข้อมูล</h4>
              </Card.Header>
              <Card.Body className="y-scroll">
                {Array.from({ length: 15 }, (_, index) => (
                  <Alert key={index} variant='info'>
                    <b>แก้ข้อมูล ufrcbaaa</b>
                    <b>โดย Est</b>
                    <b>14.00</b>
                  </Alert>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" className="h-100">
            <Card className="h-100">
              <Card.Header>
                <h4 className="text-center">พันธมิตรเข้าใช้</h4>
              </Card.Header>
              <Card.Body className="y-scroll">
                {Array.from({ length: 15 }, (_, index) => (
                  <Alert key={index} variant='info'>
                    <b>ufh27oa14</b>
                    <b>14.00</b>
                  </Alert>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </div>
    </LayOut>
  );
}
export default HomePage;