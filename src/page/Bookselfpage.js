import React, { useState, useEffect } from 'react';
import BookSelf from '../components/BookSelf';

export default function Bookselfpage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div>
      <BookSelf bookshelf={bookshelf} />
    </div>
  );
}
