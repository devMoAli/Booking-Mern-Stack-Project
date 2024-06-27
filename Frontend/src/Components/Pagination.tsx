import React from "react";

export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

// const Pagination = ({ page, pages, onPageChange }: Props) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= pages; i++) {
//     pageNumbers.push(i);
//   }
  const Pagination = ({ page, pages, onPageChange }: Props) => {
    const pageNumbers = [...Array(pages).keys()].map(i => i + 1);
  
  return (
    <div className="flex justify-center">
      <ul className="flex ">
        {pageNumbers.map((number) => (
          <li key={number} className={`px-2 text-indigo-700 py-1 ${page === number ? "bg-gray-300 rounded" : ""}`}>
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;


