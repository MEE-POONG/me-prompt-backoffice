import { FaChartBar, FaCommentAlt, FaHotel, FaPowerOff, FaRegBell, FaRobot, FaUserSecret, FaUserShield, FaUsersCog } from "react-icons/fa";

export const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
export const ManagerMenu = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href: '/team', current: false },
    { name: 'Projects', href: '/project', current: false },
    { name: 'Calendar', href: '/calendar', current: false },
    { name: 'Reports', href: '/report', current: false },
];
export const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];
export const slidebarMenu = [
    {
        nameTH: 'หน้าหลัก', nameEN: 'main page', href: '/', icon: <FaHotel className="h-5 w-5" />, head: true, array: [
            { nameTH: 'dashboard', nameEN: 'dashboard', href: '/', icon: <FaChartBar className="h-5 w-5" />, },
            { nameTH: 'แจ้งเตือน', nameEN: 'notifications', href: '/notifications', icon: <FaRegBell className="h-5 w-5" />, },
        ]
    },
    {
        nameTH: 'จัดการพันธมิตร', nameEN: 'agent manager', href: '/', head: true, icon: <FaUsersCog className="h-5 w-5" />, array: [
            { nameTH: 'พันธมิตร', nameEN: 'Partner', href: '/partner', icon: <FaUserSecret className="h-5 w-5" />, head: false },
            { nameTH: 'คิวงานบอท', nameEN: 'Bot work', href: '/botwork', icon: <FaRobot className="h-5 w-5" />, head: false },
        ]
    },
    { nameTH: 'แอดมิน', nameEN: 'Admin', href: '/admin', head: false, icon: <FaUserShield className="h-5 w-5" /> },

];
