import { NavLink } from "react-router-dom";


const Naveber = () => {
  return (
    <div>
        <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-white shadow-sm font-buttondiplay">
      
      <div className="text-xl font-bold text-black">Book Vibe</div>

      
      <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <li>
          <NavLink
            to="/"
            className="hover:text-black px-3 py-1 rounded-md hover:bg-green-50"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/listedBooks" className="hover:text-black hover:bg-green-50 px-3 py-1 rounded-md">
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/PagesToRead" className="hover:text-black hover:bg-green-50 px-3 py-1 rounded-md">
            Pages to Read
          </NavLink>
        </li>
      </ul>

      
      <div className="flex space-x-3">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm md:text-base">
          Sign In
        </button>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 text-sm md:text-base">
          Sign Up
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Naveber;
