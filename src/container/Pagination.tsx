import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination: React.FC = () => {
    const [pageSize, setPageSize] = useState(10);

    const handlePageSizeChange = (e: any) => {
        setPageSize(Number(e.target.value));
    };

    return (
        <div className='flex justify-between'>
            <div className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                    <span className="sr-only">Previous</span>
                    <FaArrowLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    1
                </button>
                <button
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                    2
                </button>
                <button
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                    3
                </button>
                <button
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                    <span className="sr-only">Next</span>
                    <FaArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>

            <select value={pageSize} onChange={handlePageSizeChange} className='rounded border-black border-2'>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
            </select>
        </div>
    );
};

export default Pagination;
