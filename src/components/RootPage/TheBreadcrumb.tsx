import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const TheBreadcrumb: React.FC = () => {
    const router = useRouter();
    const isActiveHome = router.pathname === '/';
    const pathParts = router.asPath.split('/').filter(part => part);

    return (
        <div className='mx-auto'>
         sss
        </div>
    );
};

export default TheBreadcrumb;
