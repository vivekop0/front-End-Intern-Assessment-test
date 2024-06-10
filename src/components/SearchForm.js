import React, { useState, useEffect } from 'react';

function SearchForm({ setSearchResults }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query.length === 0) {
        setSearchResults([]);
        return;
      }

      try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`;
        console.log(`Fetching: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setSearchResults(data.docs);
        setError(null);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching the data', error);
      }
    };

    fetchBooks();
  }, [query, setSearchResults]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="https://img.icons8.com/doodle/48/book.png"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for books..."
          value={query}
          onChange={handleInputChange}
          required
        />
      </div>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </div>
  );
}

export default SearchForm;
