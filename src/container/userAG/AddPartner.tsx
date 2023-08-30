import React, { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useAxios from "axios-hooks";
import { FaPencilRuler } from "react-icons/fa";
import { Member } from "@prisma/client";
import EditModal from "@/components/modal/EditModal";
interface AddPartnerProps {
    setID: string;
    onUpdateSuccess: (success: boolean) => void;  // New prop
}
const AddPartner: React.FC<AddPartnerProps> = ({ setID, onUpdateSuccess }) => {
    const [show, setShow] = useState<boolean>(false);
    const [checkIsValid, setCheckIsValid] = useState<boolean>(false);
    const [nameKey, setNameKey] = useState<string>("");
    const [{ data: searchData, loading: searchLoadding, error: searchError }, userAGSearch] = useAxios({}, { autoCancel: false });
    const [filteredMembersData, setFilteredMembersData] = useState<Member[]>([]);
    const [selectMember, setSelectMember] = useState<string>("");
    const [alertForm, setAlertForm] = useState<string>("not");
    const [checkBody, setCheckBody] = useState<Record<string, string> | null>();
    const [{ loading: putLoediting, error: putError }, userAGPut] = useAxios({}, { manual: true });

    useEffect(() => {
        userAGSearch({
            url: `/api/member/search?page=1&pageSize=10&keyword=${nameKey}`,
            method: "GET",
        })
    }, [nameKey]);
    useEffect(() => {
        setFilteredMembersData(searchData?.data ?? []);
    }, [searchData]);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false), setNameKey(""), setSelectMember("")
    };

    const handleSelectPartner = async (event: React.FormEvent) => {
        event.preventDefault();
        setCheckIsValid(true);
        if (selectMember === "") {
            setCheckIsValid(true);
        } else {
            setCheckIsValid(false);
            setAlertForm("warning");
            try {
                setAlertForm("primary");
                setShow(false);
                const response = await userAGPut({
                    url: "/api/userAG/" + setID,
                    method: "PUT",
                    data: { memberId: selectMember }
                });
                if (response && response.status === 200) {
                    setAlertForm("success");
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
            <Button className={`btn ${show ? 'active' : ''}`} bsPrefix="icon" onClick={handleShow}>
                <FaPencilRuler />
                <span className="h-tooltiptext">เพิ่มพาร์ทเนอร์</span>
            </Button>
            <EditModal
                checkAlertShow={alertForm}
                setCheckAlertShow={setAlertForm}
                checkBody={checkBody ?? null}
                pathBack={""}
            />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header  >
                    <Modal.Title >เลือกพาร์ทเนอร์ </Modal.Title>
                    <Button variant="close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={12} lg={12} >
                            <Form.Group className="mb-3 position-relative" controlId={`memberID`}>
                                <Form.Label>เลือกพาร์ทเนอร์</Form.Label>
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
                        {filteredMembersData.map((members: Member, index: number) => {
                            return (
                                <Col lg={6} key={index}>
                                    <Button onClick={() => { setSelectMember(members?.id), setNameKey(`${members?.firstname || ""} ${members?.lastname || ""}`.trim()) }} bsPrefix="icon" className={`w-100 my-2 btn ${selectMember === members?.id ? 'active' : ''}`}>
                                        {`${members?.firstname || ""} ${members?.lastname || ""}`.trim()}
                                    </Button>
                                </Col>
                            )
                        }
                        )}
                    </Row>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleSelectPartner}
                    >
                        ยืนยันพาร์ทเนอร์
                    </Button>
                </Modal.Footer>
            </Modal>
        </ >
    );
}
export default AddPartner;