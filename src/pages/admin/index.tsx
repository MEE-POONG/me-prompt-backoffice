import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LayOut } from '@/components/Layout/admin'
import { Button, ButtonGroup, Input } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';
import Pagination from '@/container/Pagination';


const inter = Inter({ subsets: ['latin'] })

const AdminPage: React.FC = () => {
  const [searchTeam, setSearchTeam] = useState('');
  const [category, setCategory] = useState('all');
  const [pageSize, setPageSize] = useState(10);
  const handleSearchChange = (e: any) => {
    setSearchTeam(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handlePageSizeChange = (e: any) => {
    setPageSize(Number(e.target.value));
  };
  return (
    <LayOut>
      <div className='admin-page'>
        <div className="header flex flex-wrap items-center">
          <h1 className="flex-auto text-lg items-center font-semibold text-slate-900">
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
        <div className='body'>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='footer'>
          <Pagination />
        </div>
      </div>
    </LayOut>
  )
}

export default AdminPage;