import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import { ContactData, WarnCheckEditLogData, WarnAudienceRecordData, contactData, warnCheckEditLogData, warnAudienceRecordData } from "@/api/types";
import axios from 'axios';

export default function Warn() {
    const [first, setFirst] = useState();
    useEffect(() => {

        (async () => {
            var data = await axios({ url: '/api/types' })
            console.log(data);

        })()

    }, [])


    return (
        <Row className='warn mx-4 mt-4'>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title className='text-center'>
                            ติดต่อเรา
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {/* {contactList?.map((list, key) => (
                            <Link key={key} href={"/contact/" + list.id} className="alert alert_warning">
                                <div>
                                    <Card.Title>{list.title}</Card.Title>
                                    <Card.Text>{list.detail}</Card.Text>
                                </div>
                            </Link>
                        ))} */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title className='text-center'>
                            แก้ไขเปลี่ยนแปลงข้อมูล
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {/* {warnCheckEditLogList?.map((list, key) => (
                            <Link key={key} href={"/" + list.tagLink + "/" + list.id} className="alert alert_warning">
                                <Card.Title className="alert--content">{list.title}</Card.Title>
                                <Card.Text>{list.detail}</Card.Text>
                            </Link>
                        ))} */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title className='text-center'>
                            รายงานการเข้าชมเว็บ
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {/* {warnAudienceRecordList?.map((list, key) => (
                            <Link key={key} href={"/" + list.tagLink + "/" + list.id} className="alert">
                                <div>
                                    <Card.Title>{list.title}</Card.Title>
                                    <Card.Text>{list.detail}  คน</Card.Text>
                                </div>
                            </Link>
                        ))} */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
