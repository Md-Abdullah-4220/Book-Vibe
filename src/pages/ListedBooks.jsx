import { IoIosArrowDown } from "react-icons/io";
import ReadsBooks from "../components/ReadsBooks"
import WhishlistBooks from "../components/WhishlistBooks";
import { useBookContext } from "../contexts/BookContext";

const ListedBooks = () => {
  const {activeTab} = useBookContext()
 
  return (
    <div className="py-4 px-6 md:px-16 h-min">
      <div className="flex flex-col">
        <div className="text-center p-10 rounded-2xl bg-gray-200">
          <h1 className="text-5xl font-bold">Book</h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="px-5 py-3 bg-green-500 text-white flex items-center justify-center cursor-pointer text-center rounded-2xl font-medium text-2xl">
            <button>Sort By</button>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Wishlist Books"
            defaultChecked={activeTab == "wish"}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <WhishlistBooks />

          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read Books"
            defaultChecked={activeTab == "read"}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            < ReadsBooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
