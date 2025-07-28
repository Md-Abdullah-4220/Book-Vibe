import { useState } from "react";
import ReadsBooks from "../components/ReadsBooks";
import WhishlistBooks from "../components/WhishlistBooks";
import { useBookContext } from "../contexts/BookContext";

const ListedBooks = () => {
  const { activeTab, readBooks, wishlistBooks } = useBookContext();

  const [selectedCategory, setSelectedCategory] = useState("Default");

  
  const filteredReadBooks =
    selectedCategory === "Default"
      ? readBooks
      : readBooks.filter((book) => book.category === selectedCategory);

  const filteredWishlistBooks =
    selectedCategory === "Default"
      ? wishlistBooks
      : wishlistBooks.filter((book) => book.category === selectedCategory);

  return (
    <div className="py-4 px-6 md:px-16 h-min">
      <div className="flex flex-col">
        <div className="text-center p-10 rounded-2xl bg-gray-200">
          <h1 className="text-5xl font-bold">Book</h1>
        </div>

        
        <div className="flex justify-center mt-5">
          <div className="px-5 py-3 bg-green-500 flex items-center justify-center cursor-pointer w-60 text-center rounded-2xl font-medium text-2xl">
            <select
              name="Category"
              id="Category"
              className="outline-none "
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="Default">All Categories</option>
              <option value="Classic">Classic</option>
              <option value="Fiction">Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        
        <div className="tabs tabs-lift mt-6">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Wishlist Books"
            defaultChecked={activeTab === "wish"}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            
            <WhishlistBooks books={filteredWishlistBooks} />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read Books"
            defaultChecked={activeTab === "read"}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            
            <ReadsBooks books={filteredReadBooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
