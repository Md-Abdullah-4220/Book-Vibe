import { useParams, useNavigate } from "react-router-dom";
import { useBookContext } from "../contexts/BookContext";
import { useEffect } from "react";


const BooksDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById, selectedBook, loading, addToReadBooks, addToWishlist } = useBookContext();

  useEffect(() => {
    const book = getBookById(id);
    if (!book && !loading) {
      navigate("/not-found");
    }
  }, [id, getBookById, navigate, loading]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="text-center p-10">Loading book details...</div>;
  }


  if (!selectedBook) {
    return <div className="text-center p-10">Book not found</div>;
  }

  const handleReadClick = () => {
    addToReadBooks(selectedBook);
    navigate("/listedBooks");
  };

  const handleWishlistClick = () => {
    addToWishlist(selectedBook);
    navigate("/listedBooks");
  };

  const { bookName, author, image, review, totalPages, publisher, yearOfPublishing, rating, category, tags } = selectedBook;

  return (
    <div className="bg-white p-6 max-w-5xl mx-auto rounded-lg shadow-md grid md:grid-cols-2 gap-10 items-start font-sans my-10">
      
      <div className="flex justify-center">
        <img
          src={image}
          alt={bookName}
          className="max-h-[400px] rounded"
        />
      </div>

      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="text-sm text-gray-700">
          By : <span className="font-medium">{author}</span>
        </p>
        <p className="text-gray-700">{category}</p>

        
        <div>
          <h4 className="font-semibold">Review :</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {review}
          </p>
        </div>

        
        <div className="flex gap-2 flex-wrap">
          {tags && tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
              #{tag}
            </span>
          ))}
        </div>

        
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium">Number of Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-medium">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-medium">Year of Publishing:</span> {yearOfPublishing}
          </p>
          <p>
            <span className="font-medium">Rating:</span> {rating}
          </p>
        </div>

        
        <div className="flex gap-4 mt-4">
          <button onClick={handleReadClick} className="px-6 py-2 border border-black rounded-md text-black hover:bg-gray-100">
            Read
          </button>
          <button onClick={handleWishlistClick} className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;