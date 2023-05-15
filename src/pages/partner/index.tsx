import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import { Alert, Button, Card, Col, Row, Table } from "react-bootstrap";
import { FaPen, FaPowerOff, FaRegEye } from "react-icons/fa";
import Link from "next/link";


const HomePage: React.FC = () => {

  const [srcollBG, setSrcollBG] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setSrcollBG(0 - (document.documentElement.scrollTop / 10));

  };
  const data = Array.from({ length: 50 }, (_, i) => ({ col1: `Row ${i + 1} - Column 1`, col2: `Row ${i + 1} - Column 2` })); // Updated this line

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
      <div className='partner-page h-100'>
        <Card className="h-100">
          <Card.Header className="d-flex space-between">
            <h4>
              Partner - Master
            </h4>
            <span>
              <Button className="ms-2">เพิ่ม Senior</Button>
              <Button className="ms-2">เพิ่ม Master</Button>
              <Button className="ms-2">สร้าง Master</Button>
            </span>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover className="scroll">
              <thead>
                <tr>
                  <th>ยูสเซอร์</th>
                  <th>ชื่อ-สกุล</th>
                  <th>สิทธิรายได้</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <div className="space-around ">
                        <b>ufruu01</b>
                        <Link href="/partner/agent" className="ms-2 btn icon">Agent</Link>
                      </div>
                    </td>
                    <td>
                      <b>นรากร ปากา</b>
                    </td>
                    <td>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        ค่าคอม
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        ค้างบวก
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        ปรับสู้ฟรี
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        จ่าย
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        คืนลูกค้า
                      </Button>
                    </td>
                    <td>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        <FaRegEye />
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        <FaPen />
                      </Button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

      </div>
    </LayOut>
  );
}
export default HomePage;