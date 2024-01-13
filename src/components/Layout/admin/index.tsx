import React, { useEffect } from 'react';
import { useAppContext } from '@/context';
import { Card } from '@material-tailwind/react';
import TheNavbar from './TheNavbar';
import TheFooter from './TheFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayOut: React.FC<LayoutProps> = ({ children }) => {
  const { toggleSidebar, setToggleSidebar } = useAppContext();
  useEffect(() => {
    const handleResize = () => {

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


  return (
    <>
      <main className='flex flex-col justify-between bg-blue-gray-50/50 pt-4 px-4 min-h-screen'>
        <div className={`transition-transform duration-700 ${toggleSidebar ? 'xl:ml-64' : 'xl:ml-0'}`}>
          <TheNavbar />
          <Card placeholder={""} className='p-4 border'>
            {children}
          </Card>
        </div>
        <div className={`transition-transform duration-700 ${toggleSidebar ? 'xl:ml-64' : 'xl:ml-0'}`}>
          <TheFooter />
        </div>
      </main>
    </>
  );
};
