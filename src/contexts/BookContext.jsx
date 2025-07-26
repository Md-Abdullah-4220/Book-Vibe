import { createContext, useContext, useState, useEffect } from "react";
import { displayCard } from "../components/CardFatch";


const BookContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useBookContext = () => {
  return useContext(BookContext);
};


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

  const numericId = parseInt(id, 10);

  const book = books.find((book) => book.bookId === numericId);
  setSelectedBook(book);
  return book;
};




  const value = {
    books,
    loading,
    selectedBook,
    getBookById,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};