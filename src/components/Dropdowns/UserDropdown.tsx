import React, { useState, RefObject, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { FaAngleDown } from 'react-icons/fa';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const UserDropdown: React.FC = () => {


    return (
        <>
            {/* ... Rest of the component ... */}
            <Menu >
                <MenuHandler>
                    <Button placeholder="" className="w-12 h-12 text-sm bg-blueGray-200 inline-flex items-center justify-center rounded-full relative drop-shadow-xl shadow-lg shadow-cyan-500/50">
                        <img
                            alt="..."
                            className="w-full h-full object-cover rounded-full align-middle border-none shadow-lg"
                            src={`https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/4500f404-dbac-40f3-6696-ae768a38e800/500`}
                        />
                        <span className='bg-white text-black rounded-full absolute bottom-0 right-0 '>
                            <FaAngleDown />
                        </span>
                    </Button>
                </MenuHandler>
                <MenuList placeholder="">
                    <MenuItem placeholder="">Menu Item 1</MenuItem>
                    <MenuItem placeholder="">Menu Item 2</MenuItem>
                </MenuList>
                {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItem className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Account settings
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Support
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        License
                                    </a>
                                )}
                            </Menu.Item>
                            <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                            )}
                                        >
                                            Sign out
                                        </button>
                                    )}
                                </Menu.Item>
                            </form>
                        </div>
                    </MenuItem>
                </Transition> */}
            </Menu>
        </>
    );
};

export default UserDropdown;
