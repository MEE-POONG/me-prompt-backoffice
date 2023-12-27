import React, { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TheOffcanvasProps {
    show: boolean;
    onToggleShow: () => void;
}

export const TheOffcanvas: React.FC<TheOffcanvasProps> = ({ show, onToggleShow }) => {
    const handleClose = () => onToggleShow();
    const { asPath } = useRouter();
    const [checkClickPath, setCheckClickPath] = useState<string>('/');
    useEffect(() => {
        setCheckClickPath(asPath);
    }, [asPath])
    const handlePath = (valPath: string): void => { checkClickPath === valPath ? setCheckClickPath('') : setCheckClickPath(valPath) };
 
    return (
        <>
          a

        </>
    );
};

