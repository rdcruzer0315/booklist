'use client';

import { useState } from 'react';
import BookList from '../components/BookList';

const Home = () => {

  return (
    <div className="container py-4">
      <div className='flex items-center gap-4'>
        <img src='/assets/logo.png' />
        <h1 className="text-3xl font-bold">Book List</h1>
      </div>
      <BookList />
    </div>
  );
};

export default Home;
