import React from 'react';

function Card({ book, addToBookshelf, isAdded }) {
  return (
    <div className="p-4 max-w-sm w-full">
      <div className="flex rounded-lg h-full
      bg-white p-8 flex-col border-2 border-black">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-green-500 bg-green-600 text-white flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-black text-lg font-medium">Book Title:  {book.title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base text-black">
            Editions:  {book.edition_count}
          </p>
          {!isAdded ? (
            <button
              onClick={() => addToBookshelf(book)}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-green-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
              mt-7"
            >
              Add to Bookshelf
            </button>
          ) : (
            <span className="mt-3 text-black dark:text-white">Added to Bookshelf</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
