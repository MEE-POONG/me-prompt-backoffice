import IndexNavbar from "./IndexNavbar";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import TheSlideNav from "./SlideNav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayOut({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <TheSlideNav />
      <div className="content ">
        <IndexNavbar />
        {children}
        <Footer />
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <FaArrowUp />
      </a>
    </>
  );
}