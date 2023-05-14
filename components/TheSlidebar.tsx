// Offcanvas.tsx
import React, { useState } from 'react';
import { Offcanvas, Button, Nav, Image, Dropdown, SplitButton, DropdownButton, NavDropdown } from 'react-bootstrap';
import { FaBars, FaRegEnvelope, FaShoppingBag, FaTachometerAlt, FaUserEdit } from 'react-icons/fa';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TheSlidebarProps {
    show: boolean;
    onToggleShow: () => void;
}

const TheSlidebar: React.FC<TheSlidebarProps> = ({ show, onToggleShow }) => {
    const handleShow = () => onToggleShow();
    const { asPath } = useRouter();
    const [checkClickPath, setCheckClickPath] = useState<string>('/');
    useEffect(() => {
        setCheckClickPath(asPath);
    }, [asPath])
    const handlePath = (valPath: string): void => { checkClickPath === valPath ? setCheckClickPath('') : setCheckClickPath(valPath) };


    return (
        <div className={`sidebar ${!show ? 'off-text' : ''}`} >
            <nav className="navbar">
                <div className="navbar-nav menu w-100">

                    <Link href="/" className={asPath === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Home</span>
                    </Link>
                    <Link href="/s" className={asPath === "/s" ? "nav-item nav-link active" : "nav-item nav-link"}>
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Home</span>
                    </Link>
                    <Dropdown.Toggle onClick={() => handlePath('/member')} className={checkClickPath === "/member" || checkClickPath === "/member/department" || checkClickPath === "/member/permission" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Member</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-transparent border-0 me-4" show={checkClickPath === "/member" || checkClickPath === "/member/department" || checkClickPath === "/member/permission"} >
                        <Link id="buttons" href="/member" className={asPath === "/member" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                            <i >
                                <FaTachometerAlt />
                            </i>
                            <span className="ms-2">สมาชิก</span>
                        </Link>
                        <Link id="buttons" href="/member/department" className={asPath === "/member/department" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                            แผนกงาน
                        </Link>
                    </Dropdown.Menu>
                    <Dropdown.Toggle onClick={() => handlePath('/setting')} className={checkClickPath === "/setting" || checkClickPath === "/setting/position" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Setting</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-transparent border-0 me-4" show={checkClickPath === "/setting" || checkClickPath === "/setting/information"} >
                        <Link id="buttons" href="/setting" className={asPath === "/setting" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                            ข้อมูลกิจการ
                        </Link>
                        <Link id="buttons" href="/member/position" className={asPath === "/member/position" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                            ยังไม่มี
                        </Link>
                    </Dropdown.Menu>


                    <Dropdown.Toggle onClick={() => handlePath('/setting')} className={checkClickPath === "/setting" || checkClickPath === "/setting/position" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
                        <i >
                            <FaTachometerAlt />
                        </i>
                        <span className="ms-2">Setting</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-transparent border-0 me-4" show={checkClickPath === "/setting" || checkClickPath === "/setting/information"} >
                        <Link id="buttons" href="/setting" className={asPath === "/setting" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                            ข้อมูลกิจการ
                        </Link>
                        <Link id="buttons" href="/member/position" className={asPath === "/member/position" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                            ยังไม่มี
                        </Link>
                    </Dropdown.Menu>

                    <DropdownButton
                        key={'end'}
                        id={`dropdown-button-drop-${'end'}`}
                        drop={'end'}
                        variant="secondary"
                        title={`Drop ${'end'}`}
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={<>
                            <i className="me-lg-2">
                                <FaRegEnvelope />
                            </i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </>}
                        menuVariant="dark"
                    >
                        <hr className="dropdown-divider" />
                        <NavDropdown.Item href="#action/3.4">
                            <div className="d-flex align-items-center">
                                <Image className="rounded-circle" src={'./images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                <div className="ms-2">
                                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </NavDropdown.Item>
                        <hr className="dropdown-divider" />
                        <NavDropdown.Item href="#action/3.4">
                            <div className="d-flex align-items-center">
                                <Image className="rounded-circle" src={'./images/user.jpg'} alt="" style={{ width: "40px", height: "40px" }} />
                                <div className="ms-2">
                                    <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                        </NavDropdown.Item>
                        <hr className="dropdown-divider" />
                        <NavDropdown.Item href="#action/3.4" className="text-center">
                            See all notifications
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </nav>
        </div >
    );
};
const TheButtonSlide: React.FC<TheSlidebarProps> = ({ show, onToggleShow }) => {
    const handleShow = () => onToggleShow();
    return (
        <Button onClick={handleShow} bsPrefix="slide-toggle-icon">
            <FaBars />
        </Button>
    );
}
export default TheSlidebar;
export { TheButtonSlide };
