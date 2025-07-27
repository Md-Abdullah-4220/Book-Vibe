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
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);


  const handelBookid = (id) => {
    console.log(id);
    return id
  }


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

// Add book to read list
const addToReadBooks = (book) => {
  // Check if book is already in read list
  if (!readBooks.some(readBook => readBook.bookId === book.bookId)) {
    setReadBooks([...readBooks, book]);
  }
};

// Add book to wishlist
const addToWishlist = (book) => {
  // Check if book is already in wishlist
  if (!wishlistBooks.some(wishlistBook => wishlistBook.bookId === book.bookId)) {
    setWishlistBooks([...wishlistBooks, book]);
  }
};


  const value = {
    books,
    loading,
    selectedBook,
    readBooks,
    wishlistBooks,
    getBookById,
    handelBookid,
    addToReadBooks,
    addToWishlist,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};