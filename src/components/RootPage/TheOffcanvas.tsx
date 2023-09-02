import React, { useState } from 'react';
import { Offcanvas, Button, Nav, Image, Dropdown, NavDropdown } from 'react-bootstrap';
import { FaBars, FaRegEnvelope, FaShoppingBag, FaTachometerAlt, FaUserEdit } from 'react-icons/fa';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navMenu } from '@/data/navbar';

interface TheOffcanvasProps {
    show: boolean;
    onToggleShow: () => void;
}

const TheOffcanvas: React.FC<TheOffcanvasProps> = ({ show, onToggleShow }) => {
    const handleClose = () => onToggleShow();
    const { asPath } = useRouter();
    const [checkClickPath, setCheckClickPath] = useState<string>('/');
    useEffect(() => {
        setCheckClickPath(asPath);
    }, [asPath])
    useEffect(() => {
        console.log(checkClickPath);
    }, [checkClickPath])

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="start" backdrop={false} scroll={true} >
                <Offcanvas.Body className='ps-0 pe-2'>
                    {navMenu.map((item) => {
                        if (item?.type === 'nav' && item?.head === "") {
                            return (
                                <Link key={item?.id} href={item?.path} className={`nav-link ${asPath === item?.path ? "active" : ""}`}>
                                    <span>{item?.title}</span>
                                </Link>
                            );
                        } else if (item?.type === 'dropdown') {
                            const isActiveDropdown = navMenu.some(list => item?.path === list.head && asPath === (item?.path + list.path));
                            return (
                                <div id={item?.title} className='' key={item?.id}>
                                    <Dropdown.Toggle className={`nav-item nav-link ${isActiveDropdown || checkClickPath === item?.path ? "active" : ""}`} onClick={() => setCheckClickPath(checkClickPath === item?.path ? "" : item?.path)}>
                                        <span>{item?.title}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="bg-transparent border-0" show={isActiveDropdown || checkClickPath === item?.path} >
                                        {navMenu.map((list) => {
                                            if (item?.path === list.head) {
                                                return (
                                                    <Link key={list.id} href={item?.path + list.path} className={`nav-link me-3 ${asPath === (item?.path + list.path) ? "active" : ""}`}>
                                                        <span>{list.title}</span>
                                                    </Link>
                                                );
                                            }
                                        })}
                                    </Dropdown.Menu>
                                </div>
                            );
                        }
                    })}
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
