import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import { Alert, Button, Card, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { FaKey, FaPen, FaPowerOff, FaRegEye, FaSearch, FaTrashAlt } from "react-icons/fa";


const AdminPage: React.FC = () => {

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
      <div className='admin-page h-100'>
        <Card className="h-100">
          <Card.Header className="d-flex space-between">
            <h4 className="mb-0">
              Admin
            </h4>
            <InputGroup className="w-auto" bsPrefix="input-icon">
              <InputGroup.Text id="basic-addon1">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <span>
              <Button className="ms-2 btn" bsPrefix="icon">
                เพิ่ม Admin
              </Button>
              <Button className="ms-2 btn" bsPrefix="icon">
                สร้าง Admin
              </Button>
            </span>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover className="scroll">
              <thead>
                <tr>
                  <th>ชื่อ-สกุล</th>
                  <th>ทีม / ตำแหน่ง</th>
                  <th>ติดต่อ</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <b>นรากร ปากา</b>
                      <br />
                      <b>เอ</b>
                    </td>
                    <td>
                      <b>A / หัวหน้าทีม</b>
                    </td>
                    <td>
                      <b>Tel : 0381234567</b>
                      <br />
                      <b>Line : 0381234567</b>
                    </td>
                    <td>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        <FaPowerOff />
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        <FaKey />
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        <FaPen />
                      </Button>
                      <Button className="ms-2 btn" bsPrefix="icon">
                        <FaTrashAlt />
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
export default AdminPage;