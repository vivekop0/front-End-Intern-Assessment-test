import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    setBookshelf([...bookshelf, book]);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center mb-4 font-semibold text-lg"> Search by book name:</h1>
      <div className="relative">
        <SearchForm setSearchResults={setSearchResults} />
        <div className="mt-4 sm:mt-1 sm:absolute sm:top-4 sm:right-8">
          <Link
            className="px-3 md:px-6 py-2 min-w-[120px] text-center text-white bg-green-600 border border-green-600 rounded active:text-green-400 hover:bg-transparent hover:text-green-700 focus:outline-none focus:ring"
            to="/bookshelf"
          >
            My Bookshelf
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {searchResults.map((book, index) => (
          <Card
            key={index}
            book={book}
            addToBookshelf={addToBookshelf}
            isAdded={bookshelf.some(b => b.key === book.key)}
          />
        ))}
      </div>
    </div>
  );
}
