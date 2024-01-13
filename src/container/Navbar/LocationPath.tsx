import { Breadcrumbs, Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';

const LocationPath: React.FC = () => {


    return (
        <>
            <Menu>
                <MenuHandler>
                    <Button placeholder="">Menu</Button>
                </MenuHandler>
                <MenuList placeholder="">
                    <MenuItem placeholder="" >Menu Item 1</MenuItem >
                    <MenuItem placeholder="" >Menu Item 2</MenuItem >
                    <MenuItem placeholder="" >Menu Item 3</MenuItem >
                </MenuList>
            </Menu>
            <Breadcrumbs placeholder={""}>
                <Link href="/" className="opacity-60">
                    <FaHome />
                </Link>
                <a href="#" className="opacity-60">
                    <span>Components</span>
                </a>
                <a href="#">Breadcrumbs</a>
            </Breadcrumbs>
        </>
    );
};

export default LocationPath;
