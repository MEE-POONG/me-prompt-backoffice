import React, { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useAxios from "axios-hooks";
import { FaUserSlash } from "react-icons/fa";
import { Member } from "@prisma/client";
import EditModal from "@/components/modal/EditModal";
interface DeletePartnerProps {
    setID: string;
    onUpdateSuccess: (success: boolean) => void;  // New prop
    fullname: string;
}
const DeletePartner: React.FC<DeletePartnerProps> = ({ setID, onUpdateSuccess, fullname }) => {
    const [show, setShow] = useState<boolean>(false);
    const [alertForm, setAlertForm] = useState<string>("not");
    const [checkBody, setCheckBody] = useState<Record<string, string> | null>();
    const [{ loading: putLoediting, error: putError }, userAGPut] = useAxios({}, { manual: true });

    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {
        setShow(false)
    };

    const handleSelectPartner = async (event: React.FormEvent) => {
        event.preventDefault();
        setAlertForm("warning");
        try {
            setAlertForm("primary");
            setShow(false);
            const response = await userAGPut({
                url: "/api/userAG/" + setID,
                method: "PUT",
                data: { memberId: null }
            });
            if (response && response.status === 200) {
                setAlertForm("success");
                onUpdateSuccess(true);
            } else {
                throw new Error('Failed to send data');
            }
        } catch (error) {
            setAlertForm("danger");
            onUpdateSuccess(false); 
        }
    };

    return (
        <>
            <Button className={`btn danger ms-1 ${show ? 'active' : ''}`} bsPrefix="icon" onClick={handleShow}>
                <FaUserSlash />
                <span className="h-tooltiptext">ลบพาร์ทเนอร์</span>
            </Button>
            <EditModal
                checkAlertShow={alertForm}
                setCheckAlertShow={setAlertForm}
                checkBody={checkBody ?? null}
                pathBack={""}
            />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header  >
                    <Modal.Title >ลบ พาร์ทเนอร์</Modal.Title>
                    <Button variant="close" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Modal.Header>
                        ต้องการ<span className="h5 text-danger">ลบ : </span><span className="h5 text-gold">{fullname}</span>จากพาร์ทเนอร์ใช่ไหม
                    </Modal.Header>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button variant="secondary" onClick={handleClose}>
                        ปิด
                    </Button>
                    <Button variant="primary" onClick={handleSelectPartner} >
                        ยืนยันการลบ
                    </Button>
                </Modal.Footer>
            </Modal>
        </ >
    );
}
export default DeletePartner;