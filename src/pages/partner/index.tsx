import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import { Badge, Button, Card, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { FaAppStoreIos, FaPen, FaRegEye, FaSearch, FaTrashAlt, FaUserNinja } from "react-icons/fa";
import Link from "next/link";
import useAxios from "axios-hooks";
import PageSelect from "@/components/PageSelect";
import PartnerViewPartnerModal from "@/container/Partner/ViewModal";
import DeleteModal from "@/components/modal/DeleteModal";
import PartnerAddPartnerModal from "@/container/Partner/AddPartnerModal";
import axios from "axios";

import { Partner as PrismaPartner, Member as PrismaMember } from '@prisma/client';

interface Member extends PrismaMember {
}

interface Partner extends PrismaPartner {
  Member: Member[];
}
interface Params {
  page: number;
  pageSize: number;
  totalPages: number;
}
const PartnerPage: React.FC = () => {
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    totalPages: 1,
  });
  const [{ data, loading, error }, getMember,] = useAxios({
    url: `/api/partner?page=${params.page}&pageSize=${params.pageSize}`,
    method: "GET",
  });
  const [partnersData, setPartnersData] = useState([]);

  useEffect(() => {
    getMember().then(response => setPartnersData(response?.data?.data)).catch(err => console.log(err));
  }, []);

  useEffect(() => {
    console.log("partnersData : ", partnersData)
  }, [partnersData]);

  const handleChangePage = (page: number) => {
    setParams(prevParams => ({
      ...prevParams,
      page: page,
    }));
  };
  const handleChangePageSize = (size: number) => {
    setParams(prevParams => ({
      ...prevParams,
      page: 1,
      pageSize: size,
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

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
            <h4 className="mb-0 py-1">
              Partner - Master
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
            <Link href="/partner/partner/add" className="ms-2 btn icon icofn-primary">
              เพิ่มพาร์ทเนอร์
            </Link>
          </Card.Header>
          <Card.Body className="p-0">
            <Table striped bordered hover className="scroll">
              <thead>
                <tr>
                  <th className="first">No.</th>
                  <th >userAG</th>
                  <th >ผู้ใช้</th>
                  <th>Partner</th>
                  <th>Benefit</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {partnersData.map((partner: Partner, index: number) => (
                  <tr key={partner.id}>
                    <td>{index + 1}</td>
                    <td>{partner.userAG}</td>
                    <td>
                      {partner.Member.length > 0 ? (
                        partner.Member.map((member: Member) => (
                          <div key={member.id}>{member.firstname + " " + member.lastname}</div>
                        ))
                      ) : (
                        <div>ไม่มีผู้ใช้</div>
                      )}
                    </td>
                    <td>{partner.percent}%</td>
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
                      <Button className="ms-2 btn" bsPrefix="icon">
                        <FaPen />
                      </Button>

                    </td>
                    {/* <td>{partner.commission.toString()}</td>
                    <td>{partner.overdue.toString()}</td>
                    <td>{partner.adjustPercentage.toString()}</td>
                    <td>{partner.pay.toString()}</td>
                    <td>{partner.customerCommission.toString()}</td>
                    <td>{partner.recommender}</td>
                    <td>{new Date(partner.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(partner.updatedAt).toLocaleDateString()}</td> */}
                  </tr>
                ))}
                {/* {filteredPartnersData?.map((partner: Partner, index: number) => {
                  const member = partner.Member && partner.Member.length > 0 ? partner.Member[0] : null;

                  return (
                    <tr key={index}>
                      <td className="text-end">
                        {index + 1}
                      </td>
                      <td>
                        <div className="space-around ">
                          <b>{partner?.userAG}</b>
                          <Link href="/partner/agent" className="ms-2 btn icon">Agent</Link>
                        </div>
                      </td>
                      <td>
                        <b>{member ? `${member.firstname} ${member.lastname}` : 'No Member'}</b>
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
                  );
                })} */}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Footer>
            <PageSelect page={params.page} totalPages={data?.pagination?.total} onChangePage={handleChangePage} onChangePageSize={handleChangePageSize} />
          </Card.Footer>
        </Card>

      </div>
    </LayOut>
  );
}
export default PartnerPage;




{/* {filteredPartnerData.map((master: Partner, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="text-end">
                        {index + 1}
                      </td>
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
                  );
                })} */}



