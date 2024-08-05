import React, { useState } from 'react';
import { Search, Flame } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample student data
const students = [
  { id: 1, name: 'Scarlett Johansson', dailyLogin: 3, email: 'scarlettjohansson@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
  { id: 2, name: 'Scarlett Johans', dailyLogin: 6, email: 'scarlettjohansson@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
  { id: 3, name: 'Chris Evans', dailyLogin: 5, email: 'chrisevans@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
  { id: 4, name: 'Robert Downey Jr.', dailyLogin: 4, email: 'robertdowneyjr@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
  { id: 5, name: 'Chris Hemsworth', dailyLogin: 7, email: 'chrishemsworth@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
  { id: 6, name: 'Chris Evans', dailyLogin: 5, email: 'chrisevans@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
];
const dataArray = Array.isArray(students) ? students : [];
const hasUsers = students.length > 0;
const UserListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState('list');
  const usersPerPage = 5;

  // Filtered students based on search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  // Calculate the current users to display
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredStudents.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredStudents.length / usersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="tw-flex tw-items-center tw-space-x-4 tw-mb-6">
        <div>
          <Select>
            <SelectTrigger className="tw-w-[77px] tw-h-[30px] tw-rounded-[6px] tw-text-black tw-border tw-border-black tw-bg-white">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='tw-w-[304px] tw-h-[30px] tw-rounded-[6px] tw-border tw-flex tw-items-center tw-relative'>
          <Search size={18} color="gray" className='tw-absolute tw-left-2 tw-pointer-events-none' />
          <Input
            type="text"
            placeholder="Search Students"
            className="tw-h-[30px] tw-w-full tw-pl-8 tw-text-yellow  tw-text-black tw-border tw-border-black tw-bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table Section */}
      <Card className="tw-mt-6 tw-w-[1150px] tw-h-[454px]">
  <Table>
    <TableHeader>
      <TableRow className='tw-bg-yellow-300 tw-border-b-0 tw-font-semibold'>
        <TableHead className="tw-border-b-0 tw-text-black   tw-text-semibolt tw-w-[5%]">S.No</TableHead>
        <TableHead className="tw-border-b-0 tw-text-black tw-w-[20%]">Student Name</TableHead>
        <TableHead className="tw-border-b-0 tw-text-black tw-w-[10%]">Daily Login</TableHead>
        <TableHead className="tw-border-b-0 tw-text-black tw-w-[25%]">Email Address</TableHead>
        <TableHead className="tw-border-b-0 tw-text-black tw-w-[20%]">Contact</TableHead>
        <TableHead className="tw-border-b-0 tw-text-black tw-w-[20%]">Badges Gained</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {currentUsers.map((student, index) => (
        <TableRow key={student.id} className="tw-border-t-0 ">
          <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[5%] tw-h-[70px]">
            {index + indexOfFirstUser + 1}
          </TableCell>
          <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[20%] tw-h-[80px]">{student.name}</TableCell>
          <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[10%]">
            <div className="tw-flex tw-items-center">
              <Flame className="tw-w-[15px] tw-h-[29px] tw-text-orange-500" />
              {student.dailyLogin}
              <span role="img" aria-label="clap" className="tw-ml-2">👏</span>
            </div>
          </TableCell>
          <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[25%]">{student.email}</TableCell>
          <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[20%]">{student.contact}</TableCell>
          <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[20%]">
            <div className="tw-flex tw-space-x-2">
              {student.badges.a === 1 && (
                <div className="tw-flex tw-items-center tw-bg-[#FFF2DA] tw-w-[63px] tw-h-[17px] tw-rounded-[6px] tw-justify-center tw-text-blue-900">
                  <img src="/public/1.png" alt="Badge A" className="tw-w-6 tw-h-5 tw-mr-1" />
                  <span className="tw-text-xs">01</span>
                </div>
              )}
              {student.badges.b === 1 && (
                <div className="tw-flex tw-items-center tw-bg-[#FFF2DA] tw-w-[63px] tw-h-[17px] tw-rounded-[6px] tw-justify-center tw-text-blue-900">
                  <img src="/public/2.png" alt="Badge B" className="tw-w-6 tw-h-5 tw-mr-1" />
                  <span className="tw-text-xs">01</span>
                </div>
              )}
              {student.badges.c === 1 && (
                <div className="tw-flex tw-items-center tw-bg-[#FFF2DA] tw-w-[63px] tw-h-[17px] tw-rounded-[6px] tw-justify-center tw-text-blue-900">
                  <img src="/public/3.png" alt="Badge C" className="tw-w-6 tw-h-5 tw-mr-1" />
                  <span className="tw-text-xs">01</span>
                </div>
              )}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Card>


      {/* Pagination Section */}
      <div className="tw-flex tw-justify-between tw-items-center tw-w-[1150px] tw-h-[45px] tw-p-[15px_5px_0_5px] ">
        <div className="tw-text-gray-700">
          <span className="tw-mr-4">Page</span>
          {currentPage}
        </div>
        <div className="tw-flex tw-items-center tw-space-x-2">
          <Pagination>
            <PaginationContent className="tw-flex tw-items-center tw-space-x-1">
              <PaginationItem>
                <PaginationPrevious
                  className="tw-px-3 tw-py-1"
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                />
              </PaginationItem>
              {(() => {
                const pageNumbers = [];
                if (totalPages <= 4) {
                  for (let i = 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                  }
                } else {
                  if (currentPage <= 2) {
                    pageNumbers.push(1, 2, "...", totalPages);
                  } else if (currentPage >= totalPages - 1) {
                    pageNumbers.push(1, "...", totalPages - 1, totalPages);
                  } else {
                    pageNumbers.push(1, "...", currentPage, "...", totalPages);
                  }
                }
                return pageNumbers;
              })().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "..." ? (
                    <span className="tw-px-3 tw-py-1">...</span>
                  ) : (
                    <PaginationLink
                      className={`tw-px-3 tw-py-1 ${
                        currentPage === page
                          ? "tw-bg-gray-200 tw-font-bold tw-text-black"
                          : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  className="tw-px-3 tw-py-1"
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default UserListPage;
