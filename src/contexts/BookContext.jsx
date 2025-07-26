import { createContext, useContext, useState, useEffect } from "react";
import { displayCard } from "../components/CardFatch";


const BookContext = createContext();

// Create a custom hook for using this context
export const useBookContext = () => {
  return useContext(BookContext);
};

// Create the provider component
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await displayCard();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);


const getBookById = (id) => {
  // Convert the id parameter to a number since URL params are strings
  const numericId = parseInt(id, 10);
  // Look for bookId instead of id
  const book = books.find((book) => book.bookId === numericId);
  setSelectedBook(book);
  return book;
};



  // Values to be provided to consumers
  const value = {
    books,
    loading,
    selectedBook,
    getBookById,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};