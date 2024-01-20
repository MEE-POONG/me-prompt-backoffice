import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'
import { Button, ButtonGroup, Input } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })

const AgentListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [pageSize, setPageSize] = useState(10);
  // สมมุติว่าคุณมีข้อมูล partners ใน state หรือ context

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
          Partner
        </h1>
        <ButtonGroup placeholder={""} size="sm">
          <Button placeholder={""}>All</Button>
          <Button placeholder={""}>Senior</Button>
          <Button placeholder={""}>Master</Button>
          <Button placeholder={""}>Agent</Button>
        </ButtonGroup>
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            label="ค้นหายูส"
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

      <div>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
        </select>
        {/* แสดง Pagination ที่นี่ */}
      </div>
    </LayOut>
  )
}

export default AgentListPage;