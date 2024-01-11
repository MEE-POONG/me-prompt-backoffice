import React, { useState } from 'react';
import TheNavbar from './TheNavbar';
import TheFooter from './TheFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayOut: React.FC<LayoutProps> = ({ children }) => {


  return (
    <>
      <main className='bg-blue-gray-50/50 pt-4 px-4 min-h-screen'>
        <div className="xl:ml-[16rem]">
          <TheNavbar />
          {children}
          {/* <TheFooter /> */}

        </div>

      </main>
    </>
  );
};
