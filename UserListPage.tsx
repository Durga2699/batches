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

const UserListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentView, setCurrentView] = useState('list');
  const [showExportOptions, setShowExportOptions] = useState(false);
   const itemsPerPage = 5;
  

  // Sample student data
  const students = [
    { id: 1, name: 'Scarlett Johansson', dailyLogin: 3, email: 'scarlettjohansson@gmail.com', contact: '+919562358844', badges: { a: 1, b: 1, c: 1 } },
    { id: 2, name: 'Chris Hemsworth', dailyLogin: 5, email: 'chrishemsworth@gmail.com', contact: '+919562358845', badges: { a: 1, b: 1, c: 1 } },
    { id: 3, name: 'Robert Downey Jr.', dailyLogin: 4, email: 'robertdowneyjr@gmail.com', contact: '+919562358846', badges: { a: 1, b: 1, c: 1 } },
    { id: 4, name: 'Natalie Portman', dailyLogin: 2, email: 'natalieportman@gmail.com', contact: '+919562358847', badges: { a: 1, b: 1, c: 1 } },
    { id: 5, name: 'Tom Hiddleston', dailyLogin: 3, email: 'tomhiddleston@gmail.com', contact: '+919562358848', badges: { a: 1, b: 1, c: 1 } },
    { id: 6, name: 'Mark Ruffalo', dailyLogin: 6, email: 'markruffalo@gmail.com', contact: '+919562358849', badges: { a: 1, b: 1, c: 1 } },
    { id: 7, name: 'Jeremy Renner', dailyLogin: 1, email: 'jeremyrenner@gmail.com', contact: '+919562358850', badges: { a: 1, b: 1, c: 1 } },
    { id: 8, name: 'Paul Rudd', dailyLogin: 7, email: 'paulrudd@gmail.com', contact: '+919562358851', badges: { a: 1, b: 1, c: 1 } },
    { id: 9, name: 'Benedict Cumberbatch', dailyLogin: 8, email: 'benedictcumberbatch@gmail.com', contact: '+919562358852', badges: { a: 1, b: 1, c: 1 } },
    { id: 10, name: 'Elizabeth Olsen', dailyLogin: 3, email: 'elizabetholsen@gmail.com', contact: '+919562358853', badges: { a: 1, b: 1, c: 1 } },
    { id: 11, name: 'Tom Holland', dailyLogin: 2, email: 'tomholland@gmail.com', contact: '+919562358854', badges: { a: 1, b: 1, c: 1 } },
    { id: 12, name: 'Zendaya', dailyLogin: 4, email: 'zendaya@gmail.com', contact: '+919562358855', badges: { a: 1, b: 1, c: 1 } },
    { id: 13, name: 'Chadwick Boseman', dailyLogin: 5, email: 'chadwickboseman@gmail.com', contact: '+919562358856', badges: { a: 1, b: 1, c: 1 } },
    { id: 14, name: 'Michael B. Jordan', dailyLogin: 3, email: 'michaelbjordan@gmail.com', contact: '+919562358857', badges: { a: 1, b: 1, c: 1 } },
    { id: 15, name: 'Danai Gurira', dailyLogin: 2, email: 'danaigurira@gmail.com', contact: '+919562358858', badges: { a: 1, b: 1, c: 1 } },
    { id: 16, name: 'Letitia Wright', dailyLogin: 6, email: 'letitiawright@gmail.com', contact: '+919562358859', badges: { a: 1, b: 1, c: 1 } },
    { id: 17, name: 'Lupita Nyong\'o', dailyLogin: 4, email: 'lupitanyongo@gmail.com', contact: '+919562358860', badges: { a: 1, b: 1, c: 1 } },
    { id: 18, name: 'Tom Hardy', dailyLogin: 3, email: 'tomhardy@gmail.com', contact: '+919562358861', badges: { a: 1, b: 1, c: 1 } },
    { id: 19, name: 'Javier Bardem', dailyLogin: 7, email: 'javierbardem@gmail.com', contact: '+919562358862', badges: { a: 1, b: 1, c: 1 } },
    { id: 20, name: 'Charlize Theron', dailyLogin: 5, email: 'charlizetheron@gmail.com', contact: '+919562358863', badges: { a: 1, b: 1, c: 1 } },
  ];
  

  // Filtered students based on search query
  
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const PaginationEllipsis = () => (
    <span className="tw-px-3 tw-py-1">...</span>
  );

  const paginatedData = students.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const renderPageNumbers = () => {
  const pageNumbers = [];

  if (totalPages <= 5) {
    // If there are 5 or fewer pages, show all
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" isActive={currentPage === i} onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    // Handle cases with more than 5 pages
    if (currentPage <= 3) {
      // Show initial pages
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={currentPage === i} onClick={() => handlePageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      pageNumbers.push(<PaginationEllipsis key="ellipsis1" />);
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" isActive={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    } else if (currentPage >= totalPages - 2) {
      // Show last pages
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" isActive={currentPage === 1} onClick={() => handlePageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      pageNumbers.push(<PaginationEllipsis key="ellipsis2" />);
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={currentPage === i} onClick={() => handlePageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Show middle pages
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" isActive={currentPage === 1} onClick={() => handlePageChange(1)}>
            ....
          </PaginationLink>
        </PaginationItem>
      );
      pageNumbers.push(<PaginationEllipsis key="ellipsis3" />);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={currentPage === i} onClick={() => handlePageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      pageNumbers.push(<PaginationEllipsis key="ellipsis4" />);
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" isActive={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }

  return pageNumbers;
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
            <TableRow className='tw-bg-yellow-300 tw-border-b-0 tw-font-semibold '>
              <TableHead className="tw-border-b-0 tw-text-black tw-text-semibold tw-w-[7%]">S.No</TableHead>
              <TableHead className="tw-border-b-0 tw-text-black tw-text-semibold tw-w-[20%]">Student Name</TableHead>
              <TableHead className="tw-border-b-0 tw-text-black tw-text-semibold tw-w-[20%]">Daily Login</TableHead>
              <TableHead className="tw-border-b-0 tw-text-black  tw-text-semibold tw-w-[31%]">Email Address</TableHead>
              <TableHead className="tw-border-b-0 tw-text-black tw-w-[20%]">Contact</TableHead>
              <TableHead className="tw-border-b-0 tw-text-black tw-w-[20%]">Badges Gained</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((student, index) => (
              <TableRow key={student.id} className="tw-border-t-0">
                <TableCell className="py-3 px-4 tw-border-b-0 tw-w-[5%] tw-h-[70px]">
                  {index + 1 + (currentPage - 1) * currentPage}
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
     
      <div className="tw-flex tw-justify-between tw-items-center tw-w-[1150px] tw-h-[45px] tw-top-[409px] tw-left-[2px] tw-p-[15px_5px_0_5px] tw-gap-[711px] tw-opacity-100">
        <div className="tw-text-gray-700 tw-w-[61px] tw-h-[30px] tw-gap-[25px]">
          <span className="tw-mr-4">Page</span>
          {currentPage}
        </div>
        <div className="tw-flex tw-items-center tw-space-x-2">
          <Pagination className="tw-flex tw-items-center tw-space-x-2">
            <PaginationContent className="tw-flex tw-items-center tw-space-x-1">
              <PaginationItem>
                <PaginationPrevious
                  className="tw-px-3 tw-py-1"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>
              {(() => {
                const pageNumbers = [];
                if (totalPages <= 2) {
                  for (let i = 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                  }
                } else {
                  if (currentPage <= 2) {
                    pageNumbers.push(1, 2, "...", totalPages);
                  } else if (currentPage >= totalPages - 1) {
                    pageNumbers.push(1, totalPages - 1, totalPages);
                  } else {
                    pageNumbers.push(1, currentPage, "...", totalPages);
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
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  className="tw-px-3 tw-py-1"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
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
