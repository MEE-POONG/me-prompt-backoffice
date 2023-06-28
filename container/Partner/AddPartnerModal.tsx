import { Member } from '@prisma/client';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaRegEye } from 'react-icons/fa';
interface PartnerAddPartnerModalProps {
    data: Member; // replace this with the actual type of your data
}
const PartnerAddPartnerModal: React.FC<PartnerAddPartnerModalProps> = ({ data }) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="mx-1 btn" bsPrefix="icon" onClick={handleShow}>
                <FaRegEye />
                <span className="h-tooltiptext">ปิดใช้งาน</span>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ข้อมูล </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PartnerAddPartnerModal;
