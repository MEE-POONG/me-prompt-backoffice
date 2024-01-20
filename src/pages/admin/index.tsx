import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'
import { Button, ButtonGroup, Input } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';
import Pagination from '@/container/Pagination';


const inter = Inter({ subsets: ['latin'] })

const AdminPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [pageSize, setPageSize] = useState(10);
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handlePageSizeChange = (e: any) => {
    setPageSize(Number(e.target.value));
  };
  return (
    <LayOut>
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-lg font-semibold text-slate-900">
          Admin
        </h1>
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            label="ค้นหาชื่อเล่น"
            className="pr-20"
            crossOrigin={undefined as any}
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            placeholder={""}
            size="sm"
            className="!absolute right-1 top-1 rounded"
          >
            ค้นหา
          </Button>
        </div>
      </div>
      <table>
        {/* สร้างตารางข้อมูลที่นี่ */}
      </table>
      <Pagination />
    </LayOut>
  )
}

export default AdminPage;