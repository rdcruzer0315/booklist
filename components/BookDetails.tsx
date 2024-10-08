'use client';

import { useState } from "react";
import { Book } from "@/types/BookTypes";

const BookDetails = ({ book }: { book: Book }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  if (!book) return null;

  const toggleDetails = () => setIsDetailVisible(prev => !prev);

  return (
    <>
      <div 
        className="flex sm:flex-col sm:gap-3 justify-between bg-white rounded mb-1 p-2 cursor-pointer" 
        onClick={toggleDetails}
      >
        <div className="flex items-center gap-3">
          <img 
            className="w-[60px] h-[80px]" 
            src={book.coverImage} 
            alt={`${book.title} cover`} 
          />
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-[20px]">{book.title}</span>
            <span className="text-[14px] text-[#9CA3AF]">{book.author}</span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          {book.genre.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#E5E7EB] border border-1 rounded-full px-2 py-1 flex items-center"
            >
              <span className="text-[11px]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {isDetailVisible && (
        <div className="bg-white p-4 mb-2">
          <div className="flex sm:flex-col gap-8 sm:gap-2 sm:items-center">
            <img 
              className="w-1/6 lg:w-1/6 sm:w-1/2" 
              src={book.coverImage} 
              alt={`${book.title} cover`} 
            />
            <div className="w-5/6 lg:w-5/6 sm:w-full flex flex-col justify-end pb-2 border-b-2">
              <span className="font-bold text-[40px] leading-tight">{book.title}</span>
              <span className="mt-2 text-[14px] text-[#9CA3AF]">{book.author}</span>
              <p className="mt-[32px] text-[18px]">{book.short_description}</p>
              <div className="flex justify-between items-center mt-3">
                <button className="bg-[#6366F1] rounded-md text-white text-[16px] px-3 py-2">
                  Continue Reading &gt;&gt;
                </button>
                <div className="bg-[#F9FAFB] rounded-full p-2 cursor-pointer">
                  <img src="/assets/tabler_share.svg" alt="Share" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex sm:flex-col gap-[300px] lg:gap-2 sm:gap-2">
              <div className="flex flex-col w-4/5 sm:w-full">
                <span className='font-bold text-[28px]'>Description</span>
                <p className="text-[18px]">{book.description}</p>
              </div>
              <div className="flex flex-col w-1/5 sm:w-full gap-3">
                <span className='font-bold text-[28px]'>Author</span>
                <p className="text-[18px]">{book.author}</p>
                <span className='font-bold text-[28px]'>Language</span>
                <p className="text-[18px]">English (US & UK)</p>
                <span className='font-bold text-[28px]'>Book Info</span>
                <p className="text-[18px]">Page Count: 284</p>
                <p className="text-[18px]">ISBN: 987 3 12838 455 0</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
