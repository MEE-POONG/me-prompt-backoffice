import React, { useEffect, useState } from 'react';
import TheNavbar from './TheNavbar';
import TheFooter from './TheFooter';
import { FaBars } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayOut: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);



  

  return (
    <>
      <main className='bg-blue-gray-50/50 pt-4 px-4 min-h-screen'>
        <div className={`xl:ml-[${isSidebarOpen ? `16rem` : `0rem`}]`}>
          <TheNavbar />
          {children}
          {/* <TheFooter /> */}

        </div>

      </main>
    </>
  );
};
