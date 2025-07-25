import { Star } from "lucide-react"; // optional: install lucide-react for icons
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, tags, bookName, author, rating, category } = book;
  return (
    <div className="rounded-2xl border border-gray-300 p-4 shadow-sm max-w-sm hover:shadow-md transition duration-300">
      <Link to={"/"}>
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

        {/* Title */}
        <h2 className="text-xl font-semibold mt-3">{bookName}</h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mt-1">By : {author}</p>

        {/* Footer - Category + Rating */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed text-sm">
          <span className="text-gray-700 font-medium">{category}</span>
          <div className="flex items-center gap-1 text-gray-800 font-semibold">
            <span>{rating.toFixed(2)}</span>
            <Star className="w-4 h-4" strokeWidth={1.5} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
