import { MapPin, FileText, User2 } from "lucide-react"; 
import { useBookContext } from "../contexts/BookContext";

const WhishlistBooks = () => {
  const { wishlistBooks } = useBookContext();

  if (wishlistBooks.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Wishlist
        </h2>
        <p className="text-gray-600">
          You haven't added any books to your wishlist yet.
        </p>
      </div>
    );
  }

  return (
    <div className=" ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Your Wishlist
      </h2>

      <div className="space-y-6">
        {wishlistBooks.map((book) => (
          <div
            key={book.bookId}
            className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-2xl p-6 gap-6 border border-gray-200"
          >
            {/* Book Image */}
            <div className="w-[140px] h-[200px] flex-shrink-0">
              <img
                src={book.image}
                alt={book.bookName}
                className="w-full h-full object-cover rounded-md shadow-sm"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-bold text-gray-800">
                {book.bookName}
              </h2>
              <p className="text-sm text-gray-600">By : {book.author}</p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {book.tags &&
                  book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Year of Publishing: {book.yearOfPublishing}
                </div>
                <div className="flex items-center gap-1">
                  <User2 className="w-4 h-4" />
                  Publisher: {book.publisher}
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Page {book.totalPages}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhishlistBooks;