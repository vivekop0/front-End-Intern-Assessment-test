import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/Homepage';
import BookSelfPage from './page/Bookselfpage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/bookshelf" element={<BookSelfPage />} />
      </Routes>
    </Router>
  );
}

export default App;
