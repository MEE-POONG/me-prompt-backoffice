import React from 'react';

interface TheNavBarProps {
  onToggleShow: () => void;
  show: boolean;
}

const TheNavBar: React.FC<TheNavBarProps> = ({ onToggleShow, show }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My App</h1>
        <button onClick={onToggleShow} className="px-4 py-2 bg-blue-500 rounded">
          {show ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
      </div>
    </nav>
  );
};

export default TheNavBar;
