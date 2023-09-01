import React, { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useAxios from "axios-hooks";
import { FaPencilRuler, FaUserNinja } from "react-icons/fa";
import { Member } from "@prisma/client";
import EditModal from "@/components/modal/EditModal";
interface AddUserAGProps {
    setID: string;
    onUpdateSuccess: (success: boolean) => void;  // New prop
}
const AddUserAG: React.FC<AddUserAGProps> = ({ setID, onUpdateSuccess }) => {
    const [show, setShow] = useState<boolean>(false);
    const [checkIsValid, setCheckIsValid] = useState<boolean>(false);
    const [nameKey, setNameKey] = useState<string>("");
    const [{ data: searchData, loading: searchLoadding, error: searchError }, userAGSearch] = useAxios({}, { autoCancel: false });
    const [filteredUserAGsData, setFilteredUserAGsData] = useState<Member[]>([]);
    const [selectUserAG, setSelectUserAG] = useState<string>("");
    const [alertForm, setAlertForm] = useState<string>("not");
    const [checkBody, setCheckBody] = useState<Record<string, string> | null>();
    const [{ loading: putLoediting, error: putError }, userAGPut] = useAxios({}, { manual: true });

    useEffect(() => {
        userAGSearch({
            url: `/api/userAG/search?page=1&pageSize=1000&keyword=${nameKey}`,
            method: "GET",
        })
    }, [nameKey]);
    useEffect(() => {
        setFilteredUserAGsData(searchData?.data ?? []);
    }, [searchData]);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false), setNameKey(""), setSelectUserAG("")
    };

    const handleSelectPartner = async (event: React.FormEvent) => {
        event.preventDefault();
        setCheckIsValid(true);
        if (selectUserAG === "") {
            setCheckIsValid(true);
        } else {
            setCheckIsValid(false);
            setAlertForm("warning");
            try {
                setAlertForm("primary");
                setShow(false);
                const response = await userAGPut({
                    url: "/api/userAG/" + selectUserAG,
                    method: "PUT",
                    data: { memberId: setID }
                });
                if (response && response.status === 200) {
                    setAlertForm("success");
                    setNameKey("");
                    onUpdateSuccess(true);  // Call the callback function with true
                } else {
                    throw new Error('Failed to send data');
                }
            } catch (error) {
                setAlertForm("danger");
                onUpdateSuccess(false);  // Call the callback function with false
            }
        }
    };

    return (
        <>
            <Button className={`btn gold ${show ? 'active' : ''}`} bsPrefix="icon" onClick={handleShow}>
                <FaUserNinja />
                <span className="h-tooltiptext">เลือก UserAG</span>
            </Button>
            <EditModal
                checkAlertShow={alertForm}
                setCheckAlertShow={setAlertForm}
                checkBody={checkBody ?? null}
                pathBack={""}
            />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header  >
                    <Modal.Title >เลือก UserAG </Modal.Title>
                    <Button variant="close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={12} lg={12} >
                            <Form.Group className="mb-3 position-relative" controlId={`memberID`}>
                                <Form.Label>เลือก UserAG</Form.Label>
                                <Form.Control
                                    type={'text'}
                                    placeholder={'คีย์ค้นหา'}
                                    name={'memberID'}
                                    value={nameKey}
                                    onChange={e => setNameKey(e.target.value)}
                                    autoComplete={"off"}
                                />
                                <Form.Control.Feedback type="invalid" className={checkIsValid ? "d-block" : "d-none"}>
                                    กรุณาเลือกพาร์ทเนอร์
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="select-search">
                        <Row>
                            {filteredUserAGsData.map((UserAGs: Member, index: number) => {
                                return (
                                    <Col lg={6} key={index}>
                                        <Button onClick={() => { setSelectUserAG(UserAGs?.id), setNameKey(`${UserAGs?.username}`) }} bsPrefix="icon" className={`w-100 my-2 btn ${selectUserAG === UserAGs?.id ? 'active' : ''}`}>
                                            {UserAGs?.username}
                                        </Button>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleSelectPartner}
                    >
                        ยืนยัน UserAG
                    </Button>
                </Modal.Footer>
            </Modal>
        </ >
    );
}
export default AddUserAG;