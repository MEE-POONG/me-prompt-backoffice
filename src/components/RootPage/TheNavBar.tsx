// Navbar.tsx
import React from 'react';
import Link from 'next/link';
import TheBreadcrumb from './TheBreadcrumb';

interface TheNavBarProps {
  show: boolean;
  onToggleShow: () => void;
}

const TheNavBar: React.FC<TheNavBarProps> = ({ show, onToggleShow }) => {

  return (
    <div className="navbar-expand navbar-head sticky-top px-4 py-0">
      ss
    </div>
  );
};

export default TheNavBar;
