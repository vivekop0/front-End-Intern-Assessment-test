import React from 'react';
import Card from './Card';

export default function BookSelf({ bookshelf }) {
  return (
    <div>
      <h2 className="text-center mt-10 font-semibold text-lg">My Bookshelf</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {bookshelf.map((book, index) => (
          <Card key={index} book={book} isAdded={true} />
        ))}
      </div>
    </div>
  );
}
