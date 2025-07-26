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
        </div>
    );
};

export default ListedBooks;