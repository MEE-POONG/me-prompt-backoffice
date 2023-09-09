import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";

import LayOut from "@/components/RootPage/TheLayOut";
import { Badge, Button, Card, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { FaPen, FaPencilRuler, FaRegEye, FaSearch } from "react-icons/fa";
import Link from "next/link";
import useAxios from "axios-hooks";
import PageSelect from "@/components/PageSelect";

import { QueueBot as PrismaQueueBot, PastAG as PrismaPastAG } from '@prisma/client';
import DeleteModal from "@/components/modal/DeleteModal";
import CreateQueueModal from "@/container/BotAG/CreateInterest";
import { monthArray } from "@/data/month";
import { intersetData } from "@/data/test";
interface PastAG extends PrismaPastAG {
}

interface QueueBot extends PrismaQueueBot {
  pastAG: PastAG[];
}
interface Params {
  page: number;
  pageSize: number;
  keyword: string;
  totalPages: number;
}
const InterestIDPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [{ data, loading, error }, quereBotID,] = useAxios({
  }, { autoCancel: false });

  const [{ data: interest, loading: interestLoading, error: interestError }, interestSearch,] = useAxios({
  }, { autoCancel: false });

  const [QueueBotData, setQueueBotData] = useState<QueueBot>();

  useEffect(() => {
    if (id) {
      quereBotID({
        url: `/api/QueueBot/${id}`,
        method: "GET",
      });

    }
  }, [id]);
  useEffect(() => {
    if (data?.success) {
      setQueueBotData(data?.data ?? []);
    }
  }, [data]);

  useEffect(() => {
    console.log(QueueBotData);
  }, [QueueBotData]);

  // const formatDate = (dateString: any) => {
  //   if (!dateString) {
  //     return "";
  //   }
  //   const date = new Date(dateString);
  //   const day = String(date.getDate()).padStart(2, '0');
  //   const month = monthArray[date.getMonth()];  // Using the monthArray to get the month name
  //   const year = date.getFullYear();
  //   return `${day} ${month} ${year}`;
  // }

  // const deleteQueueBot = (id: string): Promise<any> => {
  //   return executeQueueBotUpdateDelete({
  //     url: "/api/QueueBot/" + id,
  //     method: "DELETE",
  //   }).then(() => {
  //     setFilteredQueueBotUpdatesData(prevQueueBotUpdates => prevQueueBotUpdates.filter(queueBotUpdate => queueBotUpdate?.id !== id));
  //   });
  // };


  // const handleChangePage = (page: number) => {
  //   setParams(prevParams => ({
  //     ...prevParams,
  //     page: page,
  //   }));
  // };

  // const handleChangePageSize = (size: number) => {
  //   setParams(prevParams => ({
  //     ...prevParams,
  //     page: 1,
  //     pageSize: size,
  //   }));
  // };

  // const handleChangekeyword = (search: string) => {
  //   setParams(prevParams => ({
  //     ...prevParams,
  //     keyword: search,
  //   }));
  // };

  return (
    <LayOut>
      <div className='queueBotUpdate-page h-91'>
        <Card className="h-100">
          <Card.Header className="d-flex space-between">
            <h4 className="mb-0 py-1">
              ยอดแพ้ชนะ {QueueBotData?.title} วัน {QueueBotData?.startDate} - {QueueBotData?.endDate}
            </h4>
            {/* <InputGroup className="w-auto" bsPrefix="input-icon">
              <InputGroup.Text id="basic-addon1">
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                onChange={e => handleChangekeyword(e.target.value)}
                placeholder="ค้นหาผู้ใช้"
                aria-label="Fullname"
                aria-describedby="basic-addon1"
              />
            </InputGroup> */}
          </Card.Header>
          <Card.Body className="p-0">
            <table className="scroll table-striped table-bordered table-hover w-100">
              <thead className="f-s-0-75 text-center w-6rem">
                <tr>
                  <th rowSpan={2} className="first">No.</th>
                  <th rowSpan={2}>บัญชี</th>
                  <th rowSpan={2}>ติดต่อ</th>
                  <th rowSpan={2}>สกุลเงิน</th>
                  <th rowSpan={2}>จำนวน</th>
                  <th rowSpan={2}>จำนวนถูกต้อง</th>
                  <th rowSpan={2}>จำนวนสมาชิก</th>
                  <th rowSpan={2}>การนับเดิมพัน</th>
                  <th rowSpan={2}>ยอดรวมของคอมมิชชั่น</th>
                  <th colSpan={3}>สมาชิก</th>
                  <th colSpan={4}>จำนวนถูกต้อง</th>
                  <th colSpan={4}>ชนะ/แพ้</th>
                </tr>
                <tr>
                  <th >ชนะ/แพ้</th>
                  <th >คอมมิชชั่น</th>
                  <th >ชนะ/แพ้ + คอมมิชชั่น</th>
                  <th >จำนวนถูกต้อง</th>
                  <th >ชนะ/แพ้</th>
                  <th >คอมมิชชั่น</th>
                  <th >ชนะ/แพ้ + คอมมิชชั่น</th>
                  <th >จำนวนถูกต้อง</th>
                  <th >ชนะ/แพ้</th>
                  <th >คอมมิชชั่น</th>
                  <th >ชนะ/แพ้ + คอมมิชชั่น</th>
                </tr>
              </thead>
              <tbody className="f-s-0-75 text-center w-6rem">
                {QueueBotData?.pastAG?.map((pastAG: PastAG, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="first">{index + 1}</td>
                      <td>{pastAG?.Account}</td>
                      <td>{pastAG.Contact}</td>
                      <td>{pastAG.Cur}</td>
                      <td>{pastAG.Amount}</td>
                      <td>{pastAG.ValidAmount}</td>
                      <td>{pastAG.MemberCount}</td>
                      <td>{pastAG.StakeCount}</td>
                      <td>{pastAG.GrossCom}</td>
                      <td>{pastAG.MemberWL}</td>
                      <td>{pastAG.MemberCom}</td>
                      <td>{pastAG.MemberWLCom}</td>
                      <td>{pastAG.SuperProfitValid}</td>
                      <td>{pastAG.SuperProfitWL}</td>
                      <td>{pastAG.SuperProfitCom}</td>
                      <td>{pastAG.SuperProfitWLCom}</td>
                      <td>{pastAG.CompanyValid}</td>
                      <td>{pastAG.CompanyWL}</td>
                      <td>{pastAG.CompanyCom}</td>
                      <td>{pastAG.CompanyWLCom}</td>

                    </tr>
                  )
                })}


                {/* {filteredQueueBotUpdatesData.map((queueBot: QueueBot, index: number) => {
                  return (
                    <tr key={queueBot?.id}>
                      <td className="text-end">{index + 1}</td>
                      <td className="">
                        <Link href={`interest/${queueBot?.id}`}>{formatDate(queueBot?.startDate)}-{formatDate(queueBot?.endDate)}</Link>
                      </td>
                      <td className="">{!queueBot?.status ? "รอคิวงาน" : queueBot?.status}</td>

                      <td>
                        <DeleteModal data={queueBot} apiDelete={() => deleteQueueBot(queueBot?.id)} />
                      </td>
                    </tr>
                  )
                })} */}
              </tbody>
            </table>
          </Card.Body>
          <Card.Footer>
            {/* <PageSelect page={params.page} totalPages={data?.pagination?.total} onChangePage={handleChangePage} onChangePageSize={handleChangePageSize} /> */}
          </Card.Footer>
        </Card>

      </div>
    </LayOut >
  );
}
export default InterestIDPage;