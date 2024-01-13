import React, { useEffect } from 'react';
import TheNavbar from './TheNavbar';
import { useAppContext } from '@/context';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayOut: React.FC<LayoutProps> = ({ children }) => {
  const { toggleSidebar, setToggleSidebar } = useAppContext();
  useEffect(() => {
    const handleResize = () => {
      console.log("window.innerWidth : ", window.innerWidth);
      console.log("check : ", innerWidth < 1140);

      if (window.innerWidth < 1140) {
        setToggleSidebar(false);
      } else {
        setToggleSidebar(true);
      }
    };
    // Set the sidebar state based on the initial window size
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    console.log("toggleSssidebar : ", toggleSidebar);

  }, [toggleSidebar]);


  return (
    <>
      <main className='bg-blue-gray-50/50 pt-4 px-4 min-h-screen'>
        <div className={`transition-transform duration-700 ${toggleSidebar ? 'xl:ml-64' : 'xl:ml-0'}`}>
          <TheNavbar />
          {children}
          {/* <TheFooter /> */}


        </div>

      </main>
    </>
  );
};
