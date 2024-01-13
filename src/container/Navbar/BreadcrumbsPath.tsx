import { Breadcrumbs } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';

const BreadcrumbsPath: React.FC = () => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment);

    const LinksPath = pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = href === router.asPath;
        return (
            <Link key={segment} href={href} className={`${isLast ? '' : 'opacity-60'}`}>
                <span>{segment}</span>
            </Link>
        );
    });
    return (
        <>
            <Breadcrumbs placeholder={""}>
                <Link href="/" className="opacity-60">
                    <FaHome />
                </Link>
                {LinksPath}
            </Breadcrumbs>
        </>
    );
};

export default BreadcrumbsPath;
