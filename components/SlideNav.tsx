import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  FaUsers,
  FaRegKeyboard,
  FaTh,
  FaTachometerAlt,
  FaUserEdit,
  FaLaptop,
  FaRegFileAlt,
  FaRegChartBar,
  FaBars,
  FaFunnelDollar,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { Image, Dropdown, Button } from "react-bootstrap";
import { BsFillBagFill } from "react-icons/bs";
import Link from "next/link";

export default function TheSlideNav(): JSX.Element {
  const { asPath } = useRouter();
  const [checkClickPath, setCheckClickPath] = useState<string>('/');
  useEffect(() => {
    setCheckClickPath(asPath);
  }, [asPath])
  const handlePath = (valPath: string): void => { checkClickPath === valPath ? setCheckClickPath('') : setCheckClickPath(valPath) };
  return (
    <>
      <div className="sidebar pe-4 pb-3 ">
        <nav className="navbar bg-secondary navbar-dark">
          <Link href="/" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <FaUserEdit className="fa me-2" />
              MeePrompt
            </h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <Image
                className="rounded-circle"
                src={"./images/user.jpg"}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success roundedborder border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link href="/" className={asPath === "/" ? "nav-item nav-link active" : "nav-item nav-link"}>
                <i className="me-2">
                  <FaTachometerAlt />
                </i>
                Home
            </Link>
            <Dropdown.Toggle onClick={() => handlePath('/member')} className={checkClickPath === "/member" || checkClickPath === "/member/department" || checkClickPath === "/member/permission" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
              <i className="me-2">
                <BsFillBagFill />
              </i>
              Member
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/member" || checkClickPath === "/member/department" || checkClickPath === "/member/permission"} >
              <Link id="buttons" href="/member"  className={asPath === "/member" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                  สมาชิก
              </Link>
              <Link id="buttons" href="/member/department"  className={asPath === "/member/department" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                  แผนกงาน
              </Link>
            </Dropdown.Menu>

            <Dropdown.Toggle onClick={() => handlePath('/setting')} className={checkClickPath === "/setting" || checkClickPath === "/setting/position" ? "nav-item nav-link active" : "nav-item nav-link"} id="dropdown-custom-components" >
              <i className="me-2">
                <BsFillBagFill />
              </i>
              Setting
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-transparent border-0" show={checkClickPath === "/setting" || checkClickPath === "/setting/information"} >
              <Link id="buttons" href="/setting" className={asPath === "/setting" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                  ข้อมูลกิจการ
              </Link>
              <Link id="buttons" href="/member/position"  className={asPath === "/member/position" ? "dropdown-item ps-5 active" : "dropdown-item ps-5"}>
                  ยังไม่มี
              </Link>
            </Dropdown.Menu>

          </div>
        </nav>
      </div >
    </>
  );
}
export function ButtonSlideNav() {
  const [slideOpen, setSlideOpen] = React.useState("");
  return (
    <Button
      bsPrefix="sidebar-toggler  bar-slide"
      onClick={() => setSlideOpen(slideOpen == "close" ? "open" : "close")}
    >
      <FaBars />
    </Button>
  );
}
