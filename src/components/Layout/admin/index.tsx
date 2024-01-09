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
      <main >
        <TheSlidbar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <TheNavbar />
          <div className="pt-20 bg-amber-500">
            {children}
            {/* <TheFooter /> */}

          </div>
        </div>

      </main>
    </>
  );
};
