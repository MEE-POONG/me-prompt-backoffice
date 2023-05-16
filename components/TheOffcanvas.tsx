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
            <Offcanvas show={show} onHide={handleClose} placement="start" backdrop={false} scroll={true} >
                <Offcanvas.Body className='ps-0 pe-2'>
                    <Link href="/" className={asPath === "/" ? "nav-link active" : "nav-link"}>
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Home</span>
                    </Link>
                    <div id="partner" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/partner')} className={asPath === "/partner" || asPath === "/partner/agent" || asPath === "/partner/listname" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">Partner</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/partner" || checkClickPath === "/partner/agent" || checkClickPath === "/partner/listname"} >
                            <Link href="/partner" className={asPath === "/partner" || asPath === "/partner/agent" ? "nav-link active" : "nav-link"}>
                                <span>Master</span>
                            </Link>
                            <Link href="/partner/listname" className={asPath === "/partner/listname" ? "nav-link active" : "nav-link"}>
                                <span>รายชื่อ</span>
                            </Link>
                        </Dropdown.Menu>
                    </div>
                    <div id="setting" className='select-page'>
                        <Dropdown.Toggle onClick={() => handlePath('/setting')} className={asPath === "/setting" || asPath === "/setting/position" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">Setting</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/setting" || checkClickPath === "/setting/information"} >
                            <Link href="/setting" className={asPath === "/setting" ? "nav-link active" : "nav-link"}>
                                <span>ติดต่อเรา</span>
                            </Link>
                            <Link href="/setting/admin" className={asPath === "/setting/admin" ? "nav-link active" : "nav-link"}>
                                <span>แอดมิน</span>
                            </Link>

                        </Dropdown.Menu>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};
const TheButtonOffcanvas: React.FC<TheOffcanvasProps> = ({ show, onToggleShow }) => {
    const handleShow = () => onToggleShow();
    return (
        <Button onClick={handleShow} bsPrefix={`slide-toggle-icon ${show ? 'active' : ''} me-auto`}>
            <FaBars />
        </Button>
    );
}
export { TheButtonOffcanvas };
export default TheOffcanvas;
