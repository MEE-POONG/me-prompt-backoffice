import { Member } from '@prisma/client';
import useAxios from 'axios-hooks';
import React, { useEffect, useState } from 'react';
import { Alert, Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPen, FaTrashAlt } from 'react-icons/fa';


const CreateInterestModal: React.FC<{ checkUpdate: (state: boolean) => void }> = ({ checkUpdate }) => {
    const [show, setShow] = useState<boolean>(false);
    const [checkEdit, setCheckEdit] = useState<string>("not");

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };
    const [title, setTitle] = useState<string>('');
    const [startDate, setStartDate] = useState<string>(getCurrentDate());
    const [endDate, setEndDate] = useState<string>(getCurrentDate());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [{ error: errorMessage, loading: queueAGLoading }, executeQueueAG] = useAxios({ url: '/api/QueueBot', method: 'POST' }, { manual: true });

    useEffect(() => {
    }, [startDate, endDate]);


    let detail = ``;
    let variant = "";

    if (checkEdit === 'success') {
        variant = 'success';
        detail = 'ลบข้อมูลสำเร็จ';
    } else if (checkEdit === 'primary') {
        variant = 'primary';
        detail = 'กำลังสร้างคิว BotAG';
    } else if (checkEdit === 'danger') {
        variant = 'danger';
        detail = 'Error ลบข้อมูลไม่สำเร็จ';
    } else if (checkEdit === 'warning') {
        variant = 'warning';
        detail = 'กรอกข้อมูลไม่ครบ';
    }

    const handleCloseAndReset = () => {
        handleClose();
        setCheckEdit("not");
    };

    const handleCreate = () => {
        setCheckEdit("primary");
        if (title.length <= 5) {
            setCheckEdit("danger");
        }
        executeQueueAG({
            data: {
                title,
                startDate,
                endDate,
            }
        }).then(() => {
            setCheckEdit("success");
            checkUpdate(true);
            setTimeout(() => {
                setCheckEdit("not");
                handleCloseAndReset();
            }, 1000);
        }).catch(() => {
            setCheckEdit("danger");
        });
    };

    return (
        <>
            <Button className="mx-2 btn" bsPrefix="icon" onClick={handleShow}>
                Path ยอดได้เสีย
            </Button>
            <Modal show={show} onHide={handleCloseAndReset} centered>
                {checkEdit === 'primary' ? (
                    <Alert variant={variant} className='data m-0'>
                        <Alert.Heading className='p-0'>{detail}</Alert.Heading>
                    </Alert>
                ) :
                    <>
                        <Modal.Header  >
                            <Modal.Title >Path ยอดได้เสีย</Modal.Title>
                            <Button variant="close" onClick={handleCloseAndReset} />
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col lg={12}>
                                <Form.Group className="mb-3 position-relative" >
                                        <Form.Label>เลือกวันเริ่มต้น</Form.Label>
                                        <Form.Control
                                            type={'text'}
                                            placeholder={'เลือกวันเริ่ม'}
                                            name={'title'}
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            autoComplete={"off"}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกวันที่เริ่มต้น
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group className="mb-3 position-relative" >
                                        <Form.Label>เลือกวันเริ่มต้น</Form.Label>
                                        <Form.Control
                                            type={'date'}
                                            placeholder={'เลือกวันเริ่ม'}
                                            name={'formdate'}
                                            value={startDate}
                                            onChange={e => setStartDate(e.target.value)}
                                            autoComplete={"off"}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกวันที่เริ่มต้น
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col lg={12}>
                                    <Form.Group className="mb-3 position-relative" >
                                        <Form.Label>ถึงวันที่</Form.Label>
                                        <Form.Control
                                            type={'date'}
                                            placeholder={'เลือกวันสิ้นสุด'}
                                            name={'todate'}
                                            value={endDate}
                                            onChange={e => setEndDate(e.target.value)}
                                            autoComplete={"off"}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            กรุณาเลือกวันสิ้นสุด
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer className='d-flex justify-content-around'>
                            <Button variant="secondary" className={checkEdit === 'not' || checkEdit === 'danger' ? "my-2" : "d-none"} onClick={handleCloseAndReset}>
                                Close
                            </Button>
                            <Button variant="primary" className={checkEdit === 'not' || checkEdit === 'danger' ? "my-2" : "d-none"} onClick={() => handleCreate()}>
                                ยืนยันการแก้ไข
                            </Button>
                        </Modal.Footer>
                    </>
                }
            </Modal>
        </>
    );
}

export default CreateInterestModal;
