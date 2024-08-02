'use client';

import { useState, useRef } from 'react';
import booksData from '../public/books.json';
import BookDetails from './BookDetails';

const BookList = () => {
  const [genreFilter, setGenreFilter] = useState('');

  const filteredBooks = genreFilter
    ? booksData.filter((book) =>
        book.genre.some((genre) =>
          genre.toLowerCase() === genreFilter.toLowerCase()
      )
    )
    : booksData;
    
  const recommendBooks = booksData.filter((book) => book.recommend === "yes");
  
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className='mt-4'>
      <select onChange={(e) => setGenreFilter(e.target.value)} className="p-2 border rounded text-[14px] sm:w-full">
        <option value="">All Genres</option>
        <option value="History">History</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Documentary">Documentary</option>
        {/* Add more genres as needed */}
      </select>
      
      <div className='mt-2'>
        <span className='font-bold text-[20px]'>Recommended</span>
        <div className="carousel-container relative">
          <button
            onClick={scrollLeft}
            className="carousel-button left"
          >
            &#9664;
          </button>
          <div className="flex gap-4 overflow-x-auto no-scrollbar" ref={carouselRef}>
            {recommendBooks.map((book, index) => (
              <div
                key={index}
                className="p-2 border rounded shadow flex flex-col gap-1 bg-white shrink-0 items-center w-[200px] h-[340px]"
              >
                <div className='flex flex-col items-center'>
                  <img className='w-[160px] h-[240px] px-auto' src={book.coverImage} />
                  <div className='flex flex-col w-full gap-2 mt-1'>
                    <span className="font-semibold text-[14px]">{book.title}</span>
                    <span className="text-[12px]">{book.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="carousel-button right"
          >
            &#9654;
          </button>
        </div>
      </div>

      <div className="mt-2">
        <span className='font-bold text-[20px]'>Library</span>
        <div className='flex flex-col mt-2'>
          {filteredBooks.map((book, index) => (
            <BookDetails key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
