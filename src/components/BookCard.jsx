import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, tags, bookName, author, rating, category, bookId} = book;

  return (
    <div className="w-full h-full">
      <Link to={`/books/${bookId}`}>
        <div className="flex flex-col justify-between h-full rounded-2xl border border-gray-300 p-4 shadow-sm hover:shadow-md transition duration-300">
          {/* Top Section */}
          <div>
            {/* Image */}
            <div className="bg-gray-100 p-4 rounded-xl flex justify-center">
              <img src={image} alt={bookName} className="h-48 object-contain" />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title and Author */}
            <h2 className="text-xl font-semibold mt-3">{bookName}</h2>
            <p className="text-sm text-gray-500 mt-1">By : {author}</p>
          </div>

          {/* Footer Section */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-dashed text-sm">
            <span className="text-gray-700 font-medium">{category}</span>
            <div className="flex items-center gap-1 text-gray-800 font-semibold">
              <span>{rating.toFixed(2)}</span>
              <Star className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
