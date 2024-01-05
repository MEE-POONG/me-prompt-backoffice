// Navbar.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import TheBreadcrumb from './TheBreadcrumb';

interface TheSEOProps {
    show: boolean;
    onToggleShow: () => void;
}

const TheSEO: React.FC<TheSEOProps> = ({ show, onToggleShow }) => {

    return (
        <Head>
            <title>Wellcome | MePrompt-BackOffice</title>
            <meta
                name="description"
                content="T ACTIVE"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default TheSEO;
