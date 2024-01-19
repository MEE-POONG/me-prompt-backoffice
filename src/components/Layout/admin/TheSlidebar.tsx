import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import { Accordion, AccordionBody, AccordionHeader, Card, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react';
import { useAppContext } from '@/context';
import Link from 'next/link';
import { slidebarMenu } from '@/data/navData';
import { useRouter } from 'next/router';

const TheSlidebar: React.FC = () => {
    const { toggleSidebar, setToggleSidebar } = useAppContext();
    const [open, setOpen] = useState(0);
    const router = useRouter();

    const checkPathLink = router.pathname;

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const switchSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    };

    useEffect(() => {
        const currentPath = router.pathname;

        const matchedIndex = slidebarMenu.findIndex((item, index) =>
            item.head && item.array?.some(subItem => subItem.href === currentPath)
        );

        if (matchedIndex !== -1) {
            // Add 1 because your logic uses index + 1 for accordion open state
            setOpen(matchedIndex + 1);
        }
    }, [router.pathname]);

    return (
        <>
            <button onClick={switchSidebar} className={`rounded border-2 p-1 ${toggleSidebar ? `border-indigo-600 bg-indigo-100` : `border-gray-50`}`}>
                <FaBars className={`${toggleSidebar ? `text-indigo-600` : ``}`} />
            </button>
            <Card className={`w-full max-w-[15rem] fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] rounded-xl transition-transform duration-700 border border-blue-gray-100 ${toggleSidebar ? 'translate-x-0' : '-translate-x-80'}`} placeholder="">
                <div className="mb-2 p-4 flex justify-between">
                    <Typography variant="h5" color="blue-gray" placeholder="">
                        Manager
                    </Typography>
                    <button
                        onClick={switchSidebar}
                        className={`border-white rounded border-2 p-1 hover:border-indigo-600 hover:bg-indigo-100 xl:hidden`}>
                        <FaTimes className={`hover:text-indigo-600`} />
                    </button>
                </div>
                {slidebarMenu.map((item, index) => (
                    <List placeholder="54" key={index}>
                        {item.head && (
                            <Accordion placeholder=""
                                open={open === index + 1}
                                icon={
                                    <FaAngleDown
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform  ${open === index + 1 ? "rotate-180" : ""}`}
                                    />
                                }
                            >
                                <ListItem className={`p-0 border-2 border-white hover:border-indigo-600 ${open === index + 1 ? 'border-indigo-600' : ''}`} selected={open === index} placeholder="">
                                    <AccordionHeader onClick={() => handleOpen(index + 1)} className={`border-0 p-3 hover:text-indigo-600 ${open === index + 1 ? 'text-indigo-600' : ''}`} placeholder="">
                                        <ListItemPrefix placeholder="">
                                            {item?.icon}
                                        </ListItemPrefix>
                                        <Typography className="mr-auto font-normal" placeholder="">
                                            {item?.nameTH}
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>
                                {item.array && (
                                    <AccordionBody className="py-1 rounded border-2 bg-indigo-100/25 mt-2" placeholder="">
                                        {item.array.map((subItem, subIndex) => (
                                            <Link key={subIndex} href={subItem?.href} >
                                                <ListItem placeholder="" className={`hover:text-indigo-600 active:text-indigo-600 focus:text-indigo-600 ${checkPathLink === subItem?.href ? 'text-indigo-600' : ''}`}>
                                                    <ListItemPrefix placeholder="" >
                                                        {subItem?.icon}
                                                    </ListItemPrefix>
                                                    {subItem?.nameTH}
                                                </ListItem>
                                            </Link>
                                        ))}
                                    </AccordionBody>
                                )}
                            </Accordion>
                        )}
                        {!item.head && (
                            <Link href={item.href}>
                                <ListItem placeholder={item.nameEN} className={`hover:text-indigo-600 `}>
                                    <ListItemPrefix placeholder={`icon-` + item?.nameEN}>
                                        {item?.icon}
                                    </ListItemPrefix>
                                    {item.nameEN}
                                </ListItem>
                            </Link>
                        )}
                    </List>
                ))}
                {/* <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                <FaCube  className="mb-4 h-12 w-12" />
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
            </Alert> */}
            </Card>
        </>
    );
};

export default TheSlidebar;