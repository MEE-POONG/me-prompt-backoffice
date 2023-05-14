import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import RequestSection from "@/container/Home/RequestSection";
import WhySection from "@/container/Home/WhySection";
import ServicesSection from "@/container/Home/ServicesSection";
import GalleryList from "@/container/GalleryList";
import { Card, Col, Row } from "react-bootstrap";


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
      <div className='home-page'>
        {/* <Card>
          <Card.Header>
            <h2 className="display-6 text-center">Welcome</h2>
          </Card.Header>
        </Card> */}
        <Row>
          <Col lg="4">
            <Card>
              aa
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              aa
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              aa
            </Card>
          </Col>
        </Row>
      </div>
    </LayOut>
  );
}
export default HomePage;