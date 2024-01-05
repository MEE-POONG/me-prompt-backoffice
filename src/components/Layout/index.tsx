import React, { useState } from 'react';
import TheNavBar from './TheNavBar';
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
      {/* <TheNavBar onToggleShow={handleToggleShow} show={show} /> */}

        <TheSlidbar />
        {/* <div className='bg-white paper'>
          // {children}
          <TheFooter />
        </div>
        <button onClick={handleToggleShow} className="px-4 py-2 bg-blue-500 rounded">
          {show ? 'Hide Sidebar' : 'Show Sidebar'}
        </button> */}
      </main>
    </>
  );
};
