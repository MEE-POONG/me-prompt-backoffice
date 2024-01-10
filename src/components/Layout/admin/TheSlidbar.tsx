import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleDown, FaBars, FaChartBar, FaTimes } from 'react-icons/fa';
import { Accordion, AccordionBody, AccordionHeader, Alert, Card, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react';


export const TheSlidbar: React.FC = () => {
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Card className=" w-full max-w-[15rem] shadow-blue-gray-900/5 bg-white shadow-sm -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100" placeholder="">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray" placeholder="">
                    Sidebar
                </Typography>
            </div>
            <List placeholder="">
                <Accordion placeholder=""
                    open={open === 1}
                    icon={
                        <FaAngleDown
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1} placeholder="">
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3" placeholder="">
                            <ListItemPrefix placeholder="">
                                <FaChartBar className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal" placeholder="">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1" placeholder="">
                        <List className="p-0" placeholder="">
                            <ListItem placeholder="">
                                <ListItemPrefix placeholder="">
                                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                                    a
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem placeholder="">
                                <ListItemPrefix placeholder="">
                                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                                    3a
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem placeholder="">
                                <ListItemPrefix placeholder="">
                                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                                    a
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion placeholder=""
                    open={open === 2}
                    icon={
                        <FaAngleDown
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2} placeholder="">
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3" placeholder="">
                            <ListItemPrefix placeholder="">
                                {/* <ShoppingBagIcon className="h-5 w-5" /> */}
                                a
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal" placeholder="">
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0" placeholder="">
                            <ListItem placeholder="">
                                <ListItemPrefix placeholder="">
                                    a
                                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                            <ListItem placeholder="">
                                <ListItemPrefix placeholder="">
                                    a
                                    {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                                </ListItemPrefix>
                                Products
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem placeholder="">
                    <ListItemPrefix placeholder="">
                        a
                        {/* <InboxIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix placeholder="">
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem placeholder="">
                    <ListItemPrefix placeholder="">s
                        {/* <UserCircleIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem placeholder="">
                    <ListItemPrefix placeholder="">s
                        {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem placeholder="">
                    <ListItemPrefix placeholder="">s
                        {/* <PowerIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
            <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                a
                {/* <CubeTransparentIcon className="mb-4 h-12 w-12" /> */}
                <Typography variant="h6" className="mb-1" placeholder="">
                    Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80" placeholder="">
                    Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                    and premium.
                </Typography>
                <div className="mt-4 flex gap-3">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium opacity-80"
                        onClick={() => setOpenAlert(false)}
                        placeholder=""
                    >
                        Dismiss
                    </Typography>
                    <Typography as="a" href="#" variant="small" className="font-medium" placeholder="">
                        Upgrade Now
                    </Typography>
                </div>
            </Alert>
        </Card>
    );
};
