'use client';

import { useState } from "react";

interface Book {
  coverImage: string;
  title: string;
  author: string;
  genre: string[];
  description: string;
}

const BookDetails = ({ book }: { book: Book }) => {
  const [detail, setDetail] = useState(false);

  if (!book) return null;

  return (
    <>
      <div className="flex sm:flex-col sm:gap-3 justify-between bg-white rounded mb-1 p-2 cursor-pointer" onClick={() => setDetail(!detail)}>
        <div className="flex items-center gap-3">
          <img className="w-[60px] h-[80px]" src={book.coverImage} alt={`${book.title} cover`} />
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-[14px]">{book.title}</span>
            <span className="text-[12px]">{book.author}</span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          {book.genre.map((item, index) => (
            <div key={index} className="bg-[#E5E7EB] border border-1 rounded-full px-2 py-1 flex items-center">
              <span className="text-[11px]">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {detail && (
        <div className="bg-white p-4 mb-2">
          <div className="flex gap-8 sm:gap-2">
            <img className="w-1/12 lg:w-1/6 sm:w-1/4" src={book.coverImage} alt={`${book.title} cover`} />
            <div className="w-11/12 lg:w-5/6 sm:w-3/4 flex flex-col justify-end pb-2 border-1 border-b-2">
              <span className="font-bold text-[18px] sm:text-[14px]">{book.title}</span>
              <span className="mt-4 text-[12px]">{book.author}</span>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-[#6366F1] rounded-md text-white text-[14px] sm:text-[10px] px-3 py-2">Continue Reading &gt;&gt;</button>
                <div className="bg-[#F9FAFB] rounded-full p-2 cursor-pointer">
                  <img src="/assets/tabler_share.svg" alt="Share" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-1">
            <div className="flex flex-col">
              <span className='font-bold text-[20px]'>Library</span>
              <div className="flex sm:flex-col gap-12 sm:gap-2">
                <span className="w-3/4 sm:w-full text-[14px] pr-6 sm:pr-0">{book.description}</span>
                <div className="flex flex-col w-1/4 sm:w-full gap-3">
                  <span className='font-bold text-[16px]'>Author</span>
                  <span className="text-[13px]">{book.author}</span>
                  <span className='font-bold text-[16px]'>Language</span>
                  <span className="text-[13px]">English (US & UK)</span>
                  <span className='font-bold text-[16px]'>Book Info</span>
                  <span className="text-[13px]">Page Count: 284</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
