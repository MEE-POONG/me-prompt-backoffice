import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/RootPage/TheLayOut";
import { Badge, Button, Card, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { FaPen, FaPencilRuler, FaRegEye, FaSearch } from "react-icons/fa";
import Link from "next/link";
import useAxios from "axios-hooks";
import PageSelect from "@/components/PageSelect";

import { QueueBot } from '@prisma/client';
import DeleteModal from "@/components/modal/DeleteModal";
import CreateQueueModal from "@/container/BotAG/CreateInterest";
import { monthArray } from "@/data/month";
interface Params {
  page: number;
  pageSize: number;
  keyword: string;
  totalPages: number;
}
const InterestPage: React.FC = () => {
  const [queueBotUpdate, setQueueBotUpdate] = useState(false);
  const [params, setParams] = useState<Params>({
    page: 1,
    pageSize: 10,
    keyword: "",
    totalPages: 1,
  });
  const [{ data, loading, error }, quereBotSearch,] = useAxios({
  }, { autoCancel: false });


  const [filteredQueueBotUpdatesData, setFilteredQueueBotUpdatesData] = useState<QueueBot[]>([]);
  const [{ }, executeQueueBotUpdateDelete,] = useAxios({}, { manual: true });

  useEffect(() => {
    if (params || queueBotUpdate) {
      quereBotSearch({
        url: `/api/QueueBot/search?page=${params.page}&pageSize=${params.pageSize}&keyword=${params.keyword}`,
        method: "GET",
      });
      if (queueBotUpdate) {
        setQueueBotUpdate(false);
      }
    }
  }, [params, queueBotUpdate]);
  useEffect(() => {
    if (data?.success) {
      setFilteredQueueBotUpdatesData(data?.data ?? []);
    }
  }, [data]);

  const formatDate = (dateString: any) => {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = monthArray[date.getMonth()];  // Using the monthArray to get the month name
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const deleteQueueBot = (id: string): Promise<any> => {
    return executeQueueBotUpdateDelete({
      url: "/api/QueueBot/" + id,
      method: "DELETE",
    }).then(() => {
      setFilteredQueueBotUpdatesData(prevQueueBotUpdates => prevQueueBotUpdates.filter(queueBotUpdate => queueBotUpdate?.id !== id));
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

  const handleChangekeyword = (search: string) => {
    setParams(prevParams => ({
      ...prevParams,
      keyword: search,
    }));
  };

  return (
    <LayOut>
      <div className='queueBotUpdate-page h-91'>
        <Card className="h-100">
          <Card.Header className="d-flex space-between">
            <h4 className="mb-0 py-1">
              บอท AG
            </h4>
            <InputGroup className="w-auto" bsPrefix="input-icon">
              <InputGroup.Text id="basic-addon1">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                onChange={e => handleChangekeyword(e.target.value)}
                placeholder="ค้นหาผู้ใช้"
                aria-label="Fullname"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <CreateQueueModal checkUpdate={setQueueBotUpdate} />
          </Card.Header>
          <Card.Body className="p-0">
            <Table striped bordered hover className="scroll">
              <thead>
                <tr>
                  <th className="first">No.</th>
                  <th className="">หัวข้อบอท</th>
                  <th className="">สถานะงาน</th>
                  <th className="">ยูส</th>
                  <th className="">ตำแหน่ง</th>
                  <th className="">ยอดช่วง</th>
                  {/* <th>จัดการ</th> */}
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredQueueBotUpdatesData.map((queueBot: QueueBot, index: number) => {
                  return (
                    <tr key={queueBot?.id}>
                      <td className="text-end">{index + 1}</td>
                      <td className="">{queueBot?.title}</td>
                      <td className="">{!queueBot?.status ? "รอคิวงาน" : queueBot?.status}</td>
                      <td className="">{queueBot?.username}</td>
                      <td className="">{queueBot?.position}</td>
                      <td className="">
                        {formatDate(queueBot?.startDate)}<br />
                        {formatDate(queueBot?.endDate)}
                      </td>
                      {/* <td>
                        <DeleteModal data={queueBot} apiDelete={() => deleteQueueBot(queueBot?.id)} />
                      </td> */}
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
export default InterestPage;