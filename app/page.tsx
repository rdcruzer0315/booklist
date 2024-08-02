'use client';

import { useState } from 'react';
import BookList from '../components/BookList';

const Home = () => {

  return (
    <div className="container py-4">
      <div className='flex items-center gap-4'>
        <img src='/assets/logo.png' />
        <h1 className="text-[40px] font-bold text-[#4F46E5]">Book List</h1>
      </div>
      <BookList />
    </div>
  );
};

export default Home;
