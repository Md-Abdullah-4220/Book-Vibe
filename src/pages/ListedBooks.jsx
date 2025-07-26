import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
  return (
    <div className="py-4 px-6 md:px-16 h-min">
      <div className="flex flex-col">
        <div className="text-center p-10 rounded-2xl bg-gray-200">
          <h1 className="text-5xl font-bold">Book</h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="p-5 bg-green-500 text-white flex items-center justify-center cursor-pointer text-center rounded-2xl font-medium text-2xl">
            <button>Sort By</button>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <button className="px-4 py-2 font-medium text-blue-600 border-b-2 border-white">
        Read Books
      </button>
      <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-700">
        Wishlist Books
      </button>
      <div className="border-b-2 -m-2.5 border-gray-200 pb-2"></div>
    </div>
  );
};

export default ListedBooks;
