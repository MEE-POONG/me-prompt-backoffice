import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';

const MenuPath: React.FC = () => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment);

    const LinksPath = pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = href === router.asPath;
        return (
            <MenuItem placeholder="" key={segment} className={`${isLast ? 'hidden' : ''}`} >
                <Link href={href} className='flex items-center justify-center font-black	'>
                    <span>{segment}</span>
                </Link>
            </MenuItem>
        );
    });
    const lastSegmentLabel = pathSegments[pathSegments.length - 1] || 'Dashboard';

    return (
        <>
            <Menu>
                <MenuHandler>
                    <Button placeholder="">{lastSegmentLabel}</Button>
                </MenuHandler>
                {pathSegments.length > 0 && (
                    <MenuList placeholder="">
                        <MenuItem placeholder="" className=''>
                            <Link href="/" className='flex items-center justify-center font-black'>
                                <FaHome className="mr-2" /> Dashboard
                            </Link>
                        </MenuItem >
                        {LinksPath}
                    </MenuList>
                )}
            </Menu>
        </>
    );
};

export default MenuPath;
