import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import axios from 'axios';

const RecentlyBook = () => {
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => { 
      try {
        const response = await axios.get("http://localhost:3000/get-recent-books");
        console.log(response.data);
        setRecentBooks(response.data); // Save the data in state
      } catch (error) {
        console.error("Error fetching recent books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Recently Booked</h2>
      <ul>
        {recentBooks.map((book, index) => (
          <li key={index}>{book.title || JSON.stringify(book)}</li>
        ))}
      </ul>
      <BookCard/>
    </div>
  );
};

export default RecentlyBook;
