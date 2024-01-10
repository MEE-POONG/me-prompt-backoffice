import React, { useState } from 'react';
import TheNavbar from './TheNavbar';
import TheFooter from './TheFooter';
import { TheSlidbar } from './TheSlidbar';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayOut: React.FC<LayoutProps> = ({ children }) => {
  // const [show, setShow] = useState(true);

  // const handleToggleShow = () => setShow(!show);

  // const mainStyle = {
  //   transition: 'margin-left 300ms ease-in-out, width 300ms ease-in-out', // Synced with TheSlidbar
  // };

  return (
    <>
      <main className='bg-blue-gray-50/50'>
        <TheSlidbar />
        <div className="xl:ml-72 xl:mr-3">
          <TheNavbar />
          <div className=" ">
            {children}
            {/* <TheFooter /> */}

          </div>
        </div>

      </main>
    </>
  );
};
