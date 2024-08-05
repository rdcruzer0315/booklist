'use client';

import { useState, useRef } from 'react';
import booksData from '../public/books.json';
import BookDetails from './BookDetails';
import { Book } from '@/types/BookTypes';

const BookList = () => {
  const [genreFilter, setGenreFilter] = useState<string>('');

  // Filter books based on selected genre
  const filteredBooks = genreFilter
    ? booksData.filter((book: Book) =>
        book.genre.some((genre) =>
          genre.toLowerCase() === genreFilter.toLowerCase()
      )
    )
    : booksData;
    
  // Filter recommended books
  const recommendBooks = booksData.filter((book: Book) => book.recommend === "yes");
  
  // Carousel ref
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Scroll functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='mt-4'>
      <select 
        onChange={(e) => setGenreFilter(e.target.value)} 
        className="p-2 border rounded text-[14px] sm:w-full"
      >
        <option value="">All Genres</option>
        <option value="History">History</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Documentary">Documentary</option>
        {/* Add more genres as needed */}
      </select>
      
      <div className='mt-4'>
        <h2 className='font-bold text-[28px]'>Recommended</h2>
        <div className="carousel-container relative mt-4">
          <button 
            onClick={scrollLeft} 
            className="carousel-button absolute left-0 top-1/2 transform -translate-y-1/2"
          >
            &#9664;
          </button>
          <div className="flex gap-4 overflow-x-auto no-scrollbar" ref={carouselRef}>
            {recommendBooks.map((book: Book, index: number) => (
              <div
                key={index}
                className="p-2 border rounded shadow flex flex-col gap-1 bg-white shrink-0 items-center w-[220px] h-[380px]"
              >
                <img 
                  className='w-[200px] h-[260px]' 
                  src={book.coverImage} 
                  alt={book.title} 
                />
                <div className='flex flex-col w-full gap-2 mt-1'>
                  <span className="font-semibold text-[20px] leading-snug">{book.title}</span>
                  <span className="text-[14px] text-[#9CA3AF]">{book.author}</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={scrollRight} 
            className="carousel-button absolute right-0 top-1/2 transform -translate-y-1/2"
          >
            &#9654;
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h2 className='font-bold text-[28px]'>Library</h2>
        <div className='flex flex-col mt-4'>
          {filteredBooks.map((book: Book, index: number) => (
            <BookDetails key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
