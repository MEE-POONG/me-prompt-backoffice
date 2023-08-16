import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/RootPage/TheLayOut";
import { Badge, Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import { FaPen, FaRegEye, FaSearch } from "react-icons/fa";
import Link from "next/link";
import useAxios from "axios-hooks";
import PageSelect from "@/components/PageSelect";

import { Partner as PrismaPartner, Member as PrismaMember } from '@prisma/client';
import PartnerAddPartnerModal from "@/container/Partner/AddPartnerModal";
import PartnerViewPartnerModal from "@/container/Partner/ViewModal";
import DeleteModal from "@/components/modal/DeleteModal";
interface Member extends PrismaMember {
}

interface Partner extends PrismaPartner {
  member: Member;
}
interface Params {
  page: number;
  pageSize: number;
  searchKey: string;
  totalPages: number;
}
const PartnerPage: React.FC = () => {
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    searchKey: "",
    totalPages: 1,
  });
  const [{ data, loading, error }, getPartner,] = useAxios({
    url: `/api/partner?page=${params.page}&pageSize=${params.pageSize}&searchKey=${params.searchKey}`,
    method: "GET",
  });

  const [{ }, executePartnerDelete,] = useAxios({}, { manual: true });

  const [filteredPartnersData, setFilteredPartnersData] = useState<Partner[]>([]);

  useEffect(() => {
    setFilteredPartnersData(data?.data ?? []);

  }, [data]);

  const deletePartner = (id: string): Promise<any> => {
    return executePartnerDelete({
      url: "/api/userAG/" + id,
      method: "DELETE",
    }).then(() => {
      setFilteredPartnersData(prevPartners => prevPartners.filter(partner => partner?.id !== id));
    });
  };


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

  const handleChangesearchKey = (search: string) => {
    setParams(prevParams => ({
      ...prevParams,
      searchKey: search,
    }));
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <LayOut>

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
                onChange={e => handleChangesearchKey(e.target.value)}
                placeholder="ค้นหาผู้ใช้"
                aria-label="Fullname"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {/* <AddListName /> */}
            <Link href="/partner/userAG/add" className="ms-2 btn icon icofn-primary">
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
                {filteredPartnersData.map((partner: Partner, index: number) => {
                  return (
                    <tr key={partner?.id}>
                      <td>{index + 1}</td>
                      <td>{partner?.userAG}</td>
                      <td>
                        {/* {partner?.member[0].firstname} */}
                        {partner?.member ? (
                          <div>
                            {partner.member.firstname} {partner.member.lastname}
                          </div>
                        ) : (
                          <div>ไม่มีผู้ใช้</div>
                        )}
                      </td>
                      <td>{partner?.percent}%</td>
                      <td>
                        <Button
                          bsPrefix="icon" className={`ms-2 btn ${partner?.commission ? 'active' : ''}`}>
                          ค่าคอม
                        </Button>
                        <Button
                          bsPrefix="icon" className={`ms-2 btn ${partner?.overdue ? 'active' : ''}`}>
                          ค้างบวก
                        </Button>
                        <Button
                          bsPrefix="icon" className={`ms-2 btn ${partner?.adjustPercentage ? 'active' : ''}`}>
                          ปรับสู้ฟรี
                        </Button>
                        <Button
                          bsPrefix="icon" className={`ms-2 btn ${partner?.pay ? 'active' : ''}`}>
                          จ่าย
                        </Button>
                        <Button
                          bsPrefix="icon" className={`ms-2 btn ${partner?.customerCommission ? 'active' : ''}`}>
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
                        <DeleteModal data={partner} apiDelete={() => deletePartner(partner.id)} />
                      </td>
                    </tr>
                  )
                }
                )}
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