import React, { useState } from 'react';
import { Offcanvas, Button, Nav, Image, Dropdown, NavDropdown } from 'react-bootstrap';
import { FaBars, FaRegEnvelope, FaShoppingBag, FaTachometerAlt, FaUserEdit } from 'react-icons/fa';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TheOffcanvasProps {
    show: boolean;
    onToggleShow: () => void;
}

const TheOffcanvas: React.FC<TheOffcanvasProps> = ({ show, onToggleShow }) => {
    const handleClose = () => onToggleShow();
    const { asPath } = useRouter();
    const [checkClickPath, setCheckClickPath] = useState<string>('/');
    useEffect(() => {
        console.log(show);

    }, [show])
    useEffect(() => {
        setCheckClickPath(asPath);
    }, [asPath])
    const handlePath = (valPath: string): void => { checkClickPath === valPath ? setCheckClickPath('') : setCheckClickPath(valPath) };

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="start" backdrop={false} scroll={true}>
                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body className='ps-0'>
                    <Link href="/" className={asPath === "/" ? "nav-link active" : "nav-link"}>
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Home</span>
                    </Link>

                    <Dropdown.Toggle onClick={() => handlePath('/setting')} className={checkClickPath === "/setting" || checkClickPath === "/setting/position" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Setting</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-transparent border-0 me-4" show={checkClickPath === "/setting" || checkClickPath === "/setting/information"} >
                        <Link href="/" className={asPath === "/" ? "nav-link active" : "nav-link"}>
                            <span>ข้อมูลกิจการ</span>
                        </Link>
                        <Link href="/" className={asPath === "/" ? "nav-link active" : "nav-link"}>
                            <span>ยังไม่มี</span>
                        </Link>
                    </Dropdown.Menu>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};
const TheButtonOffcanvas: React.FC<TheOffcanvasProps> = ({ show, onToggleShow }) => {
    const handleShow = () => onToggleShow();
    return (
        <Button onClick={handleShow} bsPrefix="slide-toggle-icon">
            <FaBars />
        </Button>
    );
}
export { TheButtonOffcanvas };
export default TheOffcanvas;